export interface MostraLetraProps {
  letras: number
  letrasElements: JSX.Element[];
  setLetrasElements: React.Dispatch<React.SetStateAction<JSX.Element[]>>
  letrasCertas: Array<string>
  ultimoBotaoClicado: string;
  setUltimoBotaoClicado: React.Dispatch<React.SetStateAction<string>>;
  letrasIndices:number[] | undefined
  acertos:number;
  setAcertos:React.Dispatch<React.SetStateAction<number>>;
}