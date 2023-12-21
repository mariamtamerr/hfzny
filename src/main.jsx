import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ThemeContext } from './context/Theme.js';

const Root = () => {
  const [contextTheme, setContextTheme] = useState('light');

  return (
    <React.StrictMode>
      <div className={contextTheme === 'dark' ? 'bg-dark text-light' : 'bg-white text-dark'}>
        <ThemeContext.Provider value={{ contextTheme, setContextTheme }}>
          <App />
        </ThemeContext.Provider>
      </div>
    </React.StrictMode>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(<Root />);
