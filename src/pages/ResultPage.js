import React from 'react';
import { useNavigate } from 'react-router-dom'; // Updated import

const ResultPage = () => {
  const navigate = useNavigate(); // Updated hook
  const username = localStorage.getItem('username');
  const score = localStorage.getItem('score');

  return (
    <div>
      <h2>Quiz Result</h2>
      <p>Username: {username}</p>
      <p>Score: {score}</p>
      <button onClick={() => navigate('/')}>Back to Home</button> {/* Updated navigation */}
    </div>
  );
};

export default ResultPage;
