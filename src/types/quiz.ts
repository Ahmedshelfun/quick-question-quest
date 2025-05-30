
export interface Question {
  id: number;
  text: string;
  options: string[];
  correctAnswer: number;
}

export interface QuizState {
  currentQuestionIndex: number;
  score: number;
  isFinished: boolean;
  timeLeft: number;
}
