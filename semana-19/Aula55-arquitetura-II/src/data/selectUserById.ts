import { connection } from './connection'
import { User } from '../model/user'

const selectUserById = async (id: string): Promise<User[]> => {
  return await connection.select('*').from('to_do_list_users2').where({ id })
}

export default selectUserById