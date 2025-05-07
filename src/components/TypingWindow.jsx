import "./TypingWindow.css";
import { useState } from "react";
import texto2 from "../functions/textoDia";

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
    <div>
      <div className="typing-windoww">
        <p id="palavras-janela">{texto2}</p>
      </div>
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
