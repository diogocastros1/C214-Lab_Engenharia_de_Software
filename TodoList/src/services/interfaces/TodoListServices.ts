import { Task, UpdateTask } from "../../models/Task";

export interface TodoListServices {
  add: (task: Task) => void | string | Error
  getTasks: () => Task[] | string | unknown
  updateTask: (id: number,task: UpdateTask) => Task[] | string | Object | void
  removeTask: (index: number) => void
}