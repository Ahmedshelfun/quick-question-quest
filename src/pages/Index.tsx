
import React, { useState, useEffect } from 'react';
import { questions } from '../data/questions';
import QuestionCard from '../components/QuestionCard';
import Results from '../components/Results';
import { QuizState } from '../types/quiz';
import { useToast } from '@/components/ui/use-toast';

const Index = () => {
  const { toast } = useToast();
  const [quizState, setQuizState] = useState<QuizState>({
    currentQuestionIndex: 0,
    score: 0,
    isFinished: false,
    timeLeft: 30,
  });

  useEffect(() => {
    if (!quizState.isFinished && quizState.timeLeft > 0) {
      const timer = setInterval(() => {
        setQuizState((prev) => ({
          ...prev,
          timeLeft: prev.timeLeft - 1,
        }));
      }, 1000);

      return () => clearInterval(timer);
    }
  }, [quizState.timeLeft, quizState.isFinished]);

  useEffect(() => {
    if (quizState.timeLeft === 0) {
      handleNextQuestion(-1);
    }
  }, [quizState.timeLeft]);

  const handleNextQuestion = (selectedAnswerIndex: number) => {
    const currentQuestion = questions[quizState.currentQuestionIndex];
    const isCorrect = selectedAnswerIndex === currentQuestion.correctAnswer;

    if (selectedAnswerIndex !== -1) {
      toast({
        title: isCorrect ? "Correct!" : "Incorrect!",
        description: isCorrect 
          ? "Well done! Moving to next question." 
          : `The correct answer was: ${currentQuestion.options[currentQuestion.correctAnswer]}`,
        variant: isCorrect ? "default" : "destructive",
      });
    }

    if (quizState.currentQuestionIndex < questions.length - 1) {
      setQuizState({
        currentQuestionIndex: quizState.currentQuestionIndex + 1,
        score: isCorrect ? quizState.score + 1 : quizState.score,
        isFinished: false,
        timeLeft: 30,
      });
    } else {
      setQuizState((prev) => ({
        ...prev,
        isFinished: true,
        score: isCorrect ? prev.score + 1 : prev.score,
      }));
    }
  };

  const handleRestart = () => {
    setQuizState({
      currentQuestionIndex: 0,
      score: 0,
      isFinished: false,
      timeLeft: 30,
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white p-4 flex items-center justify-center">
      {!quizState.isFinished ? (
        <QuestionCard
          question={questions[quizState.currentQuestionIndex]}
          onAnswer={handleNextQuestion}
          timeLeft={quizState.timeLeft}
          questionNumber={quizState.currentQuestionIndex + 1}
          totalQuestions={questions.length}
        />
      ) : (
        <Results
          score={quizState.score}
          totalQuestions={questions.length}
          onRestart={handleRestart}
        />
      )}
    </div>
  );
};

export default Index;
