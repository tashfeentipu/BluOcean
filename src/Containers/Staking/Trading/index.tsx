import React, { Component } from "react";
import './styles.css'
import TradingBody from "./TradingBody";
import TradingHeader from "./TradingHeader";
import { TradingData } from "../../../Types/Staking";

interface IProps {
}

interface IState {
    tradingData: Array<TradingData>

}

class Trading extends Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = {
            tradingData: [{ time: "18th Nov 2022 3:29 PM", name: "Fidenza by Tyler Hobbs", tradeValue: "11.20", earned: "0.22" },
            { time: "18th Nov 2022 3:29 PM", name: "Fidenza by Tyler Hobbs", tradeValue: "11.20", earned: "0.22" },
            { time: "18th Nov 2022 3:29 PM", name: "Fidenza by Tyler Hobbs", tradeValue: "11.20", earned: "0.22" },
            { time: "18th Nov 2022 3:29 PM", name: "Fidenza by Tyler Hobbs", tradeValue: "11.20", earned: "0.22" },
            ]
        };
    }

    render(): JSX.Element {
        return (
            <div className="TradingMainContainer" >
                <div className="TradingMainHeading" >Trading</div>
                <table>
                    <TradingHeader />
                    {this.state.tradingData.map(element => {
                        return <TradingBody tableData={element} />
                    })}
                </table>
                <div className="TradingContent" >Once you withdraw your earnings from trading NFT’s the trade will be removed from the table above.</div>
                <button className="TradingWithdrawButton"><span className="TradingWithdrawButtonText" >Withdraw</span></button>
            </div>
        );
    }
}

export default Trading;