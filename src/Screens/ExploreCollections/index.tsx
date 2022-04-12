import React, { Component } from "react";
import ExplorationCard from "../../Containers/ExploreCollections/ExplorationCard";
import './styles.css';

interface IProps {

}

interface IState {

}

class ExploreCollections extends Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className="Explore-Collections-Main-Container" >
                <div className="Explore-Collections-Main-Heading" >
                    Explore <b>Collections</b>
                </div>
                <div className="Explore-Collections-Sub-Heading" >Explore NFT collections created by users on BluOcean.xyz!</div>
                <ExplorationCard />
            </div>
        );
    }
}

export default ExploreCollections;