import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import FeaturedArtists from "../../Containers/HomeScreen/FeaturedArtists";
import Headline from "../../Containers/HomeScreen/Headline";
import './styles.css'

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
            </Container>
        );
    }
}

export default HomeScreen;