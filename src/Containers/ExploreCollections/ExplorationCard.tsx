import React, { Component } from "react";
import ExplorationAvatar from "../../Assets/ExplorationAvatar.png";
import ExplorationIcon from "../../Assets/ExplorationIcon.png";
import AvatarOwner from "../../Assets/AvatarOwner.png";
import './styles.css';
import { Col, Row } from "reactstrap";

interface IProps {

}

interface IState {

}

class ExplorationCard extends Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = {};
    }

    render() {
        return (
                <Col md={3} className="Exploration-Card-Main-Container p-0" >
                    <div className="Exploration-Card-Image-Container" >
                        <img src={ExplorationAvatar} alt="" style={{ width: "100%" }} />
                    </div>
                    <div className="Exploration-Card-Content" >
                        <div className="Exploration-Card-Title-Container">
                            <div className="Exploration-Card-Title-Container-2" >
                                <div className="Exploration-Card-Title-Container-3" >
                                    <div className="Exploration-Card-Title" >The Sandbox Shibuya LAND Sale</div>
                                    <img src={ExplorationIcon} alt="" />
                                </div>
                                <div className="Exploration-Card-Title2" >
                                    by TheSandboxGame
                                </div>
                            </div>
                            <div className="Exploration-Card-Avatar-Container" >
                                <img src={AvatarOwner} alt="" style={{ width: "100%", height: "auto" }} />
                            </div>
                        </div>
                        <div className="Exploration-Card-Description"  >
                            West meets East. Music is a universal language that we all speak. The Sandbox welcomes the world of J-pop from...
                        </div>
                    </div>
                </Col>
        );
    }
}

export default ExplorationCard;