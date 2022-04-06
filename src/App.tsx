import React from 'react';
import Header from "./Containers/Header";
import Footer from "./Containers/Footer";
import HomeScreen from "./Screens/Home";
import './App.css'
import GettingStarted from './Screens/GettingStarted';
import CreateCollection from './Screens/CreateCollection';

function App() {
  return (
    <div className='App' >
      <Header />
      {/* <HomeScreen /> */}
      {/* <GettingStarted /> */}
      <CreateCollection />
      {/* <Footer /> */}
    </div>
  );
}

export default App;
