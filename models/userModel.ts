import { pool } from "../db.ts";
import { User } from "../interfaces/user.ts";

export class UserModel {
    static async getAllUsers(): Promise<User[]> {
        const connection = await pool.getConnection();
        try {
            const [rows] = await connection.query("SELECT * FROM users");
            return rows as User[];
        } finally {
            connection.release();
        }
    }

    static async createUser(user: User): Promise<number> {
        const connection = await pool.getConnection();
        try {
            const [result] = await connection.query(
                "INSERT INTO users (name, email) VALUES (?, ?)",
                [user.name, user.email]
            );
            return result.insertId;
        } finally {
            connection.release();
        }
    }
}
