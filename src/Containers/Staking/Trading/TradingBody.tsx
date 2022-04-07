import React, { Component } from "react";
import Exclude from "../../../Assets/Exclude.png";
import './styles.css'
import { TradingData } from "../../../Types/Staking";

interface IProps {
    tableData: TradingData
}

interface IState {

}

class TradingBody extends Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <tr className="TradingBodyMainContainer" >
                <td className="TradingBodyRow" ><span className="TradingBodyRowData" > {this.props.tableData.time}</span></td>
                <td className="TradingBodyRow" ><span className="TradingBodyRowData" > {this.props.tableData.name}</span></td>
                <td className="TradingBodyRow" ><span className="TradingBodyRowData" > <img src={Exclude} style={{ marginRight: "0.5rem" }} /> {this.props.tableData.tradeValue}</span></td>
                <td className="TradingBodyRow" ><span className="TradingBodyRowData" > <img src={Exclude} style={{ marginRight: "0.5rem" }} /> {this.props.tableData.earned}</span></td>
            </tr>
        );
    }
}

export default TradingBody;