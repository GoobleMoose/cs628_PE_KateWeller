import React, { useState } from 'react';
import RemoveToDo from './removetodo.js';

export default function ToDoList({
    tasks
  }) {
    return (
        <>
          {tasks.map(task => (
            <h4 className="section" key={task.id}>
              <Task
                task={task}
              />
            </h4>
          ))}
        </>
    );
  }

  function handleDelete(text) {

  }

  function Task({ task }) {
    return (
      <label key={task.id}>
          {task.text} 
          <RemoveToDo 
            onRemoveTask={handleDelete}
          />
      </label>
    );
  }

