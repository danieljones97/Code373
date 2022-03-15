import React from 'react';
import Accordion from './Accordion';

const FAQ = () => {

    const questionOne = {
        question: "Wen Launch?",
        answer: "Answer 1"
    }
    const questionTwo = {
        question: "Question 2",
        answer: "Answer 2"
    }
    const questionThree = {
        question: "Question 3",
        answer: "Answer 3"
    }
    const questionFour = {
        question: "Question 4",
        answer: "Answer 4"
    }
    const questionFive = {
        question: "Question 5",
        answer: "Answer 5"
    }

    return (
        <div className="module-content">
            <h1>FAQ</h1>
            <div className="accordion-container">
                <Accordion content={questionOne} />
                <Accordion content={questionTwo} />
                <Accordion content={questionThree} />
                <Accordion content={questionFour} />
                <Accordion content={questionFive} />
            </div>
        </div>
    );
};

export default FAQ;
