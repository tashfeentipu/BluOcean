import React, { Component } from "react";
import './styles.css';

interface IProps {

}

interface IState {

}

class NotificationsSetting extends Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className="Notifications-Setting-Main-Container" >
                Home Component
            </div>
        );
    }
}

export default NotificationsSetting;