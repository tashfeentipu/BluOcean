import React, { Component } from "react";
import { Link } from "react-router-dom";
import './styles.css';
import * as RouteNames from "../../Routes/RouteNames";

interface IProps {

}

interface IState {

}

class SettingsNavMenu extends Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className="Settings-NavMenu-Main-Container" >
                <Link to={RouteNames.Profile} style={{ color: "#DEAD2D", textDecoration: "none" }} >
                    <div className="Settings-NavMenu-Item">
                        Profile
                    </div>
                </Link>
                <Link to={RouteNames.Notifications} style={{ color: "#DEAD2D", textDecoration: "none" }} >
                    <div className="Settings-NavMenu-Item">
                        Notifications
                    </div>
                </Link>
                <Link to={RouteNames.Offer} style={{ color: "#DEAD2D", textDecoration: "none" }} >
                    <div className="Settings-NavMenu-Item">
                        Offers
                    </div>
                </Link>
                <Link to={RouteNames.Payment} style={{ color: "#DEAD2D", textDecoration: "none" }} >
                    <div className="Settings-NavMenu-Item">
                        Payment
                    </div>
                </Link>
            </div>
        );
    }
}

export default SettingsNavMenu;