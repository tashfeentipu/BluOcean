import React, { Component } from "react";
import Exclude from "../../../Assets/Exclude.png";
import './styles.css';

interface IProps {

}


interface IState {
    placeholder: string
    focus: boolean
    inputValue: string
}

class ThresholdInput extends Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = {
            placeholder: "Minimum Bid Threshold",
            focus: false,
            inputValue: "",
        };
    }

    render() {
        return (
            <div className="Threshold-Input-Container" >
                <img src={Exclude} alt="" className="Threshold-Input-Icon" />
                {!this.state.focus && <div className="Threshold-Input-Placeholder" >{this.state.placeholder}</div>}
                <input type="text" className="Threshold-Input-Input" onFocus={() => {
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
        );
    }
}

export default ThresholdInput;