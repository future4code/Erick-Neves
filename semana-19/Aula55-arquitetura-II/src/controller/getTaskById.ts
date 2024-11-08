import { Request, Response } from "express";
import { selectTaskById } from "../data/selectTaskById";
import { Task } from "../model/task";

export const getTaskById = async (
   req: Request,
   res: Response
) : Promise<Task | Response> => {
   try {

      const { id } = req.params

      const result = await selectTaskById(id)

      if (!result) {
         throw new Error("Tarefa não encontrada")
      }

      const taskWithUserInfo = {
         id: result.id,
         title: result.title,
         description: result.description,
         deadline: result.deadline,
         status: result.status,
         authorId: result.author_id,
         authorNickname: result.nickname
      }

      res.status(200).send(taskWithUserInfo)
      return taskWithUserInfo
   } catch (error) {
      res.status(400).send(error.message)
      return res.status(400).send(error.message)
   }
}