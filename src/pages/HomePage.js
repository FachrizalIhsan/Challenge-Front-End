import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div>
      <h2>Welcome to the Quiz App</h2>
      <Link to="/login">Start Quiz</Link>
    </div>
  );
};

export default HomePage;
