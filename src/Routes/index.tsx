import React, { Component } from "react";
import { Route, Routes } from "react-router-dom";
import CreateCollection from '../Screens/CreateCollection';
import CreateNewItem from '../Screens/CreateNewItem';
import ExploreCollections from "../Screens/ExploreCollections";
import GettingStarted from '../Screens/GettingStarted';
import HomeScreen from "../Screens/Home";
import SearchCollections from "../Screens/SearchCollections";
import Settings from "../Screens/Settings";
import NotificationsSettings from "../Containers/Settings/Notifications";
import OfferSettings from "../Containers//Settings/Offer";
import PaymentSettings from "../Containers/Settings/Payment";
import ProfileSettings from "../Containers/Settings/Profile";
import StakingScreen from '../Screens/Staking';
import TopNFTs from '../Screens/TopNFTs';
import * as RouteNames from "./RouteNames";
import ViewNFT from "../Screens/ViewNFT";

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
                <Route path={RouteNames.ExploreCollections} element={<ExploreCollections />} />
                <Route path={RouteNames.ViewNFT} element={<ViewNFT />} />
                <Route path={RouteNames.TopNFTs} element={<TopNFTs />} />
                <Route path={`${RouteNames.Settings}*`} element={<Settings />}>
                    <Route path={RouteNames.Profile} element={<ProfileSettings />} />
                    <Route path={RouteNames.Offer} element={<OfferSettings />} />
                    <Route path={RouteNames.Payment} element={<PaymentSettings />} />
                    <Route path={RouteNames.Notifications} element={<NotificationsSettings />} />
                </Route>
            </Routes>
        );
    }
}

export default RouteExport;