import { SetStateAction, useEffect, useState } from 'react';
import './styles/Hangman.css';
import CriaBotoesLetras from '../../components/LetterButtons';
import Guesses from '../../components/Guesses';
import MostraLetra from '../../components/Letters';
import Image from '../../components/Image';
import BotaoNovaPalavra from '../../components/BotaoNovaPalavra';
import Countdown from '../../components/Countdown';
import ResponseProps from './models/Response-model';


//Função principal exportada para o index.tsx
export default function Hangman() {

  const [trocaPalavra,setTrocaPalavra]:[boolean,React.Dispatch<React.SetStateAction<boolean>>] = useState(false);
  
  useEffect(()=>{
    PegaAPI();
  },[trocaPalavra])

  
  ///////////////////////////CONSTANTES/////////////////////////////////////////////////////
  
  const [letras, setLetras]: [number, React.Dispatch<React.SetStateAction<number>>] = useState<number>(0);
  async function PegaAPI(){
    try {
      const response = await fetch('https://localhost:7195/Hangman',{method:'GET'});
      
      const data: ResponseProps = await response.json();
      const letras: number= data.TamanhoPalavra;
      setLetras(letras);   
      
    } catch(error){
      console.log("Erro:", error);
    }
  }
  
  
  
  const initialState: JSX.Element[] = [];
  const [letrasElements, setLetrasElements]: [JSX.Element[], React.Dispatch<React.SetStateAction<JSX.Element[]>>] = useState(initialState);
  const[letraIndices, setLetrasIndices]:[number[] | undefined, React.Dispatch<React.SetStateAction<number[] | undefined>>] = useState();

  const [letrasCertas, setLetrasCertas]: [string[], React.Dispatch<React.SetStateAction<string[]>>] = useState(['']);
  const [letrasErradas, setLetrasErradas]: [string[], React.Dispatch<React.SetStateAction<string[]>>] = useState(['']);
  const [ultimoBotaoClicado, setUltimoBotaoClicado]: [string, React.Dispatch<React.SetStateAction<string>>] = useState('');
  const [acertos,setAcertos]:[number,React.Dispatch<React.SetStateAction<number>>] = useState(0);


  const [acabou, setAcabou]:[boolean,React.Dispatch<React.SetStateAction<boolean>>] = useState(false);
  useEffect(() => {
    setLetrasCertas([]);
    setLetrasErradas([]);
  }, [letras])
  ////////////////////////////////////////////RETORNO///////////////////////////////////////////////
  return (
    <>
      <div className='countdown'>
      <Countdown 
        letras={letras} 
        letrasCertas={letrasCertas} 
        setAcabou={setAcabou} 
        acabou={acabou}
        letrasErradas={letrasErradas}
        acertos={acertos}
      /></div>
      <div className='main'>
        <div className='imagem_acertos_erros'>
          <Image numeroLetrasErradas={letrasErradas.length} />

          {/* <div className='chutes_outer_container'>
            <p className='titulo_chutes'>Letras corretas:</p>
            <Guesses letras={letras} setLetrasElements={setLetrasElements} setLetrasCertasErradas={setLetrasCertas} letrasCertasErradas={letrasCertas} />
          </div> */}
          {/* <div className='chutes_outer_container'>
            <p className='titulo_chutes'>Letras incorretas:</p>
            <Guesses letras={letras} setLetrasElements={setLetrasElements} setLetrasCertasErradas={setLetrasErradas} letrasCertasErradas={letrasErradas} />
          </div> */}
        
        <MostraLetra 
          letrasElements={letrasElements} 
          letras={letras} 
          setLetrasElements={setLetrasElements} 
          letrasCertas={letrasCertas} 
          ultimoBotaoClicado={ultimoBotaoClicado} 
          setUltimoBotaoClicado={setUltimoBotaoClicado} 
          letrasIndices={letraIndices}
          setAcertos={setAcertos}
          acertos={acertos}
          />
          </div>
          
        <div className='teclado'>
          <CriaBotoesLetras
            letras={letras}
            letrasCertas={letrasCertas}
            setLetrasCertas={setLetrasCertas}
            letrasErradas={letrasErradas}
            setLetrasErradas={setLetrasErradas}
            acabou={acabou}
            setAcabou={setAcabou} 
            ultimoBotaoClicado={ultimoBotaoClicado} 
            setUltimoBotaoClicado={setUltimoBotaoClicado}   
            setLetraIndices={setLetrasIndices}  
            letraIndices={letraIndices}      
            acertos ={acertos} 
            />
        </div>
        { <BotaoNovaPalavra setTrocaPalavra = {setTrocaPalavra} trocaPalavra = {trocaPalavra} /> }
      </div>
    </>
  );
}



