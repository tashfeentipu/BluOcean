import React, { Component, CSSProperties } from "react";
import AvatarOwner from "../../../Assets/AvatarOwner.png";
import Network from "../../../Assets/Network.png";
import Exclude from "../../../Assets/Exclude.png";
import { AiFillHeart } from "react-icons/ai";
import './styles.css'

interface IProps {
    name: string
    time: string
    bid: string
    avatar: string
    ContainerStyle?: CSSProperties
}

interface IState {

}

class PopularNFTs extends Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className="PopularNFTsMainContainer" style={{ ...this.props.ContainerStyle }}>
                <img src={this.props.avatar} />
                <div className="PopularNFTsNameContainer" >
                    <div className="PopularNFTsOwnerName" >{this.props.name}</div>
                    <div>
                        <img src={AvatarOwner} />
                        <AiFillHeart />
                        <img src={Network} />
                    </div>
                </div>
                <div className="PopularNFTsFooterContainer" >
                    <div style={{ display: "flex", flexDirection: "column" }} className="P-NFTs-Footer-Time-Container"  >
                        <span className="P-NFTs-Footer-Time"  >
                            {this.props.time}
                        </span>
                        <span className="P-NFTs-Footer-Time-Text" >
                            Remaining Time
                        </span>
                    </div>
                    <div style={{ display: "flex", flexDirection: "column" }} className="P-NFTs-Footer-Bid-Container"  >
                        <span className="P-NFTs-Footer-Bid"  >
                            <img src={Exclude} style={{ marginRight: "0.5em" }} />
                            {this.props.bid}
                        </span>
                        <span className="P-NFTs-Footer-Bid-Text"  >
                            Highest Bid
                        </span>
                    </div>
                </div>
            </div>
        );
    }
}

export default PopularNFTs;