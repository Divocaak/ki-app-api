import mysql from "npm:mysql2@^2.3.3/promise";

const pool = mysql.createPool({
    host: "localhost",
    user: "your_username",
    password: "your_password",
    database: "your_database",
    waitForConnections: true,
    connectionLimit: 5,
    queueLimit: 0
});

export { pool };
