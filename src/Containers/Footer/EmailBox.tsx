import React, { Component } from "react";
import RightArrowBlack from "../../Assets/RightArrowBlack.png";
import './styles.css';

interface IProps {

}

interface IState {
    placeholder: string
    focus: boolean
    inputValue: string
}

class EmailBox extends Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = {
            placeholder: "Search any collection",
            focus: false,
            inputValue: "",
        };
    }

    render() {
        return (
            <div className="EmailBoxMainContainer" >
                <input type="text" className="EmailBoxInputBox"
                    onFocus={() => {
                        this.setState({ focus: true })
                    }}
                    value={this.state.inputValue}
                    onChange={(e) => {
                        this.setState({ inputValue: e.target.value })
                    }}
                    onBlur={() => {
                        this.state.inputValue === "" && this.setState({ focus: false })
                    }} />
                {!this.state.focus && <div className="FooterEmailBoxPlaceholder" >{this.state.placeholder}</div>}

                <button className="EmailBoxInput-Image-Button" >
                    <img src={RightArrowBlack} alt="" />
                </button>
            </div>
        );
    }
}

export default EmailBox;