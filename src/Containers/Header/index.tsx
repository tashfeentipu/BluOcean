import React, { Component } from "react";
import { Navbar } from "reactstrap";
import ExportIcon from "../../Assets/ExportIcon.png";
import SearchBox from "./SearchBox";

import Logo from "../../Components/Logo";
import './styles.css';
import NavItems from "../../Components/NavItems";

interface IProps {

}

class Header extends Component {
    constructor(props: IProps) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <Navbar bg="light" expand="lg">
                <Logo />
                <SearchBox />
                <NavItems />
                <button className="ConnectWalletButton" >
                    Connect wallet
                </button>
                <button className="ExportIconContainer" >
                    <img src={ExportIcon} />
                </button>
            </Navbar>
        );
    }
}

export default Header;