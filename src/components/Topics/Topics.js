import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Topics = () => {
    const quizsData = useLoaderData();
    const quizs = quizsData.data;
    console.log(quizs)
    return (
        <div>
            <h3>topics section</h3>
        </div>
    );
};

export default Topics;