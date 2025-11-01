import styles from "./style.module.css"


type Props= {
  value?: string;
  size?: "default" | "small"
  color?: "default" | "correct" | "wrong"
}
export function Letter({ value = "", size = "default", color = "default" }: Props ){
  return (
    <div 
    className={`
    ${styles.letter} 
    ${size === "small" && styles.letter_small}
    ${color === "correct" && styles.letter_correct}
    ${color === "wrong" && styles.letter_wrong}`}
    >
       <span>{value}</span>
    </div>
 )
}
