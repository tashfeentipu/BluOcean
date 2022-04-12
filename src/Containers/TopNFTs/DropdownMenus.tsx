import React, { Component } from "react";
import { DropdownItem, DropdownMenu, DropdownToggle, UncontrolledDropdown } from 'reactstrap';
import Ethereum from "../../Assets/Ethereum.png";
import Bitcoin from "../../Assets/Bitcoin.png";
import Litecoin from "../../Assets/Litecoin.png";
import Polkadot from "../../Assets/Polkadot.png";
import './styles.css';

interface IProps {

}

interface IState {

}

class DropdownMenus extends Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className="TNFT-Dropdown-Menus-Main-Container" >
                <UncontrolledDropdown>
                    <DropdownToggle nav caret className="TNFT-Dropdown-Menu-Toggle" >
                        Last 7 days
                    </DropdownToggle>
                </UncontrolledDropdown>
                <UncontrolledDropdown>
                    <DropdownToggle nav caret className="TNFT-Dropdown-Menu-Toggle">
                        All Categories
                    </DropdownToggle>
                </UncontrolledDropdown>
                <UncontrolledDropdown>
                    <DropdownToggle nav caret className="TNFT-Dropdown-Menu-Toggle">
                        All Chains
                    </DropdownToggle>
                    <DropdownMenu style={{ border: "2px solid #0F0E36" }} >
                        <DropdownItem className="TNFT-Dropdown-Menu-Item">
                            <img src={Ethereum} alt="" />
                            <div className="TNFT-Dropdown-Menu-Text">
                                Ethereum
                            </div>
                        </DropdownItem>
                        <DropdownItem className="TNFT-Dropdown-Menu-Item">
                            <img src={Polkadot} alt="" />
                            <div className="TNFT-Dropdown-Menu-Text">
                                Polkadot
                            </div>
                        </DropdownItem>
                        <DropdownItem className="TNFT-Dropdown-Menu-Item">
                            <img src={Litecoin} alt="" />
                            <div className="TNFT-Dropdown-Menu-Text">
                                Litecoin
                            </div>
                        </DropdownItem>
                        <DropdownItem className="TNFT-Dropdown-Menu-Item">
                            <img src={Bitcoin} alt="" />
                            <div className="TNFT-Dropdown-Menu-Text" >
                                Bitcoin
                            </div>
                        </DropdownItem>
                    </DropdownMenu>
                </UncontrolledDropdown>
            </div>
        );
    }
}

export default DropdownMenus;