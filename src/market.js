import React from "react";
import { useEffect, useState } from "react";
import {
  loadPTS,
  loadNFT,
  spinTheWheel,
  connectWallet,
  getCurrentWalletConnected,
} from "./util/interact.js";


const Market = () => {
  //state variables
  const [walletAddress, setWallet] = useState("");
  const [status, setStatus] = useState("");
  const [points, setPoints] = useState(0); 
  const [nfts, setNFTs] = useState([]);

  function addSmartContractListener() { //TODO: implement
    
  }

  function addWalletListener() { //TODO: implement
    
  }

  const connectWalletPressed = async () => { //TODO: implement
    
  };

  const onUpdatePressed = async () => { //TODO: implement
    
  };

  //the UI of our component
  return (<div></div>);
};

export default Market;