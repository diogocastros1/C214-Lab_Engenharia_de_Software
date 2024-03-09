import readline from 'readline'
import { promisify } from 'util'
import { Task, TodoList } from './TodoList'

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

const userInput = promisify(reader.question).bind(reader)

async function getUserInput(prompt: string): Promise<any> {
  return await userInput(prompt)
}

const todoList = new TodoList()

async function addNewTask() {
  const newTask: Task = {
    title: '',
    description: '',
    targetDate: '',
    type: '', 
    priority: ''
  }
  newTask.title = await getUserInput('Digite o titulo da task: ')
  newTask.description = await getUserInput('Digite o descricao da task: ')
  newTask.targetDate = await getUserInput('Digite a data de entrega da task: ')

  todoList.add(newTask)
}

async function startTodoList() {
  const userChoise = await getUserInput('Digite 1 para adicionar uma tarefa e 0 para sair: ')

  switch (userChoise) {
    case '0':
      reader.close()
      return
    case '1':
      await addNewTask()
      console.log('Tarefas', todoList.getTask())
      reader.close()
      return
    default:
      reader.close()
  }
}

startTodoList()
