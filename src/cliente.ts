import { ToDoListAdapter } from "./adapters/TodoListAdapter";
import { Task } from "./models/Task";
import { TodoList } from "./services/TodoList";

const anyTask: Task = {
  id: 0,
  title: 'any_title',
  description: 'any_desciption',
  targetDate: '01/01/2025',
  type: 'any_type',
  priority: '1',
  subTasks: []
}

const adapter = new ToDoListAdapter()
const todoList = new TodoList(adapter)

todoList.add(anyTask)

console.log('TASKS', todoList.getTasks())