import React, { Component } from "react";
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
            <div className="Offer-Settings-Main-Container" >
                Home Component
            </div>
        );
    }
}

export default OfferSettings;