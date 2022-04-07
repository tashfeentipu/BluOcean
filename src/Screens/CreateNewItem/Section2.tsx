import React, { Component } from "react";
import './styles.css'

interface IProps {
}

interface IState {

}

class Section2 extends Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className="CNIContainer2" >
                <div className="CNI-C2-Heading1" >
                    Name *
                </div>
                <input placeholder="Item Name" className="CNI-C2-Input1" />
                <div className="CNI-C2-Heading2" >
                    External Link *
                </div>
                <div className="CNI-C2-SubHeading2" >
                    OpenSea will include a link to this URL on this item's detail page, so that users can click to learn more about it. You are welcome to link to your own webpage with more details.
                </div>
                <input placeholder="https://yoursite.com/item/123" className="CNI-C2-Input2" />
                <div className="CNI-C2-Heading3" >
                    Description *
                </div>
                <div className="CNI-C2-SubHeading3" >
                    The description will be included on the item's detail page underneath its image. Markdown syntax is supported.
                </div>
                <input placeholder="Provide a detailed description of your item." className="CNI-C2-Input3" />
                <div className="CNI-C2-Heading4" >
                    Collection
                </div>
                <div className="CNI-C2-SubHeading4" >
                    This is the collection where your item will appear.
                </div>
                <input placeholder="Provide a detailed description of your item." className="CNI-C2-Input4" />
            </div>
        );
    }
}

export default Section2;