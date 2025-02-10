import { useReducer } from 'react';
import ToDoList from './todolist.js';
import AddToDo from './addtodo.js';
import "./todolist.css";

export default function ToDoListApp() {
  const [tasks, dispatch] = useReducer(
    tasksReducer,
    initialTasks
  );

  function handleAddTask(text) {
    dispatch({
      type: 'added',
      id: nextId++,
      text: text,
    });
  }

  return (
    <>
      <h1 className='header'>To Do List App</h1>
      <AddToDo
        onAddTask={handleAddTask}
      />
      <ToDoList
        tasks={tasks}
      />
    </>
  );
}

function tasksReducer(tasks, action) {
  switch (action.type) {
    case 'added': {
      return [...tasks, {
        id: action.id,
        text: action.text,
        done: false
      }];
    }
    default: {
      throw Error('Unknown action: ' + action.type);
    }
  }
}

let nextId = 3;
const initialTasks = [
  { id: 0, text: 'Laundry', done: true },
  { id: 1, text: 'Sweep', done: true },
  { id: 2, text: 'Groceries', done: false }
];
