import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Quiz from '../Quiz/Quiz';

const Topics = () => {
    const quizsData = useLoaderData();
    const quizs = quizsData.data;
    return (
      <div className='my-5'>
        <div className='grid grid-cols-1 gap-4  md:grid-cols-2 w-8/12 mx-auto'>
          {quizs.map((quiz) => (
            <Quiz key={quiz.id} quiz={quiz}></Quiz>
          ))}
        </div>
      </div>
    );
};

export default Topics;