import React, { CSSProperties } from 'react';
import { Link } from "react-router-dom";
import { DropdownToggle, Nav, Navbar, NavItem, UncontrolledDropdown } from 'reactstrap';
import { CreateCollection, SearchCollections, Staking } from "../../Routes/RouteNames";
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
                            <Link to={SearchCollections} style={{ color: "#0F0E36", textDecoration: "none" }} >
                                Explore
                            </Link>
                        </DropdownToggle>
                        {/* <DropdownMenu>
                            <DropdownItem>
                                Reset
                            </DropdownItem>
                        </DropdownMenu> */}
                    </UncontrolledDropdown>
                </NavItem>
                <NavItem className="NavItem" >
                    <UncontrolledDropdown nav inNavbar >
                        <DropdownToggle nav>
                            <Link to={Staking} style={{ color: "#0F0E36", textDecoration: "none" }} >
                                Staking
                            </Link>
                        </DropdownToggle>
                        {/* <DropdownMenu>
                            <DropdownItem>
                                Option 2
                            </DropdownItem>
                        </DropdownMenu> */}
                    </UncontrolledDropdown>
                </NavItem>
                <NavItem className="NavItem" >
                    <UncontrolledDropdown nav inNavbar >
                        <DropdownToggle nav >
                            <Link to={CreateCollection} style={{ color: "#0F0E36", textDecoration: "none" }} >
                                Stats
                            </Link>
                        </DropdownToggle>
                        {/* <DropdownMenu>
                            <DropdownItem>
                                Option 1
                            </DropdownItem>
                        </DropdownMenu> */}
                    </UncontrolledDropdown>
                </NavItem>
                <NavItem className="NavItem" >
                    <UncontrolledDropdown nav inNavbar >
                        <DropdownToggle nav>
                            <Link to={CreateCollection} style={{ color: "#DEAD2D", textDecoration: "none" }} >
                                Create
                            </Link>
                        </DropdownToggle>
                        {/* <DropdownMenu>
                            <DropdownItem>
                                Option 1
                            </DropdownItem>
                            <DropdownItem>
                                Option 2
                            </DropdownItem>
                        </DropdownMenu> */}
                    </UncontrolledDropdown>
                </NavItem>
            </Nav>
        </Navbar >

    );
};

export default NavItems;
