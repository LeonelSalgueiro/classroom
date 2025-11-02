import styles from "./style.module.css"
import { Letter } from "../Letter"

export type LettersUsedProps = {
  value: string
  correct: boolean
}

type Props = {
  data: LettersUsedProps[]
}



export function LettersUsed({ data }: Props){
  return (
    <div className={styles.letters_used}>
       <h5>Letras Utilizadas</h5>

       <div>
        {data.map(({ value, correct }) => (<Letter value={value} key={value} size="small" color={correct ? "correct" : "wrong"}/>))}

       </div>
    </div>
  )
}