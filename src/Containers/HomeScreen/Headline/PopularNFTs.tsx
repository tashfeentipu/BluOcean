import React, { Component } from "react";
import AvatarOwner from "../../../Assets/avatarOwner.png";
import Network from "../../../Assets/Network.png";
import Exclude from "../../../Assets/Exclude.png";
import { AiFillHeart } from "react-icons/ai";
import './styles.css'

interface IProps {
    name: string
    time: string
    bid: string
    avatar: string
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
            <div className="PopularNFTsMainContainer" >
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
                    <div style={{ display: "flex", flexDirection: "column" }} >
                        <span>
                            {this.props.time}
                        </span>
                        <span>
                            Remaining Time
                        </span>
                    </div>
                    <div style={{ display: "flex", flexDirection: "column" }}  >
                        <span>
                            <img src={Exclude} />
                            {this.props.bid}
                        </span>
                        <span>
                            Highest Bid
                        </span>
                    </div>
                </div>
            </div>
        );
    }
}

export default PopularNFTs;