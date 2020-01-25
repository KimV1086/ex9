import React from 'react';
// import './ContactList.css';
import {Button, Col, Container, Media} from "reactstrap";

const ContactList = props =>  {
    return (
        // <div className="ContactList">
        //     <img className="ContactImage" src={props.image} alt="contact"/>
        //     <p>{props.contactName}</p>
        //     <button onClick={props.open}>Show more</button>
        // </div>
<Container>
    <Media>
        <Media src={props.image +} alt={props.contactName}/>
        <Col>
            <Media body>
                <Media heading>{props.contactName}</Media>
                <Button outline color="primary" onClick={props.open}>Show more</Button>{' '}
            </Media>
        </Col>

    </Media>
</Container>

    );
};

export default ContactList;