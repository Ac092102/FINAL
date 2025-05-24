import React, { useState } from 'react';

const questions = [
{
    question: "1. The capital city of the Philippines is _______.",
    options: ["Cebu", "Davao", "Manila", "Baguio"],
    answer: "Manila"
  },
  {
    question: "2. _______ is the largest ocean on Earth.",
    options: ["Indian Ocean", "Pacific Ocean", "Arctic Ocean", "Atlantic Ocean"],
    answer: "Pacific Ocean"
  },
  {
    question: "3. The country known for the Eiffel Tower is _______.",
    options: ["Italy", "Germany", "France", "Spain"],
    answer: "France"
  },
  {
    question: "4. The continent where Egypt is located is _______.",
    options: ["Asia", "South America", "Africa", "Europe"],
    answer: "Africa"
  },
  {
    question: "5. Japan is an island country located in _______.",
    options: ["Asia", "Europe", "Africa", "Australia"],
    answer: "Asia"
  },
  {
    question: "6. The North Pole is located in the _______ Ocean.",
    options: ["Indian", "Atlantic", "Pacific", "Arctic"],
    answer: "Arctic"
  },
  {
    question: "7. _______ is the tallest mountain in the world.",
    options: ["Mount Fuji", "Mount Everest", "Mount Apo", "Mount Kilimanjaro"],
    answer: "Mount Everest"
  },
  {
    question: "8. The equator is an _______ line around the Earth.",
    options: ["vertical", "invisible", "imaginary", "icy"],
    answer: "imaginary"
  },
  {
    question: "9. The Philippines is made up of over _______ islands.",
    options: ["100", "500", "7,000", "1,000"],
    answer: "7,000"
  },
  {
    question: "10. _______ is the coldest continent on Earth.",
    options: ["Asia", "Antarctica", "Europe", "Australia"],
    answer: "Antarctica"
  }
];

function Quiz({ onFinish }) {
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);

  const handleAnswer = (selected) => {
    if (selected === questions[current].answer) {
      setScore(score + 1);
    }

    const next = current + 1;
    if (next < questions.length) {
      setCurrent(next);
    } else {
      onFinish(score + (selected === questions[current].answer ? 1 : 0));
    }
  };

  return (
    <div className="quiz">
      <h3>{questions[current].question}</h3>
      {questions[current].options.map((option, idx) => (
        <button key={idx} onClick={() => handleAnswer(option)}>
          {option}
        </button>
      ))}
    </div>
  );
}

export default Quiz;