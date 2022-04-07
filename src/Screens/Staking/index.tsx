import React, { Component } from "react";
import { Col, Container, Row } from "reactstrap";
import RightArrow from "../../Assets/RightArrow.png";
import Subtract from "../../Assets/Subtract.png";
import Trading from "../../Containers/Staking/Trading";
import WaysToEarn from "../../Containers/Staking/WaysToEarn";
import './styles.css'

interface IProps {
}

interface IState {

}

class StakingScreen extends Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <Container className="StakingMainContainer" >
                <div className="StakingMainHeadingContainer1" >
                    <div className="StakingMainHeadingContainer2" >
                        <div className="StakingMainHeading" >
                            Bluocean <b>Staking - BLU</b>
                        </div>
                        <div className="StakingSubHeading" >Safe and secure BLU staking. Up to <b>535.20% APY</b></div>
                        <button className="StakingEarnNowButton" >
                            <span className="StakingEarnNowButtonText" >Earn now</span>
                            <img src={RightArrow} alt="" />
                        </button>
                    </div>
                    <div className="StakingIconBox1" >
                        <div className="StakingIconBox2" >
                            <div className="StakingIconBox3" >
                                <img src={Subtract} alt="" style={{ width: "100%", height: "auto", }} />
                            </div>
                        </div>
                    </div>
                </div>

                <WaysToEarn />
                <Trading />

            </Container>
        );
    }
}

export default StakingScreen;