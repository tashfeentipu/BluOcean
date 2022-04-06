import React, { Component } from "react";
import ListItem from "./ListItem";
import './styles.css'

interface IProps {
}

interface IState {

}

class ListItems extends Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className="ListItemsMainContainer" >
                <ListItem title={"Create your collection"} />
                <ListItem title={"List them for sale"} />
                <ListItem title={"Add your NFTs"} />
                <ListItem title={"Create your collection"} />
                <ListItem title={"Set up your wallet"} />
                <ListItem title={"Add your NFTs"} />
            </div>
        );
    }
}

export default ListItems;