import React, { Component } from "react";
import SearchIcon from "../../Assets/SearchIcon.png";
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
            <div>
                <img src={SearchIcon} />
                <input placeholder="Search Any Collection" className="SearchBox" />
            </div>
        );
    }
}

export default SearchBox;