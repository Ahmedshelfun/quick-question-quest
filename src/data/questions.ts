
import { Question } from "../types/quiz";

export const questions: Question[] = [
  {
    id: 1,
    text: "Which of the following is the correct way to declare a variable in C#?",
    options: ["var name = 'John'", "string name = 'John'", "both A and B", "None of the above"],
    correctAnswer: 2
  },
  {
    id: 2,
    text: "What is the correct syntax for a method declaration in C#?",
    options: [
      "public void MyMethod[]",
      "public void MyMethod()",
      "void public MyMethod()",
      "void MyMethod[]"
    ],
    correctAnswer: 1
  },
  {
    id: 3,
    text: "Which keyword is used to inherit a class in C#?",
    options: ["extends", "implements", ":", "inherits"],
    correctAnswer: 2
  },
  {
    id: 4,
    text: "What does the 'using' keyword do in C#?",
    options: [
      "Creates a new instance",
      "Imports namespaces",
      "Defines a loop",
      "Declares a variable"
    ],
    correctAnswer: 1
  },
  {
    id: 5,
    text: "What is the default access modifier in C# if none is specified?",
    options: ["public", "private", "protected", "internal"],
    correctAnswer: 1
  }
];

