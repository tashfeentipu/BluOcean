import React from 'react'
import { CSSProperties } from 'react';
import "./styles.css"

interface IProps {
    style?: CSSProperties
}

const NavItems = (props: IProps) => {
    return (
        <div className='NavItemContainer' style={props.style}  >
            <div className="NavItem" >Explore</div>
            <div className="NavItem" >Resources</div>
            <div className="NavItem">Stats</div>
            <div className="NavItem NavItemActive">Rewards</div>
        </div>);
};

export default NavItems;
