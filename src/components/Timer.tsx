
import React from 'react';
import { Timer as TimerIcon } from 'lucide-react';

interface TimerProps {
  timeLeft: number;
}

const Timer = ({ timeLeft }: TimerProps) => {
  const percentage = (timeLeft / 30) * 100;

  return (
    <div className="flex items-center gap-2 text-lg font-semibold">
      <TimerIcon className="w-5 h-5 text-purple-500" />
      <div className="w-20 h-2 bg-gray-200 rounded-full">
        <div
          className="h-full bg-purple-500 rounded-full transition-all duration-1000"
          style={{ width: `${percentage}%` }}
        />
      </div>
      <span className="text-purple-500">{timeLeft}s</span>
    </div>
  );
};

export default Timer;
