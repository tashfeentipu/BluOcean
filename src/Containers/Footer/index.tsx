import React, { Component } from "react";
import { Row, Col } from "reactstrap";
import Logo from "../../Components/Logo";
import NavItems from "../../Components/NavItems";
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
                <Col>
                    <Logo />
                    <NavItems />
                </Col>
            </Row>
        );
    }
}

export default Footer;