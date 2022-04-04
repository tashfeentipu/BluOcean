import React from 'react';
import Header from "./Containers/Header";
import Footer from "./Containers/Footer";
import HomeScreen from "./Screens/Home";
import './App.css'

function App() {
  return (
    <div className='App' >
      <Header />
      <HomeScreen />
      {/* <Footer /> */}
    </div>
  );
}

export default App;
