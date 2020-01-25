import React, {Component} from 'react';
import {Button, Form, FormGroup, Input} from "reactstrap";

class ContactForm extends Component {
    constructor(props) {
        super(props);
        if (props.contact) {
            this.state = {...props.contact};
        } else {
            this.state = {
                contactName: '',
                phone: '',
                email: '',
                image: ''
            };
        }
    }

    valueChanged = event => {
        let name = event.target.name;
        this.setState({[name]: event.target.value})

    };

    submit = event => {
        event.preventDefault();
        this.props.onSubmit(this.state);
    };

    render() {
        let source = null;
        if (this.state.image === '') {
            source = 'https://image.shutterstock.com/image-vector/empty-photo-male-profile-gray-260nw-535853269.jpg'
        } else {
            source = this.state.image
        }

        const imgStyle = {
            maxHeight: 220,
            maxWidth: 220,
        };

        return (
            <Form className="ContactForm" onSubmit={this.submit}>
                <FormGroup>
                    <Input name="contactName"
                           placeholder="Contact name"
                           onChange={this.valueChanged}
                           value={this.state.contactName}
                    />
                </FormGroup>
                <FormGroup>
                    <Input name="phone"
                           placeholder="Phone"
                           onChange={this.valueChanged}
                           value={this.state.phone}
                    />
                </FormGroup>
                <FormGroup>
                    <Input name="email"
                           type="email"
                           placeholder="Email"
                           onChange={this.valueChanged}
                           value={this.state.email}
                    />
                </FormGroup>
                <FormGroup>

                </FormGroup>
                <FormGroup>
                    <Input name="image"
                           type="text"
                           placeholder="Contact image"
                           onChange={this.valueChanged}
                           value={this.state.image}
                    />
                </FormGroup>

                <div>
                    <img src={source} style={imgStyle} alt=""/>
                </div>

                    <Button type="submit">Save</Button>

            </Form>
        );
    }
}

export default ContactForm;