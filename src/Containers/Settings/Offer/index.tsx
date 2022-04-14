import React, { Component } from "react";
import { Col, Container, Row } from "reactstrap";
import { OfferTableBody } from "../../../Types/Settings";
import './styles.css';
import TableBody from "./TableBody";
import TableHeader from "./TableHeader";

interface IProps {

}

interface IState {
    tableData: Array<OfferTableBody>
}

class OfferSettings extends Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = {
            tableData: [{ content1: "OS Tutorials", content2: "Floor price: 1 ETH" }, { content1: "OS Tutorials", content2: "Floor price: 1 ETH" }, { content1: "OS Tutorials", content2: "Floor price: 1 ETH" }, { content1: "OS Tutorials", content2: "Floor price: 1 ETH" }, { content1: "OS Tutorials", content2: "Floor price: 1 ETH" }, { content1: "OS Tutorials", content2: "Floor price: 1 ETH" }, { content1: "OS Tutorials", content2: "Floor price: 1 ETH" }, { content1: "OS Tutorials", content2: "Floor price: 1 ETH" }, { content1: "OS Tutorials", content2: "Floor price: 1 ETH" }]
        };
    }

    render() {
        return (
            <Container className="Offer-Settings-Main-Container" >
                <Row>
                    <Col>
                        <div className="Offer-Settings-Main-Heading">Offer <b>Settings</b></div>
                        <div className="Offer-Settings-Sub-Heading">Set a minimum offer for collections to ignore low offers.</div>
                        <table>
                            <TableHeader />
                            {
                                this.state.tableData.map((element: OfferTableBody) => {
                                    return <TableBody content1={element.content1} content2={element.content2} />
                                })
                            }
                        </table>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default OfferSettings;