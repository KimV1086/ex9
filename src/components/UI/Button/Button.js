import React from 'react';

const Button = props => (
    <button
        onClick={props.onClick} className={['Button', props.btnType].join(' ')}>
        {props.children}
    </button>
);

export default Button;
