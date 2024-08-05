import { Router } from "express";
import { userController } from "../controllers/user.controller";

const router = Router();

router.get("/user", userController.findAllUsers);
router.get("/user/:id", userController.findUser);
router.post("/user/create", userController.createUser);
router.delete("/user/delete/:id", userController.deleteUser);

export default router;