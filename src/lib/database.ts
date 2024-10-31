// src/lib/database.js
import mysql from 'mysql2/promise';

// Set up a connection pool
const pool = mysql.createPool({
    host: import.meta.env.db_host,
    user: import.meta.env.db_user,
    password: import.meta.env.db_password,
    database: import.meta.env.db_database,
});

export async function query(sql: string, params: any) {
    const [rows] = await pool.execute(sql, params);
    return rows;
}
