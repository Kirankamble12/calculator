import './App.css';
import './index.css';
import { InputField } from './Components/InputField';
import { Standard } from './Components/Standard';
import { Advanced } from './Components/Advanced';
import { useState } from 'react';

function App() {
  const [inputValue, setInputValue] = useState('');
  const [memory, setMemory] = useState(0);

  return (
    <div className="App-container">
      <InputField value={inputValue} />
      <Advanced setInputValue={setInputValue} memory={memory} setMemory={setMemory} />
      <Standard setInputValue={setInputValue} />
    </div>
  );
}

export default App;
