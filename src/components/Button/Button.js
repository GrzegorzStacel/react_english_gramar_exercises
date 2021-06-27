import React from 'react';

const Button = ({ handleOnClick, setClassName, children }) => (
    <button
        onClick={ handleOnClick }
        className={setClassName}
    >
        {children}
    </button>
)

export default Button