import React, { Component } from "react";
import StakingContainer1 from "./StakingContainer1";
import StakingContainer2 from "./StakingContainer2";
import './styles.css'

interface IProps {
}

interface IState {

}

class WaysToEarn extends Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className="WaysToEarnMainContainer" >
                <div>
                    <div className="WaysToEarnHeading">Ways to <b>Earn</b></div>
                    <div className="WaysToEarnSubHeading" >Benefit by staking and trading, BLU helps you earn rewards. It’s simple.</div>
                    <div className="WaysToEarnHeading2" >Staking</div>
                </div>
                <div className="WTEStakingContainer" >

                    <StakingContainer1 />
                    <StakingContainer2 />
                </div>
            </div>
        );
    }
}

export default WaysToEarn;