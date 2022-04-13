import React, { Component } from "react";
import { Container } from "reactstrap";
import './styles.css';

interface IProps {

}

interface IState {

}

class OfferSettings extends Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <Container className="Offer-Settings-Main-Container" >
                Offer
            </Container>
        );
    }
}

export default OfferSettings;