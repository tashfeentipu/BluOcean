import React, { Component } from "react";
import { Col, DropdownItem, DropdownMenu, DropdownToggle, Row, UncontrolledDropdown } from 'reactstrap';
import './styles.css';


interface IProps {

}

interface IState {

}

class ExploreOptions extends Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <Row  >
                <Col className="Explore-Options-Main-Container" >
                    <button className="Explore-Options-Menu-Item">Trending</button>
                    <button className="Explore-Options-Menu-Item">Top</button>
                    <button className="Explore-Options-Menu-Item">Art</button>
                    <button className="Explore-Options-Menu-Item">Music</button>
                    <button className="Explore-Options-Menu-Item">Sports</button>
                    <button className="Explore-Options-Menu-Item">Trading Cards</button>
                    <button className="Explore-Options-Menu-Item">Virtual Worlds</button>
                    <button className="Explore-Options-Menu-Item">Uitlity</button>
                    <button className="Explore-Options-Menu-Item">Collectibles</button>
                    <button className="Explore-Options-Menu-Item">Domain Names</button>
                    <UncontrolledDropdown>
                        <DropdownToggle className="Explore-Options-Menu-Item" nav>
                            ...
                        </DropdownToggle>
                        <DropdownMenu className="Explore-Options-Dropdown-Menu" >
                            <DropdownItem className="Explore-Options-Menu-Item" >
                                Gadgets
                            </DropdownItem>
                            <DropdownItem className="Explore-Options-Menu-Item" >
                                Virtual Reality
                            </DropdownItem>
                            <DropdownItem className="Explore-Options-Menu-Item" >
                                Artificial Intelligence
                            </DropdownItem>
                            <DropdownItem className="Explore-Options-Menu-Item" >
                                Mobile
                            </DropdownItem>
                        </DropdownMenu>
                    </UncontrolledDropdown>
                </Col>
            </Row>
        );
    }
}

export default ExploreOptions;