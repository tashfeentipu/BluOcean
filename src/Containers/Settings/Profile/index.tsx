import React, { Component } from "react";
import { Button, Col, Container, Form, FormGroup, FormText, Input, Label } from "reactstrap";
import './styles.css';

interface IProps {

}

interface IState {

}

class ProfileSettings extends Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <Container className="Profile-Settings-Main-Container" >
                <div className="Profile-Settings-Main-Heading">Profile <b>Settings</b></div>
                <Form>
                    <FormGroup >
                        <Label sm={2}>Usrename*</Label>
                        <Col sm={10}>
                            <Input type="text" placeholder="with a placeholder" />
                        </Col>
                    </FormGroup>
                    <FormGroup>
                        <Label for="examplePassword" sm={2}>Bio</Label>
                        <Col sm={10}>
                            <Input type="text" name="password" id="examplePassword" placeholder="password placeholder" />
                        </Col>
                    </FormGroup>
                    <FormGroup >
                        <Label for="exampleSelect" sm={2}>Email Address</Label>
                        <Col sm={10}>
                            <Input type="text" name="select" id="exampleSelect" />
                        </Col>
                    </FormGroup>
                    <FormGroup>
                        <Label for="exampleSelectMulti" sm={2}>Wallet Address</Label>
                        <Col sm={10}>
                            <Input type="text" name="selectMulti" id="exampleSelectMulti" multiple />
                        </Col>
                    </FormGroup>
                    <FormGroup>
                        <Label sm={2}>Profile Image</Label>
                        <Col sm={10}>
                            <Input type="file" name="file" />
                        </Col>
                    </FormGroup>
                    <FormGroup>
                        <Label for="exampleFile" sm={2}>Profile Banner</Label>
                        <Col sm={10}>
                            <Input type="file" name="file" id="exampleFile" />
                        </Col>
                    </FormGroup>

                    <FormGroup check>
                        <Col>
                            <Button>Save</Button>
                        </Col>
                    </FormGroup>
                </Form>
            </Container>
        );
    }
}

export default ProfileSettings;