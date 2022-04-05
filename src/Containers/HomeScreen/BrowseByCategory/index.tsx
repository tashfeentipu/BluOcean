import React, { Component } from "react";
import { Col, Row } from "reactstrap";
import BBCCard from "./BBCCard";
import Art from "../../../Assets/Art.png";
import Music from "../../../Assets/Music.png";
import DomainNames from "../../../Assets/DomainNames.png";
import Photography from "../../../Assets/Photography.png";
import Sports from "../../../Assets/Sports.png";
import TradingCards from "../../../Assets/TradingCards.png";
import Utility from "../../../Assets/Utility.png";
import VirtualWorlds from "../../../Assets/VirtualWorlds.png";
import './styles.css'

interface IProps {
}

interface IState {

}

class BrowseByCategory extends Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <Row className="BBCMainContainer" >
                <Col lg={12} >
                    <div className="BBCHeading">Browse by <b>Category</b></div>
                    <div className="BBCContent">Don’t know exactly what you’re looking for? Narrow your search browsing the categories.</div>
                </Col>
                <BBCCard name={"Art"} iconName={Art} />
                <BBCCard name={"Music"} iconName={Music} />
                <BBCCard name={"Domain Names"} iconName={DomainNames} />
                <BBCCard name={"Photography"} iconName={Photography} />
                <BBCCard name={"Sports"} iconName={Sports} />
                <BBCCard name={"Trading Cards"} iconName={TradingCards} />
                <BBCCard name={"Utility"} iconName={Utility} />
                <BBCCard name={"Virtual Worlds"} iconName={VirtualWorlds} />
            </Row>
        );
    }
}

export default BrowseByCategory;