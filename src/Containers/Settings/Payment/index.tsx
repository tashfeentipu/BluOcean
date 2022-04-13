import React, { Component } from "react";
import { Col, Container, Row } from "reactstrap";
import './styles.css';

interface IProps {

}

interface IState {

}

class PaymentSettings extends Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <Container className="Payment-Settings-Main-Container" >
                <Row>
                    <Col md={{size: 8, offset: 1}} >
                        <div className="Payment-Settings-Heading" >
                            Payment <b>Settings</b>
                        </div>
                        <div className="Payment-Settings-Sub-Heading">Accept card payments, complete the verification steps below to accept card payments for your listings, using Moonpay. Moonpay is required to collect certain information to use their services. This information is not stored by OpenSea.</div>
                        <div >
                            <div className="Payment-Settings-SH-Container-1">
                                <div>
                                    <div className="Payment-Settings-Sub-Heading-1" >Basic verification</div>
                                    <div className="Payment-Settings-Sub-Description-1">Buy or sell up to $7,500 worth of NFTs through card payments with Moonpay.</div>
                                </div>
                                <button className="Payment-Settings-Button">
                                    Begin
                                </button>
                            </div>
                            <ul>
                                <li className="Payment-Settings-List-Item" >Name</li>
                                <li className="Payment-Settings-List-Item">Date of Birth</li>
                                <li className="Payment-Settings-List-Item">Residence</li>
                            </ul>
                        </div>
                        <div>
                            <div className="Payment-Settings-SH-Container-1">
                                <div>
                                    <div className="Payment-Settings-Sub-Heading-1" >Advanced verification</div>
                                    <div className="Payment-Settings-Sub-Description-1">Buy or sell NFTs with no lifetime limits</div>
                                </div>
                                <button className="Payment-Settings-Button">
                                    Begin
                                </button>
                            </div>
                            <ul>
                                <li className="Payment-Settings-List-Item">Advanced customer verification</li>
                                <li className="Payment-Settings-List-Item">ID Verification</li>
                            </ul>
                        </div>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default PaymentSettings;