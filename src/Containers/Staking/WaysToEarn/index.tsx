import React, { Component } from "react";
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
                <div className="WaysToEarnHeading">Ways to <b>Earn</b></div>
                <div className="WaysToEarnSubHeading" >Benefit by staking and trading, BLU helps you earn rewards. It’s simple.</div>
                <div className="WaysToEarnHeading2" >Staking Heading </div>
            </div>
        );
    }
}

export default WaysToEarn;