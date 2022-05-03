import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import questions from './questions'

function sample(array, size) {
  const results = [],
    sampled = {};
  while (results.length < size && results.length < array.length) {
    const index = Math.trunc(Math.random() * array.length);
    if (!sampled[index]) {
      results.push(array[index]);
      sampled[index] = true;
    }
  }
  return results;
}


function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [answeredCorrect, setAnsweredCorrect] = useState(false);
  const [answered, setAnswered] = useState(false);
  const [reviewMode, setReviewMode] = useState(false);
  const [freshGame, setFreshGame] = useState(true);
  const [score, setScore] = useState(0);
  const [selected_questions, setQuestions] = useState(questions);
  const onlyImg = questions.filter((question) =>
    question.hasOwnProperty("img")
  );

  const advanceQuestion = () =>{

    setAnswered(false);
    setAnsweredCorrect(false); 
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < selected_questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };
  const handleAnswerOptionClick = (isCorrect) => {
    setAnswered(true);
    if (isCorrect) {
      setScore(score + 1);
      setAnsweredCorrect(true); 
    }
    console.log('reviewMode :',reviewMode)
    if (!reviewMode){
      advanceQuestion();
    } 
  };

  const handleStartGame = (isShortVersion) => {
    
    switch (isShortVersion) {
      case 1:
        setQuestions(sample(questions, 25));
        setReviewMode(false);
        break;
      case 2:
        setQuestions(sample(questions, questions.length));
        setReviewMode(true);
        break;
      case 3:
        setQuestions(sample(onlyImg, onlyImg.length));
        setReviewMode(true);
        break;

      default:
        break;
    }
    setAnswered(false);
    setAnsweredCorrect(false); 
    setFreshGame(false);
  };

  const handleResetGame = () => {
    setCurrentQuestion(0);
    setScore(0);
    setFreshGame(true);
    setShowScore(false);

    setAnswered(false);
  }




  return (
    <div className="app">
      {showScore ? (
        <div className="score-section">
          Tu puntuacion es: {score} de {selected_questions.length} respuestas
          correctas.
          <button onClick={() => handleResetGame(true)}>
            Volver a Intentar
          </button>
        </div>
      ) : freshGame ? (
        <div>
          <div className="seleccion">
              <span>Seleccione modo:</span>
          </div>
          <div className="score-section">
            <button onClick={() => handleStartGame(1)}>Examen</button>
            <button onClick={() => handleStartGame(2)}>Completo</button>
            <button onClick={() => handleStartGame(3)}>Señales</button>
          </div>
        </div>
      ) : (
        <div className="box">
          <div className="question-section">
            <div className="question-count">
              <span>Pregunta {currentQuestion + 1}</span>/
              {selected_questions.length}
            </div>
            <div className="question-text">
              {selected_questions[currentQuestion].questionText}
              {selected_questions[currentQuestion].hasOwnProperty("img") && (
                <img
                  align="center"
                  src={selected_questions[currentQuestion].img}
                />
              )}
            </div>
          </div>
          <div className="answer-section">
            {selected_questions[currentQuestion].answerOptions
              .sort(function () {
                return 0.5 - Math.random();
              })
              .map((answerOption) => (
                <button
                  className={
                    reviewMode
                      ? answered
                        ? answerOption.isCorrect
                          ? "correct"
                          : "incorrect"
                        : ""
                      : ""
                  }
                  onClick={() =>
                    handleAnswerOptionClick(answerOption.isCorrect)
                  }
                >
                  {answerOption.answerText}
                </button>
              ))}
          </div>
          {reviewMode && answered && (
            <div className="answer">
              <span>
                {answeredCorrect
                  ? "Respuesta Correcta"
                  : "Respuesta Incorrecta"}
              </span>
              <button onClick={() => advanceQuestion()}>
                Siguiente Pregunta
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default App
