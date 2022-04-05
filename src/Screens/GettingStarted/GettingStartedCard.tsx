import React, { Component } from "react";
import './styles.css'

interface IProps {
    title: string
    description: string
}

interface IState {

}

class GettingStarted extends Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className="GSCardMainContainer" >
                <div className="GSTitle"><b>{this.props.title}</b></div>
                <div className="GSDescription">{this.props.description}</div>
            </div>
        );
    }
}

export default GettingStarted;