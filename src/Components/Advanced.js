import React from 'react';
import { evaluate } from 'mathjs';

export const Advanced = ({ setInputValue, memory, setMemory }) => {
    const handleAdvancedClick = (value) => {
        setInputValue((prev) => {
            const validInput = !isNaN(Number(prev)) ? Number(prev) : 0; // Validate input
            let newInput = prev || "0"; // Default input

            try {
                switch (value) {
                    case 'x²': // Square
                        newInput = evaluate(`${prev}^2`).toString();
                        break;
                    case '√x': // Square root
                        newInput = evaluate(`sqrt(${prev})`).toString();
                        break;
                    case '1/x': // Reciprocal
                        newInput = prev === "0" ? "0" : evaluate(`1/${prev}`).toString();
                        break;
                    case 'MR': // Memory Recall
                        newInput = memory.toString();
                        break;
                    case 'MC': // Memory Clear
                        setMemory(0); // Clear memory
                        newInput = "0";
                        break;
                    case 'M+': // Memory Add
                        const updatedMemoryAdd = memory + validInput;
                        setMemory(updatedMemoryAdd);
                        console.log("M+ executed. Memory updated to:", updatedMemoryAdd);
                        break;
                    case 'M-': // Memory Subtract
                        console.log("Previous memory:", memory, "Valid Input:", validInput); // Debug log
                        if (!isNaN(validInput)) {
                            const updatedMemorySubtract = memory === 0 ? validInput : memory - validInput;
                            setMemory(updatedMemorySubtract);
                            console.log("M- executed. Memory updated to:", updatedMemorySubtract);
                        }
                        break;
                    case 'MS': // Memory Store
                        setMemory(validInput);
                        console.log("MS executed. Memory stored:", validInput);
                        break;
                    default:
                        break;
                }
            } catch (error) {
                console.error("Error in advanced operations:", error);
                newInput = "Error"; // Display "Error" on invalid input
            }

            return newInput;
        });
    };

    const advancedButtons = ['x²', '√x', '1/x', 'MR', 'MC', 'M+', 'M-', 'MS'];

    return (
        <div className="advanced-container">
            <div className="advanced-grid">
                {advancedButtons.map((buttonValue, index) => (
                    <button
                        key={index}
                        className="advanced-button"
                        onClick={() => handleAdvancedClick(buttonValue)}
                    >
                        {buttonValue}
                    </button>
                ))}
            </div>
        </div>
    );
};
