import './History.css';

function History() {
    return(
        <div className="history-wpm">
            <div className='history'>
            <h2>History</h2>
            <ul>
                <li>Typing test 1: 50 WPM</li>
                <li>Typing test 2: 55 WPM</li>
                <li>Typing test 3: 60 WPM</li>
            </ul>
            </div>
            <div className='wpm'><h3>WPM</h3><h5>(palavras por minuto)</h5>
            <h4 className='wpm-now' id='wpm-now'>128</h4></div>
        </div>
    )
}

export default History;