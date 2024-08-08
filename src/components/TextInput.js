// components/TextInputCounter.js
import { useRef, useState, useEffect } from 'react';

const TextInputCounter = () => {
  const [text, setText] = useState('');
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const handleChange = (event) => {        
    setText(event.target.value);
  };

  return (
    <div>
      <input
        type="text"
        ref={inputRef} 
        value={text}
        onChange={handleChange}
        placeholder="Type something..."
      />
      <p>Character count: {text.length}</p>
    </div>
  );
};

export default TextInputCounter;
