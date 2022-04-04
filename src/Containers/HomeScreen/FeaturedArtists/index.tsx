import React, { Component } from "react";
import { Row, Col } from "reactstrap";
import FAAvatar1 from "../../../Assets/FAAvatar1.png";
import FAAvatar2 from "../../../Assets/FAAvatar2.png";
import FAAvatar3 from "../../../Assets/FAAvatar3.png";
import FeaturedArtistsCard from "./FeaturedArtistsCard";
import './styles.css'

interface IProps {
}

interface IState {

}

class FeaturedArtists extends Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <Row className="FeaturedArtistsMainContainer" >
                <Col>
                    <div className="FeaturedArtistsHeading" >
                        Featured <b>Artists</b>
                    </div>
                    <h6 className="FeaturedArtistsContent" >We carefully select <b style={{ color: "black" }} > 3 unique artists</b> every single week, it could be you!</h6>
                    <div className="FACContainer" >
                        <FeaturedArtistsCard avatar={FAAvatar1} title={"RobertSuarez#347"} description={"Sweet Sweet Cherry Pink, its self is aligned in syzygy."} />
                        <FeaturedArtistsCard avatar={FAAvatar2} title={"RobertSuarez#347"} description={"Sweet Sweet Cherry Pink, its self is aligned in syzygy."} />
                        <FeaturedArtistsCard avatar={FAAvatar3} title={"RobertSuarez#347"} description={"Sweet Sweet Cherry Pink, its self is aligned in syzygy."} />
                    </div>
                </Col>
            </Row>
        );
    }
}

export default FeaturedArtists;