import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Login from './components/Login';
import QuizPage from './pages/QuizPage';
import ResultPage from './pages/ResultPage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/quiz" element={<QuizPage />} />
        <Route path="/result" element={<ResultPage />} />
      </Routes>
    </Router>
  );
};

export default App;