import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prima = new PrismaClient();

class ProductController {
    
}

export const productController = new ProductController();