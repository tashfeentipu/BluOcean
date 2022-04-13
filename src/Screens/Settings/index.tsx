import React, { Component } from "react";
import { Outlet, Route, Routes } from "react-router-dom";
import { Container } from "reactstrap";
import SettingsNavMenu from "./SettingsNavMenu";
import * as RouteNames from "../../Routes/RouteNames";
import './styles.css';
import ProfileSettings from "./Profile";
import NotificationsSettings from "./Notifications";
import PaymentSettings from "./Payment";
import OfferSettings from "./Offer";

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
            <Container className="Settings-Main-Container" >
                <SettingsNavMenu />
                <Outlet />
            </Container>
        );
    }
}

export default Settings;