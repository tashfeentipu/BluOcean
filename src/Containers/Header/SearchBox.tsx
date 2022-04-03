import React, { Component } from "react";
import './styles.css'

interface IProps {

}

class SearchBox extends Component {
    constructor(props: IProps) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <input placeholder="Search Any Collection" className="SearchBox" />
        );
    }
}

export default SearchBox;