
import React from 'react';
import { Question } from '../types/quiz';
import { Button } from '@/components/ui/button';
import Timer from './Timer';

interface QuestionCardProps {
  question: Question;
  onAnswer: (answerIndex: number) => void;
  timeLeft: number;
  questionNumber: number;
  totalQuestions: number;
}

const QuestionCard = ({
  question,
  onAnswer,
  timeLeft,
  questionNumber,
  totalQuestions,
}: QuestionCardProps) => {
  return (
    <div className="w-full max-w-2xl mx-auto p-6 rounded-xl bg-white shadow-lg animate-fade-in">
      <div className="flex justify-between items-center mb-6">
        <span className="text-sm text-purple-500 font-medium">
          Question {questionNumber} of {totalQuestions}
        </span>
        <Timer timeLeft={timeLeft} />
      </div>
      
      <h2 className="text-2xl font-bold text-gray-800 mb-8">{question.text}</h2>
      
      <div className="grid grid-cols-1 gap-4">
        {question.options.map((option, index) => (
          <Button
            key={index}
            variant="outline"
            className="w-full p-4 text-left hover:bg-purple-50 hover:border-purple-500 transition-all"
            onClick={() => onAnswer(index)}
          >
            {option}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default QuestionCard;
