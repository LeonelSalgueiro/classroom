import styles from "./style.module.css"
import { Letter } from "../Letter"



export function LettersUsed(){
  return (
    <div className={styles.letters_used}>
       <h5>Letras Utilizadas</h5>

       <div>
        <Letter value="x" size="small" />
        <Letter value="r" size="small" />
       </div>
    </div>
  )
}