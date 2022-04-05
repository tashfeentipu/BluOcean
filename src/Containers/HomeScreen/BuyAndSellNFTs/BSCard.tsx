import React, { Component } from "react";
import { Col } from "reactstrap";
import './styles.css'

interface IProps {
    name: string
    content: string
}

interface IState {

}

class BSCard extends Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <Col lg={3} className="BSCardMainContainer" >
                <div className="BSCTitle">{this.props.name} </div>
                <div className="BSCContent">{this.props.content} </div>
            </Col>
        );
    }
}

export default BSCard;