import React, { Component, CSSProperties } from "react";
import Exclude from "../../../Assets/Exclude.png";
import './styles.css';

interface IProps {
    style?: CSSProperties
    placeholder: string
}


interface IState {
    focus: boolean
    inputValue: string
}

class ThresholdInput extends Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = {
            focus: false,
            inputValue: "",
        };
    }

    render() {
        return (
            <div className="Threshold-Input-Container" style={this.props.style} >
                <img src={Exclude} alt="" className="Threshold-Input-Icon" />
                {!this.state.focus && <div className="Threshold-Input-Placeholder" >{this.props.placeholder}</div>}
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