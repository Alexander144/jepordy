import React, { useState } from "react";
import "./App.css";

const data = [
  {
    name: "Alexander",
    questions: [
      { value: 100, question: "This is an answer", answer: "What is the question?", answered: false },
      { value: 200, question: "This is an answer", answer: "What is the question?", answered: false },
      { value: 300, question: "This is an answer", answer: "What is the question?", answered: false }
    ]
  },
  {
    name: "Quiz",
    questions: [
      { value: 100, question: "This is an answer", answer: "What is the question?", answered: false },
      { value: 200, question: "This is an answer", answer: "What is the question?", answered: false },
      { value: 300, question: "This is an answer", answer: "What is the question?", answered: false }
    ]
  },
  {
    name: "Alt mulig",
    questions: [
      { value: 100, question: "This is an answer", answer: "What is the question?", answered: false },
      { value: 200, question: "Hvem sin fun fact er dette?", imgUrl: "./guess-who.jpg", answer: "", answered: false },
      { value: 300, question: "This is an answer", answer: "What is the question?", answered: false }
    ]
  }
];

export default function App() {
  const [currentQuestion, setCurrentQuestion] = useState(null);

  const handleClick = (categoryIndex, questionIndex) => {
    const selected = data[categoryIndex].questions[questionIndex];
    if (!selected.answered) {
      selected.answered = true;
      setCurrentQuestion(selected);
    }
  };

  const handleClose = () => setCurrentQuestion(null);

  return (
    <div>
         {!currentQuestion && (<div className="board">
        {data.map((category, catIdx) => (
          <div className="category" key={catIdx}>
            <div className="category-header">
              <p>{category.name}</p>
            </div>
            {category.questions.map((q, qIdx) => (
              <div
                className="question"
                key={qIdx}
                onClick={() => handleClick(catIdx, qIdx)}
              >
                {!q.answered && <p>{q.value}</p>}
              </div>
            ))}
          </div>
        ))}
      </div>
)}
      {currentQuestion && (
        <div className="current-question" onClick={handleClose}>
          <p>
            {currentQuestion.question}
            {currentQuestion.imgUrl && (
              <img
                src={currentQuestion.imgUrl}
                alt="Question"
                style={{ maxWidth: "100%", height: "53rem", marginTop: 20 }}
              />
            )}
          </p>
        </div>
      )}
    </div>
  );
}
