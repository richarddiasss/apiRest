import { Request, Response } from "express";
import { Prisma, PrismaClient } from "@prisma/client";
import auth from "../config/auth";

const prisma = new PrismaClient();

 class UserController {

    public async createUser(request: Request, response: Response) {

        try {
            const {cpf, nome, email, password } = request.body;
            const { hash, salt } = auth.generatePassword(password);

            let userInput: Prisma.UsuarioCreateInput = {
                cpf,
                nome,
                email,
                hash,
                salt,
            };

            console.log(userInput);
          
        

            const newUser = await prisma.usuario.create({
                data:userInput,
            });

            return response.status(201).json({message:"Usuário criado com sucesso", usuario: newUser})
        } catch (error) {
            return response.status(500).json({message:"Erro interno no servidor", error})
        }

    }

    public async findUser(request: Request, response: Response) {

        const { id } = request.params;

        try {
            const user = await prisma.usuario.findUnique({
                where: {
                    id: Number(id),
                },
            })

        if(user != null){
            return response.status(201).json({ message:"Usuário encontrado!", usuario: user})
        }

        return response.status(401).json({ message:"Usuário não encontrado!"})

        } catch (error) {
            return response.status(500).json({message:"Erro interno no servidor", error})
        }

    }

    public async findAllUsers(request: Request, response: Response) {

        try {

            const allUsers = await prisma.usuario.findMany()

            return response.status(201).json({users: allUsers})
        } catch (error) {
            return response.status(500).json({message:"Erro interno no servidor", error})
        }

    }

    public async deleteUser(request: Request, response: Response) {

        const { id } = request.params;

        try {

            const user = await prisma.usuario.delete({
                where: {
                    id: Number(id),
                },
            })
            

        if(user != null){
            return response.status(201).json({user, message:"Usuário não existe!"})
        }

        return response.status(401).json({ message:"Usuário deletado"})

        } catch (error) {
            return response.status(500).json({message:"Erro interno no servidor", error})
        }

    }
    
}


export const userController = new UserController();