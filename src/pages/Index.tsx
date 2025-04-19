
import React, { useState, useEffect } from 'react';
import { questions } from '../data/questions';
import { QuizState } from '../types/quiz';
import QuestionCard from '../components/QuestionCard';
import Results from '../components/Results';

const Index = () => {
  const [quizState, setQuizState] = useState<QuizState>({
    currentQuestionIndex: 0,
    score: 0,
    isFinished: false,
    timeLeft: 30
  });

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (!quizState.isFinished && quizState.timeLeft > 0) {
      timer = setTimeout(() => {
        setQuizState(prev => ({
          ...prev,
          timeLeft: prev.timeLeft - 1
        }));
      }, 1000);
    } else if (quizState.timeLeft === 0) {
      handleTimeUp();
    }
    return () => clearTimeout(timer);
  }, [quizState.timeLeft, quizState.isFinished]);

  const handleAnswer = (selectedAnswerIndex: number) => {
    const currentQuestion = questions[quizState.currentQuestionIndex];
    
    // Check if answer is correct
    const isCorrect = selectedAnswerIndex === currentQuestion.correctAnswer;
    
    setQuizState(prev => {
      const newScore = isCorrect ? prev.score + 1 : prev.score;
      const isLastQuestion = prev.currentQuestionIndex === questions.length - 1;
      
      return {
        ...prev,
        score: newScore,
        currentQuestionIndex: isLastQuestion 
          ? prev.currentQuestionIndex 
          : prev.currentQuestionIndex + 1,
        isFinished: isLastQuestion,
        timeLeft: isLastQuestion ? prev.timeLeft : 30
      };
    });
  };

  const handleTimeUp = () => {
    setQuizState(prev => {
      const isLastQuestion = prev.currentQuestionIndex === questions.length - 1;
      
      return {
        ...prev,
        currentQuestionIndex: isLastQuestion 
          ? prev.currentQuestionIndex 
          : prev.currentQuestionIndex + 1,
        isFinished: isLastQuestion,
        timeLeft: isLastQuestion ? prev.timeLeft : 30
      };
    });
  };

  const handleRestart = () => {
    setQuizState({
      currentQuestionIndex: 0,
      score: 0,
      isFinished: false,
      timeLeft: 30
    });
  };

  if (quizState.isFinished) {
    return (
      <Results 
        score={quizState.score} 
        totalQuestions={questions.length} 
        onRestart={handleRestart} 
      />
    );
  }

  return (
    <QuestionCard 
      question={questions[quizState.currentQuestionIndex]}
      onAnswer={handleAnswer}
      timeLeft={quizState.timeLeft}
      questionNumber={quizState.currentQuestionIndex + 1}
      totalQuestions={questions.length}
    />
  );
};

export default Index;
