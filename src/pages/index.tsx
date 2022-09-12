import * as React from 'react';

import Seo from '@/components/Seo';

export default function HomePage() {
  const questions = [
    {
      questionText: 'What is the capital of France?',
      answerOptions: [
        { answerText: 'New York', isCorrect: false },
        { answerText: 'London', isCorrect: false },
        { answerText: 'Paris', isCorrect: true },
        { answerText: 'Dublin', isCorrect: false },
      ],
    },
    {
      questionText: 'Who is CEO of Tesla?',
      answerOptions: [
        { answerText: 'Jeff Bezos', isCorrect: false },
        { answerText: 'Elon Musk', isCorrect: true },
        { answerText: 'Bill Gates', isCorrect: false },
        { answerText: 'Tony Stark', isCorrect: false },
      ],
    },
    {
      questionText: 'The iPhone was created by which company?',
      answerOptions: [
        { answerText: 'Apple', isCorrect: true },
        { answerText: 'Intel', isCorrect: false },
        { answerText: 'Amazon', isCorrect: false },
        { answerText: 'Microsoft', isCorrect: false },
      ],
    },
    {
      questionText: 'How many Harry Potter books are there?',
      answerOptions: [
        { answerText: '1', isCorrect: false },
        { answerText: '4', isCorrect: false },
        { answerText: '6', isCorrect: false },
        { answerText: '7', isCorrect: true },
      ],
    },
  ];

  const [currentQuestion, setCurrentQuestion] = React.useState(0);
  const [showScore, setShowScore] = React.useState(false);
  const [score, setScore] = React.useState(0);

  const handleAnswerOptionClick = (isCorrect: boolean) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };
  return (
    <>
      {/* <Seo templateTitle='Home' /> */}
      <Seo />

      <main>
        <div className='layout'>
          <section className='shadow-[10px 10px 42px 0px rgba(0, 0, 0, 0.75)] mx-auto mt-36 flex h-min min-h-[200px] w-[450px] rounded-2xl bg-[#252d4a] p-5 text-white'>
            <div className='grid w-full grid-cols-2 justify-between'>
              {showScore ? (
                <div className='flex items-center text-2xl'>
                  You scored {score} out of {questions.length}
                </div>
              ) : (
                <>
                  <div className='relative mt-5 w-full'>
                    <div className='mb-5 text-3xl'>
                      <span>Question {currentQuestion + 1}</span>/
                      {questions.length}
                    </div>
                    <div className='mb-3'>
                      {questions[currentQuestion].questionText}
                    </div>
                  </div>
                  <div className='bg-[rgb(230, 153, 12)] border-[rgb(255, 189, 67)] mt-5 rounded-2xl border-4 p-4 text-center'>
                    {questions[currentQuestion].answerOptions.map(
                      (answerOption) => (
                        <button
                          className='mb-2 flex w-full cursor-pointer items-center justify-start rounded-2xl border-4 border-[#234668] bg-[#252d4a] p-1 text-base text-white'
                          key={answerOption.answerText}
                          onClick={() =>
                            handleAnswerOptionClick(answerOption.isCorrect)
                          }
                        >
                          {answerOption.answerText}
                        </button>
                      )
                    )}
                  </div>
                </>
              )}
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
