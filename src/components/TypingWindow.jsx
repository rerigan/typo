import './TypingWindow.css';
import { useState } from 'react';


function TypingWindow() {

    const [palavraAtual, setPalavraAtual] = useState("");

    function handleChange(e) {
      setPalavraAtual(e.target.value);
    }
  
    function handleKeyDown(e) {
      if (e.key === " ") {
        e.preventDefault();
        nextPalavra();
      }
    }
  
    function nextPalavra() {
      
      setPalavraAtual("");
    }
  
    return (
      <div className="typing-window">
        <p className="palavras-janela">{palavraAtual}</p>
        <input
          type="text"
          className="input-window"
          value={palavraAtual}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
        />
      </div>
    );
  }

export default TypingWindow;