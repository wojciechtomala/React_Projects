import styles from "./Keyboard.module.css";
const KEYS = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
]

type KeyboardProps = {
    activeLetters: string[], 
    inactiveLetters: string[],
    disabled: boolean,
    addGuessedLetter: (letter:string) => void
}

export default function Keyboard({activeLetters, inactiveLetters, disabled = false, addGuessedLetter} : KeyboardProps) {
  return (
    <div className={styles.Keyboard}>
        {KEYS.map(key => {
            const isActive  =activeLetters.includes(key);
            const isInactive  =inactiveLetters.includes(key);
            return (
                <button 
                onClick={() => addGuessedLetter(key)} 
                className={`${styles.Key} ${isActive ? styles.active : ""} ${isInactive ? styles.inactive : ""}`} 
                key={key}
                disabled={isInactive || isActive || disabled}
                >
                {key}
                </button>
            )
        })}
    </div>
  )
}
