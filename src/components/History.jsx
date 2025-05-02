import './History.css';

function History() {
    return(
        <div className="history-wpm">
            <div className='history'>
            <h2>History</h2>
            
            <table className='history'>
                <thead>
                    <tr>
                        <th>Data</th>
                        <th>WPM</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>02/05</td>
                        <td>50</td>
                    </tr>
                    <tr>
                        <td>03/05</td>
                        <td>55</td>
                    </tr>
                    <tr>
                        <td>04/05</td>
                        <td>60</td>
                    </tr>
                </tbody></table>
        
        
            </div>
            <div className='wpm'><h3>WPM</h3><h5>(palavras por minuto)</h5>
            <h4 className='wpm-now' id='wpm-now'>128</h4></div>
        </div>
    )
}

export default History;