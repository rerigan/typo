
import "./App.css";
import TypingWindow from "./components/TypingWindow";
import History from "./components/History";

function App() {


  return (
   
      <div className={'typing-window'}>
        <h1 className={'titulo'}>Teste de Digitação</h1>
        <h3>Quantas palavras você escreve por minuto?</h3>
        <TypingWindow />
        <History />
      </div>
    
  );
}

export default App;
