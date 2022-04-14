import React, { Component } from "react";
import AvatarOwner from "../../../Assets/AvatarOwner.png";
import ThresholdInput from "../Notifications/ThresholdInput";
import './styles.css';

interface IProps {

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
            <tbody>
                <tr className="Offer-Table-Body-Main-Container" >
                    <td className="Offer-Table-Body-Row" >
                        <div className="Offer-Table-Body-Sub-Row" >
                            <img src={AvatarOwner} alt="" />
                            <div>
                                <div className="Offer-Table-Body-Content-1" >OS Tutorials</div>
                                <div className="Offer-Table-Body-Content-2">Floor price: 1 ETH</div>
                            </div>
                        </div>
                        <div className="Offer-Table-Body-Content-3" >
                            2 Items
                        </div>
                    </td>
                    <td>
                        <ThresholdInput style={{ width: "50px", height: "22px", }} placeholder={"Min Bid"} />
                    </td>
                </tr>
            </tbody>
        );
    }
}

export default TableBody;