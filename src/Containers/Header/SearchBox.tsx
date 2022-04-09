import React, { Component } from "react";
import FormControl from "@mui/material/FormControl";
import InputAdornment from "@mui/material/InputAdornment";
import InputLabel from "@mui/material/InputLabel";
import OutlinedInput from "@mui/material/OutlinedInput";
import SearchIcon from "../../Assets/SearchIcon.png";
import './styles.css';

interface IProps {

}


interface IState {
    placeholder: string
    focus: boolean
    inputValue: string
}

class SearchBox extends Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = {
            placeholder: "Search any collection",
            focus: false,
            inputValue: "",
        };
    }

    render() {
        return (
            <div className="HeaderSearchBoxContainer" >
                <img src={SearchIcon} alt="" className="HeaderSearchBoxIcon" />
                {!this.state.focus && <div className="HeaderSearchBoxPlaceholder" >{this.state.placeholder}</div>}
                <input type="text" className="HeaderSearchBoxInput" onFocus={() => {
                    this.setState({ focus: true })
                }}
                    value={this.state.inputValue}
                    onChange={(e) => {
                        this.setState({ inputValue: e.target.value })
                    }}
                    onBlur={() => {
                        this.state.inputValue === "" && this.setState({ focus: false })
                    }} />
            </div>
        );
    }
}

export default SearchBox;