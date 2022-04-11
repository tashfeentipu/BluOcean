import React, { Component } from "react";
import { Route, Routes } from "react-router-dom";
import CreateCollection from '../Screens/CreateCollection';
import CreateNewItem from '../Screens/CreateNewItem';
import GettingStarted from '../Screens/GettingStarted';
import HomeScreen from "../Screens/Home";
import SearchCollections from "../Screens/SearchCollections";
import StakingScreen from '../Screens/Staking';
import TopNFTs from '../Screens/TopNFTs';
import * as RouteNames from "./RouteNames";


interface IProps {

}

interface IState {

}

class RouteExport extends Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <Routes>
                <Route path={RouteNames.HomeScreen} element={<HomeScreen />} />
                <Route path={RouteNames.GettingStarted} element={<GettingStarted />} />
                <Route path={RouteNames.CreateCollection} element={<CreateCollection />} />
                <Route path={RouteNames.SearchCollections} element={<SearchCollections />} />
                <Route path={RouteNames.CreateNewItem} element={<CreateNewItem />} />
                <Route path={RouteNames.Staking} element={<StakingScreen />} />
                <Route path={RouteNames.TopNFTs} element={<TopNFTs />} />
            </Routes>
        );
    }
}

export default RouteExport;