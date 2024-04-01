require('dotenv').config();
const alchemyKeyOP = process.env.ALCHEMY_KEY_WS_OP;
const alchemyKeyBASE = process.env.ALCHEMY_KEY_WS_BASE;
const { createAlchemyWeb3 } = require("@alch/alchemy-web3");
const { getConfigPath } = require('../../scripts/private/_helpers.js');
const web3OP = createAlchemyWeb3(alchemyKeyOP);
const web3BASE = createAlchemyWeb3(alchemyKeyBASE);
const config = require(getConfigPath());

const contractABI_PTS = require('../contractPTS-abi.json')

const contractAddress_PTS = config["sendUniversalPacket"]["optimism"]["portAddr"];

const contractABI_NFT = require('../contractNFT-abi.json')
const contractAddress_NFT = config["sendUniversalPacket"]["base"]["portAddr"];

const contractABI_SWG = require('../contractSWG-abi.json')
const contractAddress_SWG = config["SpinWheelGameAddr"];

export const PTSContract = new web3OP.eth.Contract(
    contractABI_PTS,
    contractAddress_PTS
);

export const NFTContract = new web3BASE.eth.Contract(
    contractABI_NFT,
    contractAddress_NFT
);

export const SWGContract = new web3OP.eth.Contract(
    contractABI_SWG,
    contractAddress_SWG
);

export const loadPTS = async (addr) => { 
    const bal = await PTSContract.events.balanceOf(addr);
    return bal;  
};

export const loadNFT = async (addr) => { 
    const balance = await NFTContract.methods.balanceOf(addr).call();
    const tokenIds = [];
    for (let i = 0; i < balance; i++) {
        const tokenId = await NFTContract.methods.tokenOfOwnerByIndex(addr, i).call();
        tokenIds.push(tokenId);
    }
    return tokenIds;
};

export const spinTheWheel = async () => {
}

export const purchaseNFT = async (typeOfNFT) => {
    const destPortAddr = "";
    const channelId = "";
    const timeoutSeconds = 36000;
    await NFTContract.events.crossChainMint(destPortAddr, channelId, timeoutSeconds, typeOfNFT);
}

export const burnNFT = async (tokenId) => {
    const destPortAddr = "";
    const channelId = "";
    const timeoutSeconds = 36000;
    await NFTContract.events.crossChainBurn(destPortAddr, channelId, timeoutSeconds, tokenId);
}

export const connectWallet = async () => {
    if (window.ethereum) {
      try {
        const addressArray = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        const obj = {
          status: "👆🏽 Write a message in the text-field above.",
          address: addressArray[0],
        };
        return obj;
      } catch (err) {
        return {
          address: "",
          status: "😥 " + err.message,
        };
      }
    } else {
      return {
        address: "",
        status: (
          <span>
            <p>
              {" "}
              🦊{" "}
              <a target="_blank" href={`https://metamask.io/download.html`}>
                You must install Metamask, a virtual Ethereum wallet, in your
                browser.
              </a>
            </p>
          </span>
        ),
      };
    }
  };
  
export const getCurrentWalletConnected = async () => {
    if (window.ethereum) {
      try {
        const addressArray = await window.ethereum.request({
          method: "eth_accounts",
        });
        if (addressArray.length > 0) {
          return {
            address: addressArray[0],
            status: "👆🏽 Write a message in the text-field above.",
          };
        } else {
          return {
            address: "",
            status: "🦊 Connect to Metamask using the top right button.",
          };
        }
      } catch (err) {
        return {
          address: "",
          status: "😥 " + err.message,
        };
      }
    } else {
      return {
        address: "",
        status: (
          <span>
            <p>
              {" "}
              🦊{" "}
              <a target="_blank" href={`https://metamask.io/download.html`}>
                You must install Metamask, a virtual Ethereum wallet, in your
                browser.
              </a>
            </p>
          </span>
        ),
      };
    }
  };

