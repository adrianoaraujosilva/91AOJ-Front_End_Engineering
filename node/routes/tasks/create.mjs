import { openDb } from "./load.mjs";

export async function createTask(payload) {
    console.log('Creating task...');
    console.log('Payload:', payload);
    
    const db = await openDb();
    
    const result = await db.run(
        'INSERT INTO tasks (title) VALUES (?)',
        payload.title
      )

}