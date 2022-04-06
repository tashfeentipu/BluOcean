import React, { Component } from "react";
import { Container } from "reactstrap";
import './styles.css'
import TopNFTsTable from "../../Containers/TopNFTs";

interface IProps {
}

interface IState {

}

class TopNFTs extends Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <Container className="TopNFTsMainContainer" >
                <div className="TopNFTsMainHeading">
                    Top <b>NFTs</b>
                </div>
                <div className="TopNFTsSubHeading" >
                    Try art, domains, planets, or anything you can think of!
                </div>
                <TopNFTsTable />
            </Container>
        );
    }
}

export default TopNFTs;