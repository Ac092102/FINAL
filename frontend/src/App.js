 import React, { useState } from 'react';
import Login from './components/Login';
import Welcome from './components/Welcome';
import StudentInfo from './components/StudentInfo';
import Quiz from './components/Quiz';
import Score from './components/Score';
import './App.css';

function App() {
  const [username, setUsername] = useState('');
  const [stage, setStage] = useState('login');
  const [finalScore, setFinalScore] = useState(0);

  const handleLogin = (name) => {
    setUsername(name);
    setStage('welcome');
  };

  const handleStart = () => {
    setStage('info');
  };

  const handleBeginQuiz = () => {
    setStage('quiz');
  };

  const handleFinish = (score) => {
    setFinalScore(score);
    setStage('score');
  };

  return (
    <div className="App">
      <div className="card">
        {stage === 'login' && <Login onLogin={handleLogin} />}
        {stage === 'welcome' && <Welcome username={username} onStart={handleStart} />}
        {stage === 'info' && (
          <>
            <StudentInfo username={username} />
            <button className="btn-primary" onClick={handleBeginQuiz}>
              Proceed to Quiz
            </button>
          </>
        )}
        {stage === 'quiz' && <Quiz onFinish={handleFinish} />}
        {stage === 'score' && <Score score={finalScore} username={username} />}
      </div>
    </div>
  );
}

export default App;