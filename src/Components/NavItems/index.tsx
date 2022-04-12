import React, { CSSProperties } from 'react';
import { Link } from "react-router-dom";
import { DropdownToggle, Nav, Navbar, NavItem, UncontrolledDropdown } from 'reactstrap';
import { CreateCollection, ExploreCollections, Staking, TopNFTs } from "../../Routes/RouteNames";
import "./styles.css";

interface IProps {
    style?: CSSProperties
}

const NavItems = (props: IProps) => {

    return (

        <Navbar light expand="md">
            <Nav navbar className='NavItemContainer' style={props.style} >
                <NavItem className="NavItem" >
                    <UncontrolledDropdown nav inNavbar >
                        <DropdownToggle nav>
                            <Link to={ExploreCollections} style={{ color: "#0F0E36", textDecoration: "none" }} >
                                Explore
                            </Link>
                        </DropdownToggle>                       
                    </UncontrolledDropdown>
                </NavItem>
                <NavItem className="NavItem" >
                    <UncontrolledDropdown nav inNavbar >
                        <DropdownToggle nav>
                            <Link to={Staking} style={{ color: "#0F0E36", textDecoration: "none" }} >
                                Staking
                            </Link>
                        </DropdownToggle>
                    </UncontrolledDropdown>
                </NavItem>
                <NavItem className="NavItem" >
                    <UncontrolledDropdown nav inNavbar >
                        <DropdownToggle nav >
                            <Link to={TopNFTs} style={{ color: "#0F0E36", textDecoration: "none" }} >
                                Stats
                            </Link>
                        </DropdownToggle>
                    </UncontrolledDropdown>
                </NavItem>
                <NavItem className="NavItem" >
                    <UncontrolledDropdown nav inNavbar >
                        <DropdownToggle nav>
                            <Link to={CreateCollection} style={{ color: "#DEAD2D", textDecoration: "none" }} >
                                Create
                            </Link>
                        </DropdownToggle>
                    </UncontrolledDropdown>
                </NavItem>
            </Nav>
        </Navbar >

    );
};

export default NavItems;
