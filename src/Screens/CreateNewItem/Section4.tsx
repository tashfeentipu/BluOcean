import React, { Component } from "react";
import StatsIcon from "../../Assets/StatsIcon.png";
import './styles.css'

interface IProps {
}

interface IState {

}

class Section4 extends Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className="CNI-C4-MainContainer" >
                <div className="CNI-C3-Image1Container"  >
                    <img src={StatsIcon} className="CNI-C3-Image1" />

                </div>
                <div className="CNI-C3-PropertiesContainer" >
                    <div className="CNI-C3-PropertiesHeadingContainer" >
                        <div className="CNI-C3-PropertiesHeadings" >
                            <div className="CNI-C3-PropertiesHeading" >
                                Stats
                            </div>
                            <div className="CNI-C3-PropertiesSubHeading">Numerical traits that just show as numbers</div>
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

export default Section4;