import { ToDoListAdapter } from "../adapters/TodoListAdapter"
import { Task, UpdateTask } from "../models/Task"
import { TodoListRepository } from "../repository/TodoListRepository"
import { TodoListServices } from "./interfaces/TodoListServices"

export class TodoList implements TodoListServices{
  private repository: TodoListRepository
  constructor(todoListRepository: TodoListRepository) {
    this.repository = todoListRepository
    
  }
  add(task: Task) {
    const missingProperties = ['title', 'description', 'targetDate'].filter(
      (prop) => !Object.keys(task).includes(prop)
    )
    try {
      if (missingProperties.length > 0) {
        return 'Missing properties in task object'
      }
      const adapter = this.repository
      const response = adapter.create(task)
      if(response.error){
        return 'Falha ao criar task'
      }
    } catch (error) {
      return new Error(JSON.stringify(error))
    }
  }

  getTasks() {
    const response = this.repository.getAll()
    if (response.error){
      return 'Falha ao listar tasks'
    }
    else {
      return response.success
    }
  }

  updateTask(index: number, task: UpdateTask) {
    if(!task){
      return 'Task not found'
    }  
    this.repository.update(index, task)
  }

  removeTask(index: number) {
    this.repository.delete(index)
  }
}