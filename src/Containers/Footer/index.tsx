import React, { Component } from "react";
import Logo from "../../Components/Logo";
import NavItems from "../../Components/NavItems";
import EmailBox from "./EmailBox";
import './styles.css';

interface IProps {

}

class Footer extends Component {
    constructor(props: IProps) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className="FooterMainContainer" >
                <div className="FooterSubContainer" >
                    <div className="FooterSubContainer2" >
                        <Logo />
                        <NavItems style={{ width: "60%" }} />
                    </div>
                    <EmailBox />
                </div>
                <div className="FooterTextContainer" >
                    <div className="FooterText1">
                        The world’s first and largest digital marketplace for crypto collectibles and non-fungible tokens (NFTs). Buy, sell, and discover exclusive digital items.
                    </div>
                    <div className="FooterText1" style={{ textAlign: "end" }} >
                        © 2022 Bluocean.xyz
                    </div>
                </div>
            </div>
        );
    }
}

export default Footer;