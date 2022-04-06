import React, { Component } from "react";
import './styles.css'

interface IProps {
}

interface IState {

}

class TableHeader extends Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = {

        };
    }

    render() {
        return (
            <tr className="TableHeaderMainContainer"  >
                <th className="TableHeaderRow" style={{ width: "20.864vw" }}>Collection</th>
                <th className="TableHeaderRow" style={{ width: "12.4vw" }} >Volume</th>
                <th className="TableHeaderRow" style={{ width: "8.5vw" }} >24h %</th>
                <th className="TableHeaderRow" style={{ width: "7.6vw" }}>7d %</th>
                <th className="TableHeaderRow" style={{ width: "9.66vw" }}>7d %</th>
                <th className="TableHeaderRow" style={{ width: "9.5vw" }}>Owners</th>
                <th className="TableHeaderRow" style={{ width: "9.5vw" }}>Items</th>
            </tr>
        );
    }
}

export default TableHeader;