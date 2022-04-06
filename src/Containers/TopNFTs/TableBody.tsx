import React, { Component } from "react";
import './styles.css'
import { TopNFTsBody } from "../../Types/TopNFTs";
import AvatarOwner from "../../Assets/AvatarOwner.png";
import Exclude from "../../Assets/Exclude.png";

interface IProps {
    tableData: TopNFTsBody
}

interface IState {

}

class TableBody extends Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <tr className="TableBodyMainContainer"  >
                <td className="TableBodyData1" style={{ width: "20.864vw" }}><img src={AvatarOwner} />  {this.props.tableData.collection}</td>
                <td className="TableBodyData2" style={{ width: "12.4vw" }}><img src={Exclude} />  {this.props.tableData.volume}</td>
                <td className="TableBodyData3" style={{ width: "8.5vw" }}>{this.props.tableData.hour24}</td>
                <td className="TableBodyData4" style={{ width: "7.6vw" }}>{this.props.tableData.day7}</td>
                <td className="TableBodyData5" style={{ width: "9.66vw" }}><img src={Exclude} />  {this.props.tableData.day14}</td>
                <td className="TableBodyData6" style={{ width: "9.5vw" }}>{this.props.tableData.owners}</td>
                <td className="TableBodyData6" style={{ width: "9.5vw" }}>{this.props.tableData.items}</td>
            </tr>

        );
    }
}

export default TableBody;