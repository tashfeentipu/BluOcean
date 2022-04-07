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
                <div>
                    <div>Ways to <b>Earn</b></div>
                    <div>Benefit by staking and trading, BLU helps you earn rewards. It’s simple.</div>
                </div>
                <div>Staking</div>
            </div>
        );
    }
}

export default WaysToEarn;