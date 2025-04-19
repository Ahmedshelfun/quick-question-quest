
import React from 'react';
import { Button } from '@/components/ui/button';

interface ResultsProps {
  score: number;
  totalQuestions: number;
  onRestart: () => void;
}

const Results = ({ score, totalQuestions, onRestart }: ResultsProps) => {
  const percentage = Math.round((score / totalQuestions) * 100);

  return (
    <div className="w-full max-w-md mx-auto p-8 rounded-xl bg-white shadow-lg animate-fade-in text-center">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">Quiz Complete!</h2>
      <div className="text-6xl font-bold text-purple-500 mb-4">{percentage}%</div>
      <p className="text-lg text-gray-600 mb-8">
        You scored {score} out of {totalQuestions} questions correctly
      </p>
      <Button 
        onClick={onRestart}
        className="w-full bg-purple-500 hover:bg-purple-600"
      >
        Try Again
      </Button>
    </div>
  );
};

export default Results;
