import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Question from './Question';
import { useNavigate } from 'react-router-dom'; // Updated import

const Quiz = () => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [timer, setTimer] = useState(300); // 5 minutes
  const navigate = useNavigate(); // Updated hook

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const response = await axios.get('https://opentdb.com/api.php?amount=10&category=12&difficulty=easy&type=multiple');
        console.log(response.data.results); // Check API response
        setQuestions(response.data.results);
      } catch (error) {
        console.error('Error fetching questions:', error);
      }
    };

    fetchQuestions();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prev) => prev - 1);
    }, 1000);

    if (timer === 0) {
      clearInterval(interval);
      navigate('/result'); // Updated navigation
    }

    return () => clearInterval(interval);
  }, [timer, navigate]);

  useEffect(() => {
    const quizState = {
      questions,
      currentQuestionIndex,
      score,
      timer
    };
    localStorage.setItem('quizState', JSON.stringify(quizState));
  }, [questions, currentQuestionIndex, score, timer]);

  const handleAnswer = (answer) => {
    const currentQuestion = questions[currentQuestionIndex];
    if (currentQuestion.correct_answer === answer) {
      setScore(score + 1);
    }
    const nextQuestionIndex = currentQuestionIndex + 1;
    if (nextQuestionIndex < questions.length) {
      setCurrentQuestionIndex(nextQuestionIndex);
    } else {
      navigate('/result'); // Updated navigation
    }
  };

  if (questions.length === 0) return <div>Loading...</div>;

  return (
    <div>
      <h2>Quiz</h2>
      <p>Timer: {timer} seconds</p>
      <p>Score: {score}</p>
      <Question
        question={questions[currentQuestionIndex].question}
        options={[...questions[currentQuestionIndex].incorrect_answers, questions[currentQuestionIndex].correct_answer].sort()}
        handleAnswer={handleAnswer}
      />
    </div>
  );
};

export default Quiz;
