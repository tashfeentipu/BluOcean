import React, { Component } from "react";
import './styles.css';

interface IProps {

}

interface IState {

}

class PaymentSettings extends Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className="Payment-Settings-Main-Container" >
                Home Component
            </div>
        );
    }
}

export default PaymentSettings;