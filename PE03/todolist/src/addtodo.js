import { useState } from 'react';

export default function AddToDo({ onAddTask }) {
    const [text, setText] = useState('');
    return (
        <>
            <input className="input-style"
                placeholder='Enter task description'
                value={text}
                onChange={e => setText(e.target.value)}
            />
            <br />
            <button className="blue_button" onClick={() => {
                setText('');
                onAddTask(text);
            }}>Add Task</button>
        </>
    )
}