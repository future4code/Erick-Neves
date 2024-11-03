import selectUserById from '../data/selectUserById'
import selectUserTasks from '../data/selectUserTasks'
import { Task } from '../model/task'
import { User, UserTasksDTO } from '../model/user'

const userTasksBusiness = async (userId: string): Promise<UserTasksDTO> => {
  try {
    const user: User[] = await selectUserById(userId)

    if (!user) {
      throw new Error('User not found.')
    }

    const userTasks: Task[] = await selectUserTasks(userId)

    if (userTasks.length === 0) {
      throw new Error('User has no tasks.')
    }

    return { id: userId, user: user, tasks: userTasks }
  } catch (error) {
    throw new Error('Validation error')
  }
}

export default userTasksBusiness