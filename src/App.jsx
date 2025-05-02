
import "./App.css";
import TypingWindow from "./components/TypingWindow";
import History from "./components/History";


function App() {


  return (
   
      <div className={'typing-window'}>
        <h1 className={'titulo'}>Typ_</h1>
        <h3>Quantas palavras você escreve por minuto?</h3>
        <a href="https://github.com/rerigan" target='_blank'><ion-icon name="logo-github" className="git-logo"></ion-icon></a>
        <TypingWindow />
        <History />
        <div className='footer'><h5>Built by Rerigan</h5></div>
      </div>
    
  );
}

export default App;
