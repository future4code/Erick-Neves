export type Task = {
   id: string,
   title: string,
   description: string,
   deadline: string,
   authorId: string
}

export type createTaskInputDTO = {
   title: string,
   description: string,
   deadline: string,
   authorId: string
}