//import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

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

  const [currentQuestion, setCurrentQuestion] = useState(0);
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

  const handleStartOver = () => {
    setCurrentQuestion(0);
    setScoreCounter(0);
    setShowScore(false);
  };

  const renderQuestionsPart = () => {
    return (
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="" />
      <Card.Body>
        <Card.Title className='title'><span>Вопрос {currentQuestion + 1}</span>/{questions.length}</Card.Title>
        <Card.Text className='text'>
        {questions[currentQuestion].questionText}
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        {questions[currentQuestion].answerOptions.map((answerOption, i) => <ListGroup.Item key={i}><Button className='btn' variant="primary" onClick={() => {handleAnswerBtnClick(answerOption.isCorrect)}}>{answerOption.answerText}</Button></ListGroup.Item>)} 
      </ListGroup>
    </Card>
    )
  };

  const renderFinalPage = () => {
    const resultInProcents = (scoreCounter / questions.length) * 100;
    const text = `Ваш результат ${scoreCounter} из ${questions.length}`;
    let textAddition = '';
    if (resultInProcents < 30) textAddition = 'Даже Поттер лучше танцует балет';
    if (resultInProcents >= 30 && resultInProcents < 70) textAddition = 'Неплохо. Так же неплохо, как зелья Поттера';
    if (resultInProcents >= 70) textAddition = 'Десять очков Гриффиндору!';

    return (
      <Card>
      <Card.Header as="h5">Подведем итог..</Card.Header>
      <Card.Body>
        <Card.Title>Ваш результат {scoreCounter} из {questions.length}</Card.Title>
        <Card.Text>
          {textAddition}
        </Card.Text>
        <Button onClick={handleStartOver} variant="primary">Попытаться вновь</Button>
      </Card.Body>
    </Card>
    )
  };

  return (
    <div className="App">
      { showScore ? 
        renderFinalPage()
      : renderQuestionsPart()
    }
    </div>
  );
}

export default App;
