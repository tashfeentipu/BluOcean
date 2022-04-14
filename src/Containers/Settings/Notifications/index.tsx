import React, { Component } from "react";
import { Col, Container, Row } from "reactstrap";
import ToggleButton from "../../../Components/ToggleButton";
import MenuItems from "../../../Assets/MenuItems.png";
import './styles.css';
import NotificationItem from "./NotificationItem";

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
                        <div className="Notifications-Setting-Heading-Container" >
                            <div className="Notifications-Setting-Main-Heading" >
                                Notification <b>Settings</b>
                            </div>
                            <div className="Notifications-Setting-Sub-Heading">Select which notifications you would like to receive for 0xabb4...2da8</div>
                        </div>
                        <NotificationItem content1={"Item Sold"} content2={"When someone purchased one of your items"} />
                        <NotificationItem content1={"Bid Activity"} content2={"When someone bids on one of your items"} />
                        <NotificationItem content1={"Price Change"} content2={"When an item you made an offer on changes in price"} />
                        <NotificationItem content1={"Auction Expiration"} content2={"When a timed auction you created ends"} />
                        <NotificationItem content1={"Owned Item Updates"} content2={"When a significant update occurs for one of the items you have purchased on Bluocean"} />

                    </Col>
                </Row>
            </Container>
        );
    }
}

export default NotificationsSettings;