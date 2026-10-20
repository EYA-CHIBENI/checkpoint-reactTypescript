import React from 'react';
import Greeting from './Greeting';
import Counter from './Counter';
import './App.css';
const App: React.FC = () => {
  return (
    <div>
      <h1>React TypeScript App</h1>
      <Greeting name="Eya" />
      <Counter />
    </div>
  );
};

export default App;