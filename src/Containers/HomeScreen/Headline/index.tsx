import React, { Component } from "react";
import { Col, Row } from "reactstrap";
import { BsArrowRight } from "react-icons/bs";
import { FaDiscord, FaTwitter } from "react-icons/fa";
import PopularNFTs from "./PopularNFTs";
import Avatar1 from "../../../Assets/Avatar1.png";
import './styles.css'

interface IProps {

}

class Headline extends Component {
    constructor(props: IProps) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <Row className="MainContainer" >
                <Col>
                    <div>
                        Discover Rare
                        Collections Of
                        Art & NFTs.
                    </div>
                    <div>
                        Bluocean.xyz is the community-first NFT
                        marketplace with rewards for participating.
                    </div>
                    <div>
                        Explore Artwork
                        <BsArrowRight />
                        <hr />
                        <FaDiscord />
                        <FaTwitter />
                    </div>
                </Col>
                <Col>
                    <PopularNFTs name={"DeadFellaz#7084"} time={"12m : 03s"} bid={"53.90"} avatar={Avatar1} />
                </Col>
                <Col>
                    <div>20.9K+
                        Art Work</div>
                    <div>9.3M+
                        Artists</div>
                    <div>54K+
                        In Auction</div>
                </Col>
            </Row>
        );
    }
}

export default Headline;