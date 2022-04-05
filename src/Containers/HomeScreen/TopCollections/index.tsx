import React, { Component } from "react";
import { Col, Row } from "reactstrap";
import './styles.css'
import TopCollectionsCard from "./TopCollectionsCard";

interface IProps {
}

interface IState {

}

class TopCollections extends Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <Row className="TopCollectionsMainContainer" >
                <Col lg={12} >
                    <div className="TopCollectionsHeading">Top <b>Collections</b></div>
                    <div className="TopCollectionsContent">Here are the most popular collections over a period of <b style={{ color: "black" }} >30 days</b></div>
                </Col>
                <TopCollectionsCard name={"DeadFellaz#7084"} perc={"-2.93"} floorPrice={"0.93"} highestBid={"53.90"} />
                <TopCollectionsCard name={"DeadFellaz#7084"} perc={"-2.93"} floorPrice={"0.93"} highestBid={"53.90"} />
                <TopCollectionsCard name={"DeadFellaz#7084"} perc={"-2.93"} floorPrice={"0.93"} highestBid={"53.90"} />
                <TopCollectionsCard name={"DeadFellaz#7084"} perc={"-2.93"} floorPrice={"0.93"} highestBid={"53.90"} />
                <TopCollectionsCard name={"DeadFellaz#7084"} perc={"-2.93"} floorPrice={"0.93"} highestBid={"53.90"} />
                <TopCollectionsCard name={"DeadFellaz#7084"} perc={"-2.93"} floorPrice={"0.93"} highestBid={"53.90"} />
                <TopCollectionsCard name={"DeadFellaz#7084"} perc={"-2.93"} floorPrice={"0.93"} highestBid={"53.90"} />
                <TopCollectionsCard name={"DeadFellaz#7084"} perc={"-2.93"} floorPrice={"0.93"} highestBid={"53.90"} />
            </Row>
        );
    }
}

export default TopCollections;