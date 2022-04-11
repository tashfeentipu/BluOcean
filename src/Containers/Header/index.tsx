import React, { useState } from "react";
import { useMetaMask } from "metamask-react";
import { Collapse, Navbar, NavbarBrand, NavbarToggler } from "reactstrap";
import ExportIcon from "../../Assets/ExportIcon.png";
import Logo from "../../Components/Logo";
import NavItems from "../../Components/NavItems";
import SearchBox from "./SearchBox";
import './styles.css';

interface IProps {

}

const Header = (props: IProps) => {
    const { connect } = useMetaMask()
    const [toggle, setToggle] = useState<boolean>(false)

    return (
        <Navbar expand="md" >
            <NavbarBrand href="/" >
                <Logo />
            </NavbarBrand>
            <NavbarToggler onClick={() => setToggle((prevState: boolean) => !prevState)} />
            <SearchBox />
            <Collapse isOpen={toggle} navbar className="Header-Collapse-Container"  >
                <NavItems />
            </Collapse>
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