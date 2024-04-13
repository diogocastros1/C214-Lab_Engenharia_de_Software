export type Task = {
  id: number,
  title: string,
  description: string,
  targetDate: string,
  type?: string, // Para adicionar parametros opcionais basta adicionar o ?
  priority?: string,
  subTasks?: Task[]
}

export type UpdateTask = {
  id: number,
  title?: string,
  description?: string,
  targetDate?: string,
  type?: string, // Para adicionar parametros opcionais basta adicionar o ?
  priority?: string,
  subTasks?: Task[]
}