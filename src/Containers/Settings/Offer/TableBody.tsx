import React, { Component } from "react";
import AvatarOwner from "../../../Assets/AvatarOwner.png";
import Exclude from "../../../Assets/Exclude.png";
import './styles.css';

interface IProps {
    content1: string
    content2: string
}

interface IState {
    focus: boolean
    inputValue: string
    placeholder: string
}

class TableBody extends Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = {
            placeholder: "Min Bid",
            focus: false,
            inputValue: "",
        };
    }

    render() {
        return (
            <tbody>
                <tr className="Offer-Table-Body-Main-Container" >
                    <td className="Offer-Table-Body-Row-1" >
                        <div className="Offer-Table-Body-Sub-Row" >
                            <div>
                                <img src={AvatarOwner} alt="" />
                            </div>
                            <div className="Offer-Table-Body-Sub-Row-2"  >
                                <div className="Offer-Table-Body-Content-1" >{this.props.content1}</div>
                                <div className="Offer-Table-Body-Content-2">{this.props.content2}</div>
                            </div>
                        </div>
                        <div className="Offer-Table-Body-Sub-Row-3" >
                            2 Items
                        </div>
                    </td>
                    <td className="Offer-Table-Body-Row-2" >
                        <div className="Offer-Table-Input-Container" >
                            <img src={Exclude} alt="" className="Offer-Table-Input-Icon" />
                            {!this.state.focus && <div className="Offer-Table-Input-Placeholder" >{this.state.placeholder}</div>}
                            <input type="text" className="Offer-Table-Input-Input" onFocus={() => {
                                this.setState({ focus: true })
                            }}
                                value={this.state.inputValue}
                                onChange={(e) => {
                                    this.setState({ inputValue: e.target.value })
                                }}
                                onBlur={() => {
                                    this.state.inputValue === "" && this.setState({ focus: false })
                                }} />
                        </div>
                    </td>
                </tr>
            </tbody>
        );
    }
}

export default TableBody;