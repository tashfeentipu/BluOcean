import React, { Component } from "react";
import WTEIcon from "../../../Assets/WTEIcon.png";
import './styles.css'

interface IProps {
}

interface IState {

}

class StakingContainer1 extends Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className="StakingContainer1" >
                <div className="SC1-SubContainer1" >
                    <div>Input</div>
                    <div>Balance: 5,295,000</div>
                </div>
                <div className="SC1-SubContainer2" >
                    <input type="text" />
                    <div className="SC1-Icon" >
                        <img src={WTEIcon} alt="" />
                    </div>
                </div>
            </div>
        );
    }
}

export default StakingContainer1;