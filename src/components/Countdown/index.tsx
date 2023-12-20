import React from 'react';
import { useState, useEffect } from 'react';
import "./styles/Countdown.css";
import { CountdownProps } from './models/Countdown-model';



export default function Countdown({ letras, setAcabou, acabou, letrasErradas, acertos }: CountdownProps) {
    const [tempo, setTempo] = useState(30);

    useEffect(() => {
        const intervalId = setInterval(() => {
            atualizaTempo(tempo);
        }, 1000);
        return () => clearInterval(intervalId);
    }, [tempo])

    useEffect(() => {
        setTempo(30);
        setAcabou(false);
    }, [letras])

    useEffect(()=>{
        if(letrasErradas.length>=6){
            console.log(letrasErradas)
            setAcabou(true);
        }
    },[letrasErradas])

    function atualizaTempo(tempo: number) {
        if ((tempo <= 0) || (letrasErradas.length>=6) || ((acertos === letras) && letras != 0) ) {
            setAcabou(true);
        } else {
            setTempo(tempo - 1);
            // setAcabou(false);
        }
    }

    if (tempo <= 10 && acabou === false) {
        return <>
            <div className='cover'></div>
            <div className="tempo_div piscar">
                <p className="tempo_texto">{tempo}</p>
            </div>
        </>
    } else {

        return <>
            <div className="tempo_div">
                <p className="tempo_texto">{tempo}</p>
            </div>
        </>
    }
}