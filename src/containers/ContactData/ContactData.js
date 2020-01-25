import React from 'react';

import {Button, Card, CardBody, CardImg, CardSubtitle, CardTitle} from "reactstrap";

const ContactData = props => {
    const imgStyle = {
        maxHeight: 220,
        maxWidth: 220,
    };
    return (
        <Card>
            <CardBody>
                <CardImg top width="100%" src={props.image} style = {imgStyle} alt="Card image cap"/>
                <CardTitle>Name: {props.contactName}</CardTitle>
                <CardSubtitle>Phone: {props.phone}</CardSubtitle>
                <CardSubtitle>Email: {props.email}</CardSubtitle>
                <Button onClick={props.goToEdit}>Edit</Button>{' '}
                <Button onClick={props.delete}>Delete</Button>{' '}
                <Button onClick={props.close}>Cancel</Button>
            </CardBody>
        </Card>
    );
};

export default ContactData;