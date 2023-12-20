import { BtnNovaPalProps } from "./models/BotaoNovaPalavra-model";
import "./styles/botaoNovaPalavra.css"



export default function BotaoNovaPalavra({setTrocaPalavra, trocaPalavra}:BtnNovaPalProps){
    const botaoNovaPalavra = () => {
        setTrocaPalavra(!trocaPalavra);
    }
    return <button className='botaoNovaPalavra' onClick={() => botaoNovaPalavra()}>Nova palavra</button>

}