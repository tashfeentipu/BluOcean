import React, { Component } from "react";
import { Col, Container, Row, Table } from "reactstrap";
import './styles.css';
import TableBody from "./TableBody";
import TableHeader from "./TableHeader";

interface IProps {

}

interface IState {

}

class OfferSettings extends Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <Container className="Offer-Settings-Main-Container" >
                <Row>
                    <Col>
                        <div className="Offer-Settings-Main-Heading">Offer <b>Settings</b></div>
                        <div className="Offer-Settings-Sub-Heading">Set a minimum offer for collections to ignore low offers.</div>
                        <Table borderless >
                            <TableHeader />
                            <TableBody />
                        </Table>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default OfferSettings;