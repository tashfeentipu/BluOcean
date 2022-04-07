import React, { Component } from "react";
import ImportMedia from "../../Assets/ImportMedia.png";
import './styles.css'

interface IProps {
}

interface IState {

}

class Section1 extends Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <>

                <div className="CNIHeadingContainer">
                    <div className="CNIMiniHeading">Home / Create New Item</div>
                    <div className="CNIMainHeading" >Create New <b>Item</b></div>
                    <div className="CNISubHeading">Fill in the form below to list a new item on BluOcean</div>
                </div>
                <div className="CNIContainer1" >
                    <div className="CNI-C1-Heading" >
                        Image, Video, Audio, or 3D Model *
                    </div>
                    <div className="CNI-C1-SubHeading">File types supported: JPG, PNG, GIF, SVG, MP4, WEBM, MP3, WAV, OGG, GLB, GLTF. Max size: 100 MB</div>
                    <div className="CNI-C1-Button" >
                        <img src={ImportMedia} style={{ width: "29px", height: "26px" }} />
                    </div>
                </div>
            </>
        );
    }
}

export default Section1;