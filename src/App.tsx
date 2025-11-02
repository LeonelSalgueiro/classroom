import styles from "./app.module.css"
import { WORDS } from "./utils/words"
import type { Challenge } from "./utils/words"
import { useEffect, useState } from "react"

import { Header } from "./components/Header"
import { Tip } from "./components/Tip"
import { Letter } from "./components/Letter"
import { Input } from "./components/Input"
import { Button } from "./components/Button"
import { LettersUsed } from "./components/LettersUsed"
import type { LettersUsedProps } from "./components/LettersUsed"

export function App(){
  
  const [attempts, setAttempts] = useState(0)
  const [challenge, setChallenge ] = useState<Challenge | null>(null)
  const [letter, setLetter] = useState("")
  const [lettersUsed, setLettersUsed] = useState<LettersUsedProps[]>([])

  function handleRestartGame(){
    alert("Reiniciar o jogo!")
  }

  function startGame(){
    const index = Math.floor(Math.random() * WORDS.length)
    const randomWord = WORDS[index]
    setChallenge(randomWord)

    setAttempts(0)
    setLetter("")
  }
  
  useEffect( () => {
    startGame()
  }, [])

  if(!challenge){
    return
  }

  return (
    <div className={styles.container}>
      <main>
        <Header current={attempts} max={10} onRestart={handleRestartGame}/>
        <Tip tip="Linguagem de programação dinâmica."/>
        <div className={styles.word}>
          {
            challenge.word.split("").map(() => (<Letter value="" />))
          }

        </div>

        <h4>Palpite</h4>
        <div className={styles.guess}>
          <Input autoFocus maxLength={1} placeholder="?" />
          <Button title="Confirmar" />
        </div>

        <LettersUsed data={lettersUsed}/>
      </main>
    </div>

  )
}
