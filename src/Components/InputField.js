import React from 'react';

export const InputField = ({ value }) => {
    return (
        <div className='input-container'>
            <input
                type="text"
                placeholder='Enter here'
                value={value || ''}
                readOnly
            />
        </div>
    );
};
