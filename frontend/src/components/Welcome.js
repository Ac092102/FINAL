import React from 'react';

function Welcome({ username, onStart }) {
  return (
    <div className="welcome">
      <h2>Welcome, {username}!</h2>
      <p>Ready to test your geography knowledge?</p>
      <button onClick={onStart}>Start Quiz</button>
    </div>
  );
}

export default Welcome;