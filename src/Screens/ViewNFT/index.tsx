import React, { Component } from "react";
import { Col, Row } from "reactstrap";
import Avatar1 from "../../Assets/Avatar1.png";
import './styles.css';

interface IProps {

}

interface IState {

}

class ViewNFT extends Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <Row className="View-NFT-Main-Container" >
                <Col>
                    <Col>
                        <img src={Avatar1} alt="" style={{width: "55px", height: "" }} />
                    </Col>
                </Col>
            </Row>
        );
    }
}

export default ViewNFT;