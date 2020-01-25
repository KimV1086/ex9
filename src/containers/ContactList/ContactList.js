import React from 'react';
import {Button, Card, CardBody, CardImg, CardTitle, Container} from "reactstrap";

const ContactList = props => {
    const imgStyle = {
        maxHeight: 220,
        maxWidth: 220,
    };
    return (
        <Container>
            <Card>
                <CardBody>
                    <CardImg src={props.image} style={imgStyle} alt="Card image cap"/>
                    <CardTitle>{props.contactName}</CardTitle>
                    <Button onClick={props.open}>Show more</Button>
                </CardBody>
            </Card>
        </Container>

    );
};

export default ContactList;