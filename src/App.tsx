import React from 'react';
import Header from "./Containers/Header";
import Footer from "./Containers/Footer";
import HomeScreen from "./Screens/Home";
import './App.css'
import { MetaMaskProvider } from "metamask-react";
import GettingStarted from './Screens/GettingStarted';
import CreateCollection from './Screens/CreateCollection';
import TopNFTs from './Screens/TopNFTs';
import SearchCollections from "./Screens/SearchCollections";
import CreateNewItem from './Screens/CreateNewItem';
import StakingScreen from './Screens/Staking';

function App() {
  return (
    <MetaMaskProvider>
      <div className='App' >
        <Header />
        <HomeScreen />
        {/* <GettingStarted /> */}
        {/* <CreateCollection /> */}
        {/* <TopNFTs /> */}
        {/* <SearchCollections /> */}
        {/* <CreateNewItem /> */}
        {/* <StakingScreen /> */}
        <Footer />
      </div>
    </MetaMaskProvider>
  );
}

export default App;
