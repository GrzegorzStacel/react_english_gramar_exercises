import React from 'react';

const Button = ({ handleOnClick, setClassName, children }) => {

    return (
        <button
            onClick={handleOnClick}
            className={setClassName}
        >
            {children}
        </button>
    )
}

export default Button