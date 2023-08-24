type HangmanWordProps = {
    guessedLetters: string[],
    wordToGuess: string,
    reveal?: boolean
}
export default function HangmanWord({guessedLetters, wordToGuess, reveal = false} : HangmanWordProps) {
    return (
    <div className="hangman-word">
        {wordToGuess.split("").map((letter,index)=>(
            <span key={index} className="letter-container">
                <span style={{visibility: guessedLetters.includes(letter) || reveal ? "visible" : "hidden", color:!guessedLetters.includes(letter) && reveal ? "red" : "black"}}>{letter}</span>
            </span>
        ))}
    </div>
  )
}
