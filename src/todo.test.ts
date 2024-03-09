import { TodoList, UpdateTask } from "./TodoList"

const anyTask = {
  title: 'any_title',
  description: 'any_desciption',
  targetDate: '01/01/2025',
  type: 'any_type',
  priority: '1',
  subTasks: []
}
const anyTaskUpdate = {
  title: 'any_title',
  description: 'Atualizacao da descriacao.',
  targetDate: '01/01/2025',
  type: 'any_type',
  priority: '1',
  subTasks: []
}

describe('TodoList', () => {
  describe('Add teste', () => {
    test('Add uma nova task a lista', () => {
      const todoInstance = new TodoList()
      todoInstance.add(anyTask)
      const tasks = todoInstance.getTask()
      expect(tasks).toEqual([anyTask])
    })

    test('Add uma task invalida', () => {
      const todoInstance = new TodoList()
      const x: any = {
        a: 'aaaaaa'
      }
      todoInstance.add(x)
      const tasks = todoInstance.getTask()
      expect(tasks).toEqual([])
    })

    test('Atualizando uma task', () => {
      const todoInstance = new TodoList()
      todoInstance.add(anyTask)
      const update: UpdateTask = {
        description: 'Atualizacao da descriacao.'
      }
      todoInstance.updateTask(0, update)
      const tasks = todoInstance.getTask()
      expect(tasks).toEqual([anyTaskUpdate])
    })
    test('Removendo uma task', () => {
      const todoInstance = new TodoList()
      todoInstance.add(anyTask)
      todoInstance.removeTask(0)
      const tasks = todoInstance.getTask()
      expect(tasks).toEqual([])
    })
  })
})
