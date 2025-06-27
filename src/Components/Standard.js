import { evaluate } from 'mathjs';
import React from 'react';

export const Standard = ({ setInputValue }) => {
    const handleButtonClick = (value) => {
        setInputValue((prev) => {
            if (value === 'AC') {
                return ''; // Clear input
            } else if (value === 'Cl') {
                return prev.slice(0, -1); // Remove last character
            } else if (value === '=') {
                try {
                    return evaluate(prev).toString(); // Evaluate expression
                } catch (error) {
                    console.error("Error occurred while evaluating expression:", error);
                    return "Error"; // Display "Error" to the user
                }
            } else {
                const operators = ['+', '-', '*', '/', '%'];

                // If the last character is an operator and a new operator is clicked, replace it
                if (operators.includes(value) && operators.includes(prev.slice(-1))) {
                    return prev.slice(0, -1) + value; // Replace last operator
                }

                // Append the value if valid
                return (prev || '') + value;
            }
        });
    };

    // Button layout for the calculator
    const buttonsLayout = [
        ['AC', '(', ')', '%'],
        ['7', '8', '9', '/'],
        ['4', '5', '6', '*'],
        ['1', '2', '3', '-'],
        ['0', '.', 'Cl', '+'],
        ['=']
    ];

    return (
        <div className="standard-container">
            <div className="standard-grid">
                {buttonsLayout.flat().map((buttonValue, index) => (
                    <button
                        key={index}
                        className={`button ${isNaN(buttonValue) ? 'function-button' : 'number-button'}`}
                        onClick={() => handleButtonClick(buttonValue)}
                    >
                        {buttonValue}
                    </button>
                ))}
            </div>
        </div>
    );
};
