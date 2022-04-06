import React, { Component } from "react";
import { Col, Container, Row } from "reactstrap";
import ListItems from "../../Containers/CreateCollection/ListItems";
import './styles.css'

interface IProps {
}

interface IState {

}

class CreateCollection extends Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <Container className="CreateCollectionMainContainer" >
                <Row>
                    <Col>
                        <div className="CCHeadingContainer" >
                            <div className="CCHeading1">Home / Resources / Getting Started / Creating a Collection</div>
                            <div className="CCHeading2">Creating a <b>Collection</b></div>
                            <div className="CCHeading3">Learn how to create an account, set up your wallet, and what you can do on BluOcean</div>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col lg={3} >
                        <ListItems />
                    </Col>
                    <Col lg={9} >

                    </Col>
                </Row>
            </Container>
        );
    }
}

export default CreateCollection;