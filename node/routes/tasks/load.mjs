import path from "node:path";
import sqlite3 from "sqlite3";
import { open } from "sqlite";

export async function openDb() {
  return open({
    filename: path.join(process.cwd(),"/database.db"),
    driver: sqlite3.Database,
  });
}

export async function loadTasks() {
  const db = await openDb();
  const data = await db.all("SELECT * FROM tasks");

  return data;
}
