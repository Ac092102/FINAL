 import React from 'react';

function Score({ score, username }) {
  return (
    <div className="score">
      <h2>Quiz Finished!</h2>
      <p>{username}, your score is:</p>
      <h3>{score} / 10</h3>
    </div>
  );
}

export default Score;