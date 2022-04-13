import React, { Component } from "react";
import './styles.css';

interface IProps {

}

interface IState {

}

class NotificationsSettings extends Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className="Notifications-Setting-Main-Container" >
                Notifications
            </div>
        );
    }
}

export default NotificationsSettings;