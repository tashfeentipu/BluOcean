import React, { useState } from 'react'
import { CSSProperties } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Collapse, DropdownItem, DropdownMenu, DropdownToggle, Nav, Navbar, NavbarBrand, NavbarToggler, NavItem, UncontrolledDropdown } from 'reactstrap';
import "./styles.css"

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
                            Explore
                        </DropdownToggle>
                        <DropdownMenu>
                            <DropdownItem>
                                Option 1
                            </DropdownItem>
                            <DropdownItem>
                                Option 2
                            </DropdownItem>
                            <DropdownItem>
                                Reset
                            </DropdownItem>
                        </DropdownMenu>
                    </UncontrolledDropdown>
                </NavItem>
                <NavItem className="NavItem" >
                    <UncontrolledDropdown nav inNavbar >
                        <DropdownToggle nav >
                            Explore
                        </DropdownToggle>
                        <DropdownMenu>
                            <DropdownItem>
                                Option 1
                            </DropdownItem>
                            <DropdownItem>
                                Option 2
                            </DropdownItem>
                            <DropdownItem>
                                Reset
                            </DropdownItem>
                        </DropdownMenu>
                    </UncontrolledDropdown>
                </NavItem>
                <NavItem className="NavItem" >
                    <UncontrolledDropdown nav inNavbar >
                        <DropdownToggle nav >
                            Explore
                        </DropdownToggle>
                        <DropdownMenu>
                            <DropdownItem>
                                Option 1
                            </DropdownItem>
                            <DropdownItem>
                                Option 2
                            </DropdownItem>
                            <DropdownItem>
                                Reset
                            </DropdownItem>
                        </DropdownMenu>
                    </UncontrolledDropdown>
                </NavItem>
                <NavItem className="NavItem" >
                    <UncontrolledDropdown nav inNavbar >
                        <DropdownToggle nav >
                            Explore
                        </DropdownToggle>
                        <DropdownMenu>
                            <DropdownItem>
                                Option 1
                            </DropdownItem>
                            <DropdownItem>
                                Option 2
                            </DropdownItem>
                            <DropdownItem>
                                Reset
                            </DropdownItem>
                        </DropdownMenu>
                    </UncontrolledDropdown>
                </NavItem>
            </Nav>
        </Navbar >
        // <div className='NavItemContainer' style={props.style}  >

        //     <div className="NavItem" >Explore</div>
        //     <div className="NavItem" >Resources</div>
        //     <div className="NavItem">Stats</div>
        //     <div className="NavItem NavItemActive">Rewards</div>
        // </div>
    );
};

export default NavItems;
