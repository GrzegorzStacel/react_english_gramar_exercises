import React from 'react';

const Button = ({ handleOnClick, setClassName, children, manageDisabledButtons }) => (
    <button
        disabled={manageDisabledButtons}
        onClick={ handleOnClick }
        className={setClassName}
    >
        {children}
    </button>
)

export default Button