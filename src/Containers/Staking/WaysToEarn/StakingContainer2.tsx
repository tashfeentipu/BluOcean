import React, { Component } from "react";
import Plus from "../../../Assets/Plus.png";
import Minus from "../../../Assets/Minus.png";
import DownArrow from "../../../Assets/DownArrow.png";
import './styles.css'

interface IProps {
}

interface IState {
    counter: string
}

class StakingContainer2 extends Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = { counter: "0" };
    }

    render() {
        return (
            <div className="StakingContainer2" >
                <div className="StakingCounterMainContainer" >
                    <div className="StakingCounterContainer" >
                        <img src={Minus} alt="" />
                        <div className="StakingCounter" >
                            {this.state.counter}
                        </div>
                        <img src={Plus} alt="" />
                    </div>
                    <div className="StakingMonthsDropdown" >
                        <span className="StakingMonthsDropdownText">Months</span>
                        <span style={{ width: "11px", height: "17px", display: "flex", justifyContent: 'center' }}>
                            <img src={DownArrow} alt="" style={{ width: "100%", height: "auto" }} />
                        </span>
                    </div>
                </div>
                <div className="StakingContainerText" >You can stake from <b style={{ color: "rgba(0,0,0,0.8)" }} >1 month to 7 years</b></div>
                <button className="StakingStakeButton" >
                    <span className="StakingStakeButtonText" >Stake now</span>
                </button>
            </div>
        );
    }
}

export default StakingContainer2;