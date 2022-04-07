import React, { Component } from "react";
import './styles.css'

interface IProps {
}

interface IState {

}

class TradingHeader extends Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <tr className="TradingHeaderMainContainer" >
                <th className="TradingHeaderRow" style={{width: "118px"}}><span className="TradingHeaderRowData" >Time</span></th>
                <th className="TradingHeaderRow" style={{width: "351px"}} ><span className="TradingHeaderRowData" >Name</span></th>
                <th className="TradingHeaderRow" style={{width: "129px"}}><span className="TradingHeaderRowData" >Trade Value</span></th>
                <th className="TradingHeaderRow" style={{width: "126px"}}><span className="TradingHeaderRowData" >Earned</span></th>
            </tr>
        );
    }
}

export default TradingHeader;