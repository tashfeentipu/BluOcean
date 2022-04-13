import React, { Component } from "react";
import './styles.css';

interface IProps {

}

interface IState {

}

class Settings extends Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className="Settings-Main-Container" >
                Home Component
            </div>
        );
    }
}

export default Settings;