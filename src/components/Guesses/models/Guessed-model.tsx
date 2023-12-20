export interface GuessesProps {
    letras: number;
    setLetrasElements: React.Dispatch<React.SetStateAction<JSX.Element[]>>
    setLetrasCertasErradas: React.Dispatch<React.SetStateAction<string[]>>
    letrasCertasErradas: string[]
  }