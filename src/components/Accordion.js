import React, { useState } from 'react';

const Accordion = ({content: {question, answer}}) => {

    const [isActive, setIsActive] = useState(false);

    return (
        <div className="accordion">
            <div className="accordion-title" onClick={() => setIsActive(!isActive)}>
                <div>{question}</div>
                <div>{isActive ? "-" : "+"}</div>
            </div>
            <div className={`accordion-content ${isActive ? 'accordion-open' : null}`}><br/>{answer}</div>
        </div>
    );
};

export default Accordion