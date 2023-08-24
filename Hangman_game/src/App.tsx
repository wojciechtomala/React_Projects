import { useCallback, useEffect, useState } from "react";
import words from './assets/wordList.json';
import './App.css';
import Keyboard from "./Keyboard";
import HangmanWord from "./HangmanWord";
import HangmanDrawing from "./HangmanDrawing";

function getWord(){
  return words[Math.floor(Math.random() * words.length)];
}

export default function App() {

  const [wordToGuess, setWordToGuess] = useState(getWord);

  const [guessedLetters, setGuessedLetters] = useState<string[]>([]);
  const incorrectLetters = guessedLetters.filter(letter => !wordToGuess.includes(letter));

  
  const isLoser = incorrectLetters.length >= 6;
  const isWinner = wordToGuess.split("").every(letter => guessedLetters.includes(letter));

  const addGuessedLetter = useCallback((letter: string) => {
    if(guessedLetters.includes(letter) || isLoser || isWinner) return;
    setGuessedLetters(currentLetters => [...currentLetters, letter]);
  }, [guessedLetters, isWinner, isLoser]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) =>{
      const key = e.key;
      if(!key.match(/^[a-z]$/)) return;
      e.preventDefault();
      addGuessedLetter(key);
    }
    document.addEventListener('keypress',handler);
    return () => {
      document.removeEventListener('keypress',handler);
    }
  }, [guessedLetters, addGuessedLetter]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) =>{
      const key = e.key;
      if(key !== "Enter") return;
      e.preventDefault();
      setGuessedLetters([]);
      setWordToGuess(getWord());
    }
    document.addEventListener('keypress',handler);
    return () => {
      document.removeEventListener('keypress',handler);
    }
  }, []); 

  return (
    <div className="main-container">
      <HangmanDrawing numberOfGuesses={incorrectLetters.length}/>
      <HangmanWord reveal={isLoser} guessedLetters={guessedLetters} wordToGuess={wordToGuess}/>
      <Keyboard disabled={isWinner || isLoser} activeLetters={guessedLetters.filter(letter => wordToGuess.includes(letter))}
      inactiveLetters={incorrectLetters}
      addGuessedLetter={addGuessedLetter}
      />
      <div className="result">
        {isWinner && "Winner! - Press enter"}
        {isLoser && "You lose! - Press enter"}
      </div>
    </div>
  )
}
