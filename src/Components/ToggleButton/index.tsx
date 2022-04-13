import React, { Component } from "react";
import './styles.css';

interface IProps {

}

interface IState {

}

class ToggleButton extends Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <label className="Toggle-Button-Switch">
                <input type="checkbox"  />
                <span className="Toggle-Button-Slider"></span>
            </label>
        );
    }
}

export default ToggleButton;