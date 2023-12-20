import { useEffect, useState } from "react";
import { GuessesProps } from "./models/Guessed-model";



export default function RightGuesses({ letras, setLetrasElements, setLetrasCertasErradas, letrasCertasErradas }: GuessesProps) {

  useEffect(() => {
    setLetrasCertasErradas([]);
  }, [letras])

  const elementoLetrasCertasErradas = letrasCertasErradas.map((letraCertaErrada, index) => {
    return (
      <p className='chutes' key={index}>
        {letraCertaErrada}
      </p>
    )
  })
  return <>
    <div className='chutes_container' >{elementoLetrasCertasErradas}</div></>
}
