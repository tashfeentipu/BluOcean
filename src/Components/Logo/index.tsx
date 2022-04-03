import React from 'react'
import LogoImage from "../../Assets/Logo.png";
import "./styles.css";

interface IProps {

}

const Logo = (props: IProps) => {
    return (

        <div className="LogoContainer" >
            <img src={LogoImage} />
            <div className="LogoText" >Bluocean</div>
        </div>
    )
};

export default Logo;
