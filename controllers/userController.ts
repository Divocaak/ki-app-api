import { UserModel } from "../models/userModel.ts";
import { User } from "../interfaces/user.ts";
import { Context } from "https://deno.land/x/oak@v17.1.2/mod.ts";

export class UserController {
    static async getUsers(context: Context) {
        try {
            const users = await UserModel.getAllUsers();
            context.response.body = users;
        } catch (error) {
            context.response.status = 500;
            context.response.body = { message: "Error retrieving users" };
        }
    }

    static async addUser(context: Context) {
        try {
            const { name, email } = await context.request.body({ type: "json" }).value;

            // Create user object of type `User`
            const user: User = { name, email };

            // Insert user into database
            const userId = await UserModel.createUser(user);
            context.response.status = 201;
            context.response.body = { id: userId, ...user };
        } catch (error) {
            context.response.status = 500;
            context.response.body = { message: "Error creating user" };
        }
    }
}