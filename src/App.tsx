import React from 'react';
import { MetaMaskProvider } from "metamask-react";
import { BrowserRouter } from "react-router-dom";
import './App.css';
import Footer from "./Containers/Footer";
import Header from "./Containers/Header";
import RoutesImport from "./Routes";

function App() {
  return (
    <MetaMaskProvider>
      <div className='App' >
        <BrowserRouter>
          <Header />
          <RoutesImport />
          <Footer />
        </BrowserRouter>
      </div>
    </MetaMaskProvider> 
  );
}

export default App;
