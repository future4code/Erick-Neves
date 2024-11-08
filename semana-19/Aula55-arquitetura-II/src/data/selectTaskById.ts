import { connection } from "../data/connection";

export const selectTaskById = async (
   id: string
): Promise<any> => {
   const result = await connection.raw(`
        SELECT tasks.*, nickname FROM to_do_list_tasks2 AS tasks
        JOIN to_do_list_users2 AS users
        ON author_id = users.id
        WHERE tasks.id = '${id}';
    `)

   return result[0][0]
}