import { useState } from 'react';

export default function RemoveToDo({ onRemoveTask }) {
  const [text, setText] = useState('');
  return (
      <>
          <button className="red_button" onClick={() => {
              setText();
              onRemoveTask(text);
          }}>Delete</button>
      </>
  )
}
