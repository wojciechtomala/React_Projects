
const HEAD = (<div className="head"></div>);
const BODY = (<div className="body"></div>);
const RARM = (<div className="rarm"></div>);
const LARM = (<div className="larm"></div>);
const RLEG = (<div className="rleg"></div>);
const LLEG = (<div className="lleg"></div>);

type HangmanDrawingProps = {
    numberOfGuesses: number
}

const BODY_PARTS = [HEAD,BODY,RARM,LARM,RLEG,LLEG]

export default function HangmanDrawing( {numberOfGuesses} : HangmanDrawingProps ) {
  return (
    <div className="hangman-drawing">
        {BODY_PARTS.slice(0, numberOfGuesses)}
        <div className="bar-4"></div>
        <div className="bar-3"></div>
        <div className="bar-2"></div>
        <div className="bar-1"></div>
    </div>
  )
}
