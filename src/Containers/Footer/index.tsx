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
                <div>
                    The world’s first and largest digital marketplace for crypto collectibles and non-fungible tokens (NFTs). Buy, sell, and discover exclusive digital items.
                </div>
                <div>
                    © 2022 Bluocean.xyz
                </div>
            </Row>
        );
    }
}

export default Footer;