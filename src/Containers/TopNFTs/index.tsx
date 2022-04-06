import React, { Component } from "react";
import './styles.css'
import TableBody from "./TableBody";
import TableHeader from "./TableHeader";
import { TopNFTsBody } from "../../Types/TopNFTs";

interface IProps {
}

interface IState {
    tableData: Array<TopNFTsBody>
}

class TopNFTsTable extends Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = {
            tableData: [{ collection: "DeadFellaz#7084", volume: "39,411.20", hour24: "+52.11%", day7: "-2.35%", day14: "4.32", owners: "9.6K", items: "53.1K", }, { collection: "DeadFellaz#7084", volume: "39,411.20", hour24: "+52.11%", day7: "-2.35%", day14: "4.32", owners: "9.6K", items: "53.1K", }, { collection: "DeadFellaz#7084", volume: "39,411.20", hour24: "+52.11%", day7: "-2.35%", day14: "4.32", owners: "9.6K", items: "53.1K", }, { collection: "DeadFellaz#7084", volume: "39,411.20", hour24: "+52.11%", day7: "-2.35%", day14: "4.32", owners: "9.6K", items: "53.1K", }, { collection: "DeadFellaz#7084", volume: "39,411.20", hour24: "+52.11%", day7: "-2.35%", day14: "4.32", owners: "9.6K", items: "53.1K", }]
        };
    }

    render() {
        return (
            <div className="TNTableMainContainer" >
                <TableHeader />
                {
                    this.state.tableData.map((element: TopNFTsBody) => {
                        return <TableBody tableData={element} />
                    })
                }

            </div>
        );
    }
}

export default TopNFTsTable;