import React, { Component } from "react";
import './styles.css'

interface IProps {
    avatar: string;
    title: string;
    description: string;
}

interface IState {

}

class FeaturedArtistsCard extends Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className="FACMainContainer">
                <img src={this.props.avatar} className="FACImage" />
                <div className="FAC-Description-Container" >
                    <div className="FACTitle">{this.props.title}</div>
                    <div className="FACDescription">{this.props.description}</div>
                </div>
            </div>
        );
    }
}

export default FeaturedArtistsCard;