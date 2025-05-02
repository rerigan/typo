import './TypingWindow.css';
function TypingWindow() {


return (
    
    
    <div className="typing-window">
        
        <p className="palavras-janela"><span className='current-word'>palavra </span><span className='next-words'>palavra palavra palavra palavra palavra palavra palavra palavra palavra palavra palavra palavra palavra palavra palavra palavra palavra palavra palavra palavra palavra palavra palavra palavra palavra palavra palavra palavra palavra palavra palavra palavra palavra palavra palavra  palavra</span></p>
        <div className='input-container'>
            <input type="text" className="input-window"  />
            <div className='btn-timer'>
                <a href="#" className="btn">▶</a>
            </div>
        </div>
       
    </div>
)

}

export default TypingWindow;