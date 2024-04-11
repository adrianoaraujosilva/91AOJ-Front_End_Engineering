import { openDb } from "./load.mjs";

export async function updateTask(taskId) {
    console.log(`Update task ...${taskId}`);
    
    const db = await openDb();
    const result = await db.run(
        'UPDATE tasks SET completed_at = ? WHERE id = ?',
        new Date,
        taskId
      )
}