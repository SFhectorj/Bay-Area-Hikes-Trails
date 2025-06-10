import React from 'react';
import Header from './components/Header';
import Board from './components/Board';
import './App.css';

function App() {
  return (
    <div className='App'>
      <Header />
      <main>
        <Board />
      </main>
    </div>
  );
}

export default App;
