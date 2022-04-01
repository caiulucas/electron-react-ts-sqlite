import React, { useState } from 'react';
import {hot} from 'react-hot-loader/root';
import ElectronSVG from './electron-icon.svg';

import './App.css';

type User = {
  id: number;
  name: string;
}

function App() {
  const [response, setResponse] = useState<User[]>([]);

  function send() {
    window.Main.send('users').then((result: any) => {
      console.log(result);
      setResponse(result)
    });
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={ElectronSVG} className="App-logo" alt="logo" />
          <p>
            Electron, Typescript and React.
          </p>      
        <a
          className="App-link"
          href="https://github.com/caiulucas"
          target="_blank"
          rel="noopener noreferrer"
        >
          Made by caiulucas
        </a>

        <button className="App-button" onClick={send}>Test SQLite</button>
        {!!response && (
          <table className="App-table">
            <thead>
              <th>Id</th>
              <th>Name</th>
            </thead>
            {response.map(item => (
              <tr>
                <td>{item.id}</td>
                <td>{item.name}</td>
              </tr>
            ))}
          </table>
        )}
      </header>
    </div>
  );
}

export default hot(App);