import React, { Component } from "react";
import './styles.css';
import MenuItems from "../../../Assets/MenuItems.png";
import ToggleButton from "../../../Components/ToggleButton";


interface IProps {
    content1: string
    content2: string
}

interface IState {

}

class NotificationItem extends Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className="Notifications-Setting-Sub-Container-1" >
                <div className="Notifications-Setting-Sub-Container-2" >
                    <div className="Notifications-Setting-Sub-Container-3" >
                        <img src={MenuItems} alt="" />
                    </div>
                    <div>
                        <div className="Notifications-Setting-Content-1">{this.props.content1}</div>
                        <div className="Notifications-Setting-Content-2">{this.props.content2}</div>
                    </div>
                </div>
                <ToggleButton />
            </div>
        );
    }
}

export default NotificationItem;