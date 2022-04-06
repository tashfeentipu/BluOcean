import React, { Component } from "react";
import './styles.css'

interface IProps {
    title: string
}

interface IState {

}

class ListItem extends Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className="ListItemMainContainer" >
                {this.props.title}
            </div>
        );
    }
}

export default ListItem;