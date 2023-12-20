import { useEffect } from "react";
import { MostraLetraProps } from "./models/letter-model";
import "./styles/letters.css"


///////////////////////////////   Muda o estado da array quando o botao é clicado
export default function MostraLetra({ letras, letrasElements, setLetrasElements, ultimoBotaoClicado, letrasIndices, setAcertos, acertos}: MostraLetraProps) {

  useEffect(() => {
    let numLetrasCertas =0;
    const updatedLetrasElements: JSX.Element[] = letrasElements.map((element, index) => {
      // Check if the key matches the one you want to update
        if (Array.isArray(letrasIndices)) {
          if (letrasIndices?.includes(index)) {
            // Update the specific element with the new content or modifications
            numLetrasCertas+=1;
            return <p key={index} className='letra'>{ultimoBotaoClicado}</p>;
          }
        return element || <p key={index} className='letra'>{}</p>;
      }
    }) as JSX.Element[]
    setLetrasElements(updatedLetrasElements);
    setAcertos(acertos+numLetrasCertas);
    console.log(acertos)
    console.log(letras)

  }, [letrasIndices])

  useEffect(() => {
    // Initialize an array with new elements
    const newLetrasElements: JSX.Element[] = [];
    for (let i: number = 0; i < letras; i++) {
      newLetrasElements.push(<p key={i} className='letra'>{}</p>);
    }

  
    // Set the state with the new array
    setLetrasElements(newLetrasElements);
    setAcertos(0);
  }, [letras]);
  

  return (<>
    <div className='palavra-secreta'>{letrasElements}</div>
  </>)

}