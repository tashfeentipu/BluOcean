import React, { Component } from "react";
import { Row, Col } from "reactstrap";
import Logo from "../../Assets/Logo.png";
import './styles.css'

interface IProps {

}

class Footer extends Component {
    constructor(props: IProps) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <Row className="FooterMainContainer" >
                <Col lg={1}  >
                    <img src={Logo} />
                    <div>bluocean </div>
                </Col>
                <Col>
                    Explore
                </Col>
                <Col>
                    Resources
                </Col>
                <Col>
                    Stats
                </Col>
                <Col>
                    Rewards
                </Col>
            </Row>
        );
    }
}

export default Footer;