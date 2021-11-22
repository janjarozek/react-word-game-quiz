import { useState, useEffect } from 'react';
import './App.css';

// import getApiData from './components/utils/getData.js'

const exampleData = {
  "area":"sat",
  "author":"twinword inc.",
  "email":"help@twinword.com",
  "level":3,
  "quizlist" : [
    {
      "correct":2,
      "option":[
        "jury",
        "assess"
      ],
      "quiz":[
        "value",
        "estimate",
        "evaluate"
      ]
    },
    {
      "correct":2,
      "option":[
        "trace",
        "adjacent"
      ],
      "quiz":[
        "close",
        "near",
        "next"
      ]
    },
    {
      "correct":2,
      "option":[
        "mad",
        "exotic"
      ],
      "quiz":[
        "foreign",
        "national",
        "ethnic"
      ]
    },
    {
      "correct":1,
      "option":[
        "forecast",
        "sustainable"
      ],
      "quiz":[
        "assume",
        "insight",
        "weather"
      ]
    },
    {
      "correct":2,
      "option":[
        "charity",
        "rapid"
      ],
      "quiz":[
        "fast",
        "quick",
        "prompt"
      ]
    },
    {
      "correct":2,
      "option":[
        "jury",
        "assess"
      ],
      "quiz":[
        "value",
        "estimate",
        "evaluate"
      ]
    },
    {
      "correct":2,
      "option":[
        "trace",
        "adjacent"
      ],
      "quiz":[
        "close",
        "near",
        "next"
      ]
    },
    {
      "correct":2,
      "option":[
        "mad",
        "exotic"
      ],
      "quiz":[
        "foreign",
        "national",
        "ethnic"
      ]
    },
    {
      "correct":1,
      "option":[
        "forecast",
        "sustainable"
      ],
      "quiz":[
        "assume",
        "insight",
        "weather"
      ]
    },
    {
      "correct":2,
      "option":[
        "charity",
        "rapid"
      ],
      "quiz":[
        "fast",
        "quick",
        "prompt"
      ]
    }
  ]
};
const levels = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const App = () => {
  const [data, setData] = useState({})
  const [level, setLevel] = useState(null)
  const [correctAnswers, setCorrectAnswers] = useState([])
  const [clicked, setClicked] = useState([])
  const [score, setScore] = useState(0)

  const handleLevelChange = e => {
    setLevel(e.target.value);
    console.log(level);
  }

  // const getApiData = async () => {
  //   const response = await fetch(`https://twinword-word-association-quiz.p.rapidapi.com/type1/?level=${level}&area=sat`, {
  //       "method": "GET",
  //       "headers": {
  //           "x-rapidapi-host": "twinword-word-association-quiz.p.rapidapi.com",
  //           "x-rapidapi-key": "74a833b20emsh77124847c9c6736p1d8798jsn24167f5f8926"
  //       }
  //   });
  //   if (!response.ok) return;
  //   const data = await response.json();
  //   setData(data);
  //   // return data;
  // }

  useEffect(() => {
    setData(exampleData);
    console.log(data);
    // if (level) getApiData();
  // }, [level]);
  }, []);


  const checkAnswer = (option, optionIndex, correctAnswer) => {
    if (optionIndex === correctAnswer-1) {
      setCorrectAnswers([...correctAnswers, option])
      setScore((score) => score+1);
    } else {
      setScore((score) => score-1);
    }
    setClicked([...clicked, optionIndex])
  }

  console.log(data);
  return (
    <div className="App">
      <h1>Word Association App</h1>
      {!level &&
      <div className="level-selector">
        <h2>Start the game</h2>
        <p>Choose the level and begin</p>
        <select id="levels" value={level} onChange={handleLevelChange}>
          {levels.map( item => (
            <option key={`option-${item}`} value={`${item}`}>Level {item}</option>
          ))}
        </select>
      </div>}
      {level && data && <div className="question-card">
            <h2>Welcome at level: {level}</h2>
            <h3>Your score is {score}</h3>
            <div className="quiz-container">
              {data.quizlist.map( question => (
                <div className="question-box">
                  {question.quiz.map( (tip, index) => (
                    <p key={`tip-${index}`}>{tip}</p>
                  ))}
                  {question.option.map( (option, index) => (
                    <>
                      {!(correctAnswers.includes(option)) &&
                        <div key={`key-${index}`} className="question-btn">
                        {/* style={correctAnswers.includes(option)?{}:{}} */}
                          <button onClick={() => checkAnswer(option, index, question.correct)}>
                            {option}
                          </button>
                        </div>}
                      {(correctAnswers.includes(option)) && <p>Correct!</p>}
                    </>
                  ))}
                  {/* <p>{question.correct}</p> */}
                </div>
              ))}
            </div>
            <button className="question-btn" onClick={() => setLevel(null)}>Choose level...</button>

      </div>}

    </div>
  );
}

export default App;
