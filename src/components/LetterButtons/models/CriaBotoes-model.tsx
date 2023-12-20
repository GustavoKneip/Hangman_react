export interface CriaBotoesProps {
    letras: number;
    letrasCertas: string[];
    setLetrasCertas: React.Dispatch<React.SetStateAction<string[]>>;
    letrasErradas: string[];
    setLetrasErradas: React.Dispatch<React.SetStateAction<string[]>>;
    acabou: boolean;
    setAcabou: React.Dispatch<React.SetStateAction<boolean>>;
    ultimoBotaoClicado: string;
    setUltimoBotaoClicado: React.Dispatch<React.SetStateAction<string>>;
    setLetraIndices:React.Dispatch<React.SetStateAction<number[] | undefined>>;
    letraIndices:number[] | undefined
    acertos:number;

}