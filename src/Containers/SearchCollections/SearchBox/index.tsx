import React, { Component } from "react";
import FormControl from "@mui/material/FormControl";
import InputAdornment from "@mui/material/InputAdornment";
import InputLabel from "@mui/material/InputLabel";
import OutlinedInput from "@mui/material/OutlinedInput";
import SearchIcon from "../../../Assets/SearchIcon.png";
import './styles.css'

interface IProps {
}

interface IState {

}

class SearchBox extends Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <FormControl sx={{ m: 1, width: '25ch' }} variant="filled" className="SearchBoxMainContainer" >
                <InputLabel htmlFor="filled-adornment-password">Search from 38,493 collections</InputLabel>
                <OutlinedInput
                    id="filled-adornment-password"
                    startAdornment={
                        <InputAdornment position="end">
                            <img src={SearchIcon} />
                        </InputAdornment>
                    }
                />
            </FormControl>
        );
    }
}

export default SearchBox;