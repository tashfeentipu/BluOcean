import React, { Component } from "react";
import { Col, Row } from "reactstrap";
import ExplorationCard from "../../Containers/ExploreCollections/ExplorationCard";
import ExploreOptions from "../../Containers/ExploreCollections/ExploreOptions";
import './styles.css';

interface IProps {

}

interface IState {

}

class ExploreCollections extends Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className="Explore-Collections-Main-Container" >
                <Row>
                    <Col className="Explore-Collections-Heading-Container" >
                        <div className="Explore-Collections-Main-Heading" >
                            Explore <b>Collections</b>
                        </div>
                        <div className="Explore-Collections-Sub-Heading" >Explore NFT collections created by users on BluOcean.xyz!</div>
                    </Col>
                </Row>
                <Row className="Explore-Collections-Explore-Area" >
                    <Col md={12} >
                        <ExploreOptions />
                    </Col>
                    <ExplorationCard />
                    <ExplorationCard />
                    <ExplorationCard />
                    <ExplorationCard />
                    <ExplorationCard />
                    <ExplorationCard />
                    <ExplorationCard />
                    <ExplorationCard />
                </Row>
            </div>
        );
    }
}

export default ExploreCollections;