import React, { Component } from "react";
import { Col } from "reactstrap";
import AvatarOwner from "../../../Assets/AvatarOwner.png";
import Exclude from "../../../Assets/Exclude.png";
import './styles.css'

interface IProps {
    name: string;
    perc: string
    floorPrice: string
    highestBid: string
}

interface IState {

}

class TopCollectionsCard extends Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <Col lg={3} className="TCCMainContainer" >
                <div className="TCCHeader" >
                    <img src={AvatarOwner} />
                    <div className="TCCHeaderContainer" >
                        <div className="TCCName">{this.props.name} </div>
                        <div className="TCCPerc">{this.props.perc}% </div>
                    </div>
                </div>
                <div className="TCCMainBody" >
                    <div>
                        <div style={{ display: 'flex', alignItems: 'center', marginBottom: "0.5em" }} >
                            <img src={Exclude} style={{ marginRight: "0.4em" }} />
                            <div className="TCCFloorPriceValue" >{this.props.floorPrice}</div>
                        </div>
                        <div className="TCCFloorPrice">Floor Price </div>
                    </div>
                    <div>
                        <div style={{ display: 'flex', alignItems: 'center', marginBottom: "0.5em" }} >
                            <img src={Exclude} style={{ marginRight: "0.4em" }} />
                            <div className="TCCHighestBidValue" >{this.props.highestBid}</div>
                        </div>
                        <div className="TCCHighestBid">Highest Bid </div>
                    </div>

                </div>
            </Col>
        );
    }
}

export default TopCollectionsCard;