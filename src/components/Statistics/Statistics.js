import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Statistics = () => {
    const topics = useLoaderData();
    const data = topics.data;
    return (
        <div>
            <h3>Statistics component</h3>
        </div>
    );
};

export default Statistics;