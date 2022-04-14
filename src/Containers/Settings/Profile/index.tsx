import React, { Component } from "react";
import { Button, Col, Container, Form, FormGroup, FormText, Input, Label, Row } from "reactstrap";
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
                <Row>
                    <Col md={{ size: 8, offset: 1 }}>
                        <div className="Profile-Settings-Main-Heading">Profile <b>Settings</b></div>
                        <Form>
                            <FormGroup >
                                <Label sm={2} className="Profile-Settings-Label" >Usrename*</Label>
                                <Col md={8}>
                                    <Input type="text" placeholder="Enter username" />
                                </Col>
                            </FormGroup>
                            <FormGroup>
                                <Label className="Profile-Settings-Label" sm={2}>Bio</Label>
                                <Col md={8}>
                                    <Input type="textarea" placeholder="Tell the world your story!" />
                                </Col>
                            </FormGroup>
                            <FormGroup >
                                <Label className="Profile-Settings-Label" sm={2}>Email Address</Label>
                                <Col md={8}>
                                    <Input type="text" />
                                </Col>
                            </FormGroup>
                            <FormGroup>
                                <Label className="Profile-Settings-Label" sm={2}>Wallet Address</Label>
                                <Col md={8}>
                                    <Input type="text" multiple />
                                </Col>
                            </FormGroup>
                            <FormGroup>
                                <Label className="Profile-Settings-Label" sm={2}>Profile Image</Label>
                                <Col md={8}>
                                    <Input type="file" />
                                </Col>
                            </FormGroup>
                            <FormGroup>
                                <Label className="Profile-Settings-Label" sm={2}>Profile Banner</Label>
                                <Col md={8}>
                                    <Input type="file" />
                                </Col>
                            </FormGroup>

                            <FormGroup>
                                <Col md={8} >
                                    <Button className="Profile-Settings-Save-Button" >Save</Button>
                                </Col>
                            </FormGroup>
                        </Form>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default ProfileSettings;