import connection from "../connection"

export default async function insertUser(
    id: string,
    title: string,
    nickname: string,
    email: string
) {
    await connection.insert({
        id,
        title,
        email,
        nickname
    }).into('to_do_list_users')
}