import dotenv from "dotenv";
import { open } from "sqlite";
import sqlite3 from "sqlite3";

dotenv.config();

// Initialize and export the database connection promise
const initDb = async () => {
  // Open the database (creates the file if it doesn't exist)
  const db = await open({
    filename: process.env.DB_FILE || "./database.sqlite",
    driver: sqlite3.Database,
  });

  // Auto-create the users table if it doesn't exist
  await db.exec(`
    CREATE TABLE IF NOT EXISTS users (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      username TEXT NOT NULL UNIQUE,
      email TEXT NOT NULL UNIQUE,
      password_hash TEXT NOT NULL,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    )
  `);

  console.log("SQLite database initialized");
  return db;
};

const dbPromise = initDb();
export default dbPromise;
