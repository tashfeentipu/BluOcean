import React, { Component } from "react";
import { Col, Row } from "reactstrap";
import BSCard from "./BSCard";
import './styles.css'

interface IProps {
}

interface IState {

}

class BuySellNFTs extends Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <Row className="BuySellNFTsMainContainer" >
                <Col lg={12} >
                    <div className="BuySellNFTsHeading">Buy Sell & Fractionalise <b>NFTs</b></div>
                    <div className="BuySellNFTsContent">Want to profit from your art? Start creating and listing your NFTs on Bluocean</div>
                </Col>
                <BSCard name={"Set up your wallet"} content={"Once you’ve set up your wallet of choice, connect it to OpenSea by clicking the wallet icon in the top right corner. Learn about the wallets we support."} />
                <BSCard name={"Create your collection"} content={"Click My Collections and set up your collection. Add social links, a description, profile & banner images, and set a secondary sales fee."} />
                <BSCard name={"Add your NFTs"} content={"Upload your work (image, video, audio, or 3D art), add a title and description, and customize your NFTs with properties, stats, and unlockable content."} />
                <BSCard name={"List them for sale"} content={"Choose between auctions, fixed-price listings, and declining-price listings. You choose how you want to sell your NFTs, and we help you sell them!"} />
            </Row>
        );
    }
}

export default BuySellNFTs;