import React from 'react';
import Registration from './components/Registration';
import './styles/App.css';

const App = () => {
    return (
        <div className="app">
            <header className="header">
                <nav>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/register">Register</a></li>
                        <li><a href="/about">About</a></li>
                    </ul>
                </nav>
            </header>
            <main className="main-content">
                <Registration />
            </main>
            <footer className="footer">
                <p>&copy; 2024 My Modern App. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default App;