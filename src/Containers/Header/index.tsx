import React, { Component } from "react";
import { Navbar } from "reactstrap";
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
               Navbar
            </Navbar>
        );
    }
}

export default Header;