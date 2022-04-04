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
            <Row className="HeadlineMainContainer" >
                <Col>
                    <div className="HeadlineMainHeading" >
                        Discover <b> Rare
                            Collections
                        </b> Of <b>
                            Art & NFTs.
                        </b>
                    </div>
                    <div className="HeadlineSubHeading" >
                        Bluocean.xyz is the community-first NFT
                        marketplace with rewards for participating.
                    </div>
                    <div style={{ color: "#0F0E36" }}>
                        <span className="ExploreArtwork" >
                            Explore Artwork
                        </span>
                        <BsArrowRight className="ArrowRightStyle" />
                        <hr />
                        <FaDiscord />
                        <FaTwitter />
                    </div>
                </Col>
                <Col className="HeadlinePopularNFTsContainer" >
                    <PopularNFTs name={"DeadFellaz#7084"} time={"12m : 03s"} bid={"53.90"} avatar={Avatar1} />
                </Col>
                <Col className="HeadlineStatsCol" lg={2} >
                    <div className="HeadlineStatsContainer" >
                        <span className="HeadlineStatsBold" >
                            20.9K+
                        </span>
                        Art Work</div>
                    <div className="HeadlineStatsContainer" >
                        <span className="HeadlineStatsBold" >
                            9.3M+
                        </span>
                        Artists</div>
                    <div className="HeadlineStatsContainer" >
                        <span className="HeadlineStatsBold" >
                            54K+
                        </span>
                        In Auction</div>
                </Col>
            </Row>
        );
    }
}

export default Headline;