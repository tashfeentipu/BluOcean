import React, { Component } from "react";
import { Col, Container, Row } from "reactstrap";
import ToggleButton from "../../../Components/ToggleButton";
import './styles.css';

interface IProps {

}

interface IState {

}

class NotificationsSettings extends Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <Container className="Notifications-Setting-Main-Container" >
                <Row>
                    <Col md={{ size: 8, offset: 1 }} >
                        <div>
                            Notification Settings
                        </div>
                        <div>Select which notifications you would like to receive for 0xabb4...2da8</div>
                        <ToggleButton />
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default NotificationsSettings;