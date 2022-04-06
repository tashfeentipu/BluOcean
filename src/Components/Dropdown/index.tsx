import React, { Component } from "react";
import './styles.css'

interface IProps {
    
}

interface IState {

}

class DropDown extends Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className="DropDownMainContainer" >
                Dummy Component
            </div>
        );
    }
}

export default DropDown;