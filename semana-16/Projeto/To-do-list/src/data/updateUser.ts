import connection from "../connection";

export default async function updateUser(
    id: string,
    title?: string,   //(?) (opcionais) para indicar que podem ou não ir 
    nickname?: string,
    email?: string
) {
    if (title) {
        await connection.raw(`
            UPDATE to_do_list_users
            SET title = '${title}'
            WHERE id = '${id}';
        `)
    }

    if (nickname) {
        await connection.raw(`
        UPDATE to_do_list_users
        SET nickname = '${nickname}'
        WHERE id = '${id}';
        `)
    }

    if (email) {
        await connection.raw(`
        UPDATE to_do_list_users
        SET email = '${email}'
        WHERE id = '${id}';
        `)
    }
}

