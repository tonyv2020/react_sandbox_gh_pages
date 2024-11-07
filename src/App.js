// src/App.js
import React from 'react';
import './styles/App.css';
import Registration from './components/RegistrationForm';

function App() {
  return (
      <div className="App">
        <header className="App-header">
          <h1>My React App</h1>
        </header>
        <main>
          <Registration />
        </main>
      </div>
  );
}

export default App;