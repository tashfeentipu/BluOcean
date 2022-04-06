import React, { Component } from "react";
import SearchBox from "../../Containers/SearchCollections/SearchBox";
import './styles.css'

interface IProps {
}

interface IState {

}

class SearchCollections extends Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className="SearchCollectionsMainContainer" >
                <div className="SearchCollectionsHeading">Search <b>Collections</b> </div>
                {/* <SearchBox /> */}
                <div className="SearchCollectionsContent">Try art, domains, planets, or anything you can think of!</div>
            </div>
        );
    }
}

export default SearchCollections;