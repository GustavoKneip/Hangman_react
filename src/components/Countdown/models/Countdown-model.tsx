export interface CountdownProps {
    letras: number;
    letrasCertas: string[];
    setAcabou: React.Dispatch<React.SetStateAction<boolean>>;
    acabou: boolean;
    letrasErradas:string[];
    acertos:number;
}