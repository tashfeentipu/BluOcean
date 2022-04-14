import React, { Component } from "react";
import './styles.css';

interface IProps {

}

interface IState {

}

class TableHeader extends Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <thead>
                <tr className="Offer-Table-Header-Main-Container" >
                    <th className="Offer-Table-Header-Row"> Collection </th>
                    <th className="Offer-Table-Header-Row"> Minimum Offer </th>
                </tr>
            </thead>
        );
    }
}

export default TableHeader;