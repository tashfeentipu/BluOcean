import React, { Component } from "react";
import { Container } from "reactstrap";
import Section1 from "./Section1";
import Section2 from "./Section2";
import Section3 from "./Section3";
import Section4 from "./Section4";

import './styles.css'

interface IProps {
}

interface IState {

}

class CreateNewItem extends Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <Container className="CreateNewItemMainContainer">
                <Section1 />
                <Section2 />
                {/* <Section3 /> */}
                <Section4 />
            </Container>
        );
    }
}

export default CreateNewItem;