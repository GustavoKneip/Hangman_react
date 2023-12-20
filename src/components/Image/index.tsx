import hangman from '../../assets//images/hangman1.png';
import hangman_cabeca from '../../assets/images/hangman_cabeca.png';
import hangman_tronco from '../../assets/images/hangman(tronco).png';
import hangman_braco_direito from '../../assets/images/hangman(braco_direito).png';
import hangman_perna_direita from '../../assets/images/hangman(perna_direita).png';
import hangman_perna_eaquerda from '../../assets/images/hangman(perna_esquerda).png';
import hangman_completo from '../../assets/images/hangman(completo).png';
import { ImageProps } from './models/Image-model';


const imagem = [hangman,hangman_cabeca,hangman_tronco,hangman_braco_direito,hangman_perna_direita,hangman_perna_eaquerda,hangman_completo];



export default function Image({numeroLetrasErradas}:ImageProps){
    return <img className='imagem_forca' src={imagem[numeroLetrasErradas]} alt='hangman'></img>
}