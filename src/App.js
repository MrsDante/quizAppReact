import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const questions = [
    {
        questionText: 'Когда родился Гарри Поттер?',
        answerOptions: [
          { answerText: '31 июля 1980', isCorrect: true },
          { answerText: '31 августа 1980', isCorrect: false },
          { answerText: '30 июля 1980', isCorrect: false }
        ],
    },
    {
      questionText: 'Какого привидения никогда не было в Хогвартсе?',
      answerOptions: [
        { answerText: 'Пивз', isCorrect: false },
        { answerText: 'Друри Лейн', isCorrect: true },
        { answerText: 'Бинс', isCorrect: false }
      ],
    },
    {
      questionText: 'Как попасть в гостиную Когтервана?',
      answerOptions: [
        { answerText: 'Повторить стук в определённом ритме', isCorrect: true },
        { answerText: 'Пароль', isCorrect: false },
        { answerText: 'Ответить на вопрос', isCorrect: false }
      ],
    },
    {
      questionText: 'Полное имя Альбуса Дамблдора?',
      answerOptions: [
        { answerText: 'Альбус Персиваль Валентайн Брайан Дамблдор', isCorrect: false },
        { answerText: 'Альбус Персиваль Вилберн Брайн Дамблдор', isCorrect: false },
        { answerText: 'Альбус Персиваль Вульфрик Брайан Дамблдор', isCorrect: true }
      ],
    },
    {
      questionText: 'Какую форму принимает патронус Джинни Уизли?',
      answerOptions: [
        { answerText: 'Выдра', isCorrect: false },
        { answerText: 'Конь', isCorrect: true },
        { answerText: 'Олень', isCorrect: false }
      ],
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(1);
  const [showScore, setShowScore] = useState(false);
  const [scoreCounter, setScoreCounter] = useState(0);

  const handleAnswerBtnClick = (isCorrect) => {
    if (isCorrect === true) {
      //alert('Верно. Один балл Гриффиндору!')
      setScoreCounter(scoreCounter + 1);
    }
    
    const nextQuestion = currentQuestion + 1;

    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
    
  };

  return (
    <div className="App">
      { showScore ? (
        <div className='score-section'>Ваш результат {scoreCounter} из {questions.length}</div>
      ) : (
        <>
          <div className='question-section'>
            <div className='question-count'>
              <span>Вопрос 1</span>/{questions.length}
            </div>
            <div className='question-text'>{questions[currentQuestion].questionText}</div>
          </div>
          <div className='answer-section'>
            {questions[currentQuestion].answerOptions.map((answerOption) => <button onClick={() => {handleAnswerBtnClick(answerOption.isCorrect)}}>{answerOption.answerText}</button>)}
          </div>
        </>
      )
      
    
    
    }
    </div>
  );
}

export default App;