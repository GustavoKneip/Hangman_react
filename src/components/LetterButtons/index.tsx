import { CriaBotoesProps } from "./models/CriaBotoes-model";
import { botaoLetraClicadoProps } from "./models/BotaoLetraClicado-model";
import { PegaAPIPostProps } from "./models/PegaAPIPost-model";
import { useEffect, useState } from "react";
import LetraRespondeProps from "./models/LetraResponse-model";

///////////////////////////////////////FUNÇÃO DE CLIQUE DO BOTÃO///////////////////////////////////////////////////////////
function BotaoLetraClicado({ letraBotao, setUltimoBotaoClicado }: botaoLetraClicadoProps) {
    setUltimoBotaoClicado(letraBotao);
};

async function PegaAPIPost({ ultimoBotaoClicado, setLetraIndices}: PegaAPIPostProps) {
    try {
        const response = await fetch('https://localhost:7195/Hangman', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({letra: ultimoBotaoClicado})})

        const data:LetraRespondeProps = await response.json();
        const indices: number[] = data.indices;
        console.log('API Response:', data);
        setLetraIndices(indices);
        console.log(indices);
    } catch (error) {
        console.log("Erro:", error);
    }
}



///////////////////////////////////////////FUNÇÃO QUE CRIA OS BOTOES/////////////////////////////////////////////////////////
export default function CriaBotoesLetras({ letras, letrasCertas, setLetrasCertas, letrasErradas, setLetrasErradas, acabou,ultimoBotaoClicado,setUltimoBotaoClicado,setLetraIndices,letraIndices,acertos}: CriaBotoesProps) {
    const alfabeto: Array<string> = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

    useEffect(() => {
        if(ultimoBotaoClicado != '')
            PegaAPIPost({ ultimoBotaoClicado,setLetraIndices });
    }, [ultimoBotaoClicado])

    useEffect(() => {
        let novaLetrasCertas: string[] = [...letrasCertas];
        let novaLetrasErradas: string[] = [...letrasErradas];
        // Muda as arrays de acertos e erros baseado na resposta do jogador
        if (letraIndices?.length != 0) {
            novaLetrasCertas.push(ultimoBotaoClicado);
        } else {
            novaLetrasErradas.push(ultimoBotaoClicado);
        }

        setLetrasCertas(novaLetrasCertas);
        setLetrasErradas(novaLetrasErradas);
        console.log('letras indices foi mudado')
    }, [letraIndices])

    useEffect(()=>{
        setUltimoBotaoClicado('')
    },[letras])



    const botoes = alfabeto.map((letraBotao, index) => {
        const isDisabled = letrasCertas.includes(letraBotao) || letrasErradas.includes(letraBotao);
        return (<button className='botoesLetras' key={index}
            onClick={() => BotaoLetraClicado({
                letraBotao,   
                setUltimoBotaoClicado
            })}
            disabled={isDisabled}>
            {letraBotao}
        </button>
        )
    });
    if (acertos === letras) {
        return <><p className="texto_vitoria">Você Ganhou!</p></>
    } else if (letrasErradas.length >= 200 || acabou === true) {
        return <><p className="texto_derrota">Você perdeu!</p></>
    } else {
        return <>{botoes}</>;

    }
}

