import React, { Component } from "react";
import { Outlet } from "react-router-dom";
import { Container } from "reactstrap";
import SettingsNavMenu from "./SettingsNavMenu";
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
            <Container className="Settings-Main-Container" >
                <SettingsNavMenu />
                <Outlet />
            </Container>
        );
    }
}

export default Settings;