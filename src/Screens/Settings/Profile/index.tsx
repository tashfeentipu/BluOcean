import React, { Component } from "react";
import './styles.css';

interface IProps {

}

interface IState {

}

class ProfileSettings extends Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className="Profile-Settings-Main-Container" >
                Home Component
            </div>
        );
    }
}

export default ProfileSettings;