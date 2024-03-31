const hre = require('hardhat');
const { getIbcApp } = require('./private/_vibc-helpers.js');

async function main() {
    const accounts = await hre.ethers.getSigners();
 
    const networkName = hre.network.name;

    const ibcApp = await getIbcApp(networkName);

    contractOwner = "0xBF76e1F6457c04D6bBe709Eb1617246757B7974b";
    //SpinWheelGame = "0x051955Fc3cFA2FD02BA117D178d72aAc398c8129";
    await ibcApp.connect(accounts[0]).mint(contractOwner, 5000);
    //await ibcApp.connect(accounts[0]).mint(SpinWheelGame, 1000000);
    const bal1 = await ibcApp.connect(accounts[0]).balanceOf(contractOwner);
    //const bal2 = await ibcApp.connect(accounts[0]).balanceOf(SpinWheelGame);
    console.log("contractOwner has ", bal1, "points");
    //console.log("SpinWheelGame has ", bal2, "points");
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});