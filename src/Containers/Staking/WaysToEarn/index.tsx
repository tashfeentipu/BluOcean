import React, { Component } from "react";
import StakingContainer1 from "./StakingContainer1";
import StakingContainer2 from "./StakingContainer2";
import WTEIcon from "../../../Assets/WTEIcon.png";
import Plus from "../../../Assets/Plus.png";
import Minus from "../../../Assets/Minus.png";
import './styles.css'

interface IProps {
}

interface IState {
    counter: string

}

class WaysToEarn extends Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = {
            counter: "0"
        };
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

                    <div className="StakingContainer1" >
                        <div className="SC1-SubContainer1" >
                            <div className="SC1-SubContainer1-Heading1">Input</div>
                            <div className="SC1-SubContainer1-Heading2">Balance: 5,295,000</div>
                        </div>
                        <div className="SC1-SubContainer2" >
                            <input type="text" className="SC1-SubContainer2" />
                            <div className="SC1-Icon" >
                                <img src={WTEIcon} alt="" />
                            </div>
                            <div className="StakingCounterMainContainer" >
                                <div className="StakingCounterContainer" >
                                    <img src={Minus} alt="" />
                                    <div className="StakingCounter" >
                                        {/* {this.state.counter} */}
                                    </div>
                                    <img src={Plus} alt="" />
                                </div>
                                <div className="StakingMonthsDropdown" >
                                    <span className="StakingMonthsDropdownText">Months</span>
                                    {/* <span style={{ width: "11px", height: "17px", display: "flex", justifyContent: 'center' }}>
                                    <img src={DownArrow} alt="" style={{ width: "100%", height: "auto" }} />
                                </span> */}
                                </div>
                            </div>
                            <div className="StakingContainerText" >You can stake from <b style={{ color: "rgba(0,0,0,0.8)" }} >1 month to 7 years</b></div>
                        </div>
                    </div>
                    <div className="StakingContainer2" >
                        <button className="StakingStakeButton" >
                            <span className="StakingStakeButtonText" >Stake now</span>
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}

export default WaysToEarn;