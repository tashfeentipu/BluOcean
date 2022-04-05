import React, { Component } from "react";
import { Container } from "reactstrap";
import GettingStartedCard from "./GettingStartedCard";
import './styles.css'

interface IProps {
}

interface IState {

}

class GettingStarted extends Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <Container className="GettingStartedMainContainer" >
                <div className="GSHeadingContainer" >
                    <div className="GettingStartedHeading1">Home / Resources / Getting Started</div>
                    <div className="GettingStartedHeading2">Getting <b>Started</b></div>
                    <div className="GettingStartedHeading3">Learn how to create an account, set up your wallet, and what you can do on BluOcean</div>
                </div>
                <div className="GSCardContainer" >
                    <GettingStartedCard title={"Create your collection"} description={"Click My Collections and set up your collection. Add social links, a description, profile & banner images, and set a secondary sales fee."} />
                    <GettingStartedCard title={"Add your NFTs"} description={"Upload your work (image, video, audio, or 3D art), add a title and description, and customize your NFTs with properties, stats, and unlockable content."} />
                    <GettingStartedCard title={"List them for sale"} description={"Choose between auctions, fixed-price listings, and declining-price listings. You choose how you want to sell your NFTs, and we help you sell them!"} />
                </div>
                <div className="GSCardContainer" >
                    <GettingStartedCard title={"Create your collection"} description={"Click My Collections and set up your collection. Add social links, a description, profile & banner images, and set a secondary sales fee."} />
                    <GettingStartedCard title={"Add your NFTs"} description={"Upload your work (image, video, audio, or 3D art), add a title and description, and customize your NFTs with properties, stats, and unlockable content."} />
                    <GettingStartedCard title={"List them for sale"} description={"Choose between auctions, fixed-price listings, and declining-price listings. You choose how you want to sell your NFTs, and we help you sell them!"} />
                </div>
                <div className="GSCardContainer" >
                    <GettingStartedCard title={"Create your collection"} description={"Click My Collections and set up your collection. Add social links, a description, profile & banner images, and set a secondary sales fee."} />
                    <GettingStartedCard title={"Add your NFTs"} description={"Upload your work (image, video, audio, or 3D art), add a title and description, and customize your NFTs with properties, stats, and unlockable content."} />
                    <GettingStartedCard title={"List them for sale"} description={"Choose between auctions, fixed-price listings, and declining-price listings. You choose how you want to sell your NFTs, and we help you sell them!"} />
                </div>
            </Container>
        );
    }
}

export default GettingStarted;