import React, { Component } from "react";
import { Col } from "reactstrap";
import './styles.css'

interface IProps {
    name: string
    iconName: string
}

interface IState {

}

class BBCCard extends Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <Col lg={3} className="BBCCardMainContainer" >
                <div className="BBCCardName">{this.props.name}</div>
                <div>
                    <img src={this.props.iconName} className="BBCCardImage" />
                </div>
            </Col>
        );
    }
}

export default BBCCard;