import { Router } from "https://deno.land/x/oak@v17.1.2/mod.ts";
import { UserController } from "./controllers/userController.ts";

const router = new Router();

router
    .get("/users", UserController.getUsers)
    .post("/users", UserController.addUser);

export default router;