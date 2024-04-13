import { TodoList } from "./TodoList"
import { Task, UpdateTask } from "../models/Task"
import { TodoListRepository } from "../repository/TodoListRepository"

const anyTask: Task = {
  id: 0,
  title: 'any_title',
  description: 'any_desciption',
  targetDate: '01/01/2025',
  type: 'any_type',
  priority: '1',
  subTasks: []
}
const anyTaskUpdate: UpdateTask = {
  id: 0,
  title: 'any_title',
  description: 'Atualizacao da descriacao.',
  targetDate: '01/01/2025',
  type: 'any_type',
  priority: '1',
  subTasks: []
}

// Mock de TodoList 
const makeTodoListStub = (): TodoListRepository => {
  class TodoListStub implements TodoListRepository {
    create(task: Task) {
      return {
        success: true,
        error: false
      }
    }
    getAll() {
      return {
        success: [anyTask],
        error: false
      }
    }
    update(id: number, task: UpdateTask) {
      return {
        success: true,
        error: false
      }
    }
    delete(id: number) {
      return {
        success: true,
        error: false
      }
    }
  }
  return new TodoListStub();
}

describe('TodoList', () => {
  describe('Add teste', () => {
    test('Add uma nova task a lista', () => {
      const repositoryStub = makeTodoListStub()
      const todoInstance = new TodoList(repositoryStub) // injeção de dependencia
      todoInstance.add(anyTask)
      const tasks = todoInstance.getTasks()
      expect(tasks).toEqual([anyTask])
    })

    test('Add uma task invalida', () => {
      const repositoryStub = makeTodoListStub()
      const todoInstance = new TodoList(repositoryStub)
      const invalidField: any = {
        invalidField: 'Invalid field'
      }
      const response = todoInstance.add(invalidField)
      expect(response).toEqual('Missing properties in task object')
    })


  })
  describe('Get tasks', () => {
    test('Inicializando task com array vazio', () => {
      const repositoryStub = makeTodoListStub()
      jest.spyOn(repositoryStub, 'getAll').mockReturnValueOnce({
        success: [],
        error: false
      })
      const todoInstance = new TodoList(repositoryStub)
      const response = todoInstance.getTasks()
      expect(response).toEqual([])
    })
  })
  describe('Update tasks', () => {
    test('Atualizando uma task', () => {
      const repositoryStub = makeTodoListStub()
      const todoInstance = new TodoList(repositoryStub)
      todoInstance.add(anyTask)
      const update: UpdateTask = {
        id: 0,
        description: 'Atualizacao da descriacao.'
      }
      todoInstance.updateTask(update.id, update)
      console.log(todoInstance.getTasks())
      jest.spyOn(repositoryStub, 'getAll').mockReturnValueOnce({
        success: [anyTaskUpdate],
        error: false
      })
      const tasks = todoInstance.getTasks()
      expect(tasks).toEqual([anyTaskUpdate])
    })
  })
  describe('Delete tasks', () => {
    test('Removendo uma task', () => {
      const repositoryStub = makeTodoListStub()
      const todoInstance = new TodoList(repositoryStub)
      todoInstance.add(anyTask)
      todoInstance.removeTask(0)
      jest.spyOn(repositoryStub, 'getAll').mockReturnValueOnce({
        success: [],
        error: false
      })
      const tasks = todoInstance.getTasks()
      expect(tasks).toEqual([])
    })
  })
})
