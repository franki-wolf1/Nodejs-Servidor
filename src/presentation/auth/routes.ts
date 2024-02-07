import { Router } from "express";
import { AuthController } from "./controller";
import { AuthDatasourceImpl, AuthRepositoryImpl } from "../../infrastructure";
//import { AuthDatasourceImpl, AuthRepositoryImpl } from "../../infrastructure";
//import { AuthMiddleware } from "../middlewares/auth.middleware";

export class AuthRoutes {
  static get routes(): Router {
    const router = Router();

    const datasource = new AuthDatasourceImpl();
    const authRepository = new AuthRepositoryImpl(datasource);

    const controller = new AuthController(authRepository); /*authRepository*/

    // Definir todas mis rutas de CONTROL
    router.get("/peticionget", (req, res) => {
      res.send("¡Hola desde Express!");
    });

    router.post("/firstregister", (req, res) => {
      res.json("firstregister");
    });

    router.post("/firstlogin", (req, res) => {
      res.json("firstlogin");
    });

    router.post("/login", (req, res) => controller.loginUser(req, res));

    router.post("/register", controller.registerUser);
    //router.post("/login", controller.loginUser);
    //router.post("/register", controller.registerUser);

    //router.get("/", [AuthMiddleware.validateJWT], controller.getUsers);

    return router;
  }
}
