const hre = require('hardhat');
const { getIbcApp } = require('./private/_vibc-helpers.js');

async function main() {
    const accounts = await hre.ethers.getSigners();
 
    const networkName = hre.network.name;

    const ibcApp = await getIbcApp(networkName);

    contractOwner = "0xBF76e1F6457c04D6bBe709Eb1617246757B7974b";
    const bal1 = await ibcApp.connect(accounts[0]).balanceOf(contractOwner);
    console.log("contractOwner has ", bal1, "points");
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});