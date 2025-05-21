import './Contador.css'
import { useState } from 'react'

export default function Contador() {
    const [contador, setNumero] = useState(0);

    function incrementarNumero() {
        setNumero(contador + 1);
    };

    function decrementarNumero() {
        setNumero(contador - 1);
    };
    function zerarNumero() {
        setNumero(0);
    };

    
    return (
        <div className='box'>
            <span>{contador}</span>
            <div className='botoes'>
                <button className='botao' onClick={decrementarNumero}>-</button>
                <button onClick={zerarNumero}>reset</button>
                <button className='botao' onClick={incrementarNumero}>+</button>
            </div>

        </div>
    )
}
