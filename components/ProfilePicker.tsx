import React, { useState } from 'react';

const ProfilePicker = ({ setIsDisabled, isDisabled, setDJName }) => {
    // State to hold the input value
    const [inputValue, setInputValue] = useState('');

    // Update both the state and the parent component's state on input change
    const handleInputChange = (e) => {
        const newValue = e.target.value;
        setInputValue(newValue); // Update local state
    };

    return (
        <div className="w-50 flex flex-row flex-1 gap-5">
            <div>
                <input value={inputValue} onChange={handleInputChange} type="text" placeholder="name" className="h-10 w-40 rounded-lg block text-black m-30 p-5" />
            </div>
            <div>
                <button 
                    onClick={() => {
                        setIsDisabled(false);
                        setDJName(inputValue);
                        setInputValue('');
                    }} 
                    className={"w-60 h-10 rounded-lg bg-gradient-to-r from-blush to-pink transition duration-200" + (inputValue != '' ? " hover:scale-110 disabled" : " opacity-50")}
                    disabled={!inputValue.trim()} // Button is disabled if inputValue is empty or contains only whitespace
                >
                    <h1 className="text-lg">STEAL THE AUX</h1>
                </button>
            </div>
        </div>
    );
};

export default ProfilePicker;