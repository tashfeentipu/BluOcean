import React, { Component } from "react";
import { Navbar } from "reactstrap";
import ExportIcon from "../../Assets/ExportIcon.png";
import SearchBox from "./SearchBox";

import Logo from "../../Components/Logo";
import './styles.css';
import NavItems from "../../Components/NavItems";
import { useMetaMask } from "metamask-react";

interface IProps {

}

const Header = (props: IProps) => {
    const { connect } = useMetaMask()
    return (
        <Navbar bg="light" expand="lg">
            <Logo />
            <SearchBox />
            <NavItems />
            <div className="HeaderButtonContainer" >
                <button className="ConnectWalletButton" onClick={connect}  >
                    Connect wallet
                </button>
                <button className="ExportIconContainer"  >
                    <img src={ExportIcon} style={{ width: "auto", height: "auto" }} />
                </button>
            </div>
        </Navbar>
    );
}

export default Header;