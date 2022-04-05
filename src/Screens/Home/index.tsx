import React, { Component } from "react";
import { Container } from "reactstrap";
import BrowseByCategory from "../../Containers/HomeScreen/BrowseByCategory";
import BuySellNFTs from "../../Containers/HomeScreen/BuyAndSellNFTs";
import FeaturedArtists from "../../Containers/HomeScreen/FeaturedArtists";
import Headline from "../../Containers/HomeScreen/Headline";
import TopCollections from "../../Containers/HomeScreen/TopCollections";
import './styles.css';

interface IProps {

}

class HomeScreen extends Component {
    constructor(props: IProps) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <Container className="HomeMainContainer" >
                <Headline />
                <FeaturedArtists />
                <TopCollections />
                <BuySellNFTs />
                <BrowseByCategory />
            </Container>
        );
    }
}

export default HomeScreen;