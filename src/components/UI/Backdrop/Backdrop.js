import React from 'react';

const Backdrop = props => (
    props.show ? <div onClick={props.onClick} className="Backdrop"/> : null
);

export default Backdrop;
