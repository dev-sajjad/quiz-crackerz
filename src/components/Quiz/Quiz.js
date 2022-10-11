
import React from "react";
import QuizCard from "../QuizCard/QuizCard";


const Quiz = ({ quiz }) => {

  return (
      <div>
          <div>
              <QuizCard key={quiz.id} quiz={quiz}></QuizCard>
          </div>
    </div>
  );
};

export default Quiz;
