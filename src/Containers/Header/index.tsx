import React, { Component } from "react";
import { Navbar } from "reactstrap";
import Logo from "../../Assets/Logo.png";
import ExportIcon from "../../Assets/ExportIcon.png";
import SearchBox from "./SearchBox";
import './styles.css';

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
                <div className="LogoContainer" >
                    <img src={Logo} />
                    <div className="LogoText" >Bluocean</div>
                </div>
                <SearchBox />
                <div className="NavItem" >Explore</div>
                <div className="NavItem" >Resources</div>
                <div className="NavItem">Stats</div>
                <div className="NavItem NavItemActive">Rewards</div>
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