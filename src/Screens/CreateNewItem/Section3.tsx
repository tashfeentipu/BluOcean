import React, { Component } from "react";
import './styles.css'
import Menu from "../../Assets/Menu.png";


interface IProps {
}

interface IState {

}

class Section3 extends Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className="CNIContainer3" >
                <div className="CNI-C3-Image1Container"  >
                    <img src={Menu} className="CNI-C3-Image1" />

                </div>
                <div className="CNI-C3-PropertiesContainer" >
                    <div className="CNI-C3-PropertiesHeadingContainer" >
                        <div className="CNI-C3-PropertiesHeadings" >
                            <div className="CNI-C3-PropertiesHeading" >
                                Properties
                            </div>
                            <div className="CNI-C3-PropertiesSubHeading" >Textual traits that show up as rectangles</div>
                        </div>
                        <div className="CNI-C3-PropertiesAddButton">
                            +
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Section3;