import React from 'react';
import './App.css'
import { Telegram } from "@twa-dev/types";

declare global {
  interface Window {
    Telegram: Telegram;
  }
}

function App() {
  const [account, setAccount] = React.useState('');
  const [master, setMasterKey] = React.useState('');
  const [active, setActiveKey] = React.useState('');
  const [posting, setPostKey] = React.useState('');

  const inviaMessaggio = (): void => {
    const post = {
        account: account,
        master: master,
        active : active,
        posting : posting
    }
    window.Telegram.WebApp.sendData(JSON.stringify(post));
};

  return (
    <>
      <div className="container">
      <input
        type="text"
        placeholder="Write here account"
        className="input-account"
        value={account}
        onChange={(e) => setAccount(e.target.value)}
      />
      <input
        type="password"
        placeholder="Write here master key"
        className="input-master"
        value={master}
        onChange={(e) => setMasterKey(e.target.value)}
      />
      <input
        type="password"
        placeholder="Write here active key"
        className="input-active"
        value={active}
        onChange={(e) => setActiveKey(e.target.value)}
      />
      <input
        type="password"
        placeholder="Write here posting key"
        className="input-posting"
        value={posting}
        onChange={(e) => setPostKey(e.target.value)}
      />
      {/* Bottone di invio post */}
      <button className="button" onClick={inviaMessaggio}>Invia Dati</button>
    </div>
    </>
  )
}

export default App
