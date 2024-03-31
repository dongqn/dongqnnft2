npx hardhat run scripts/deployERC20.js --network optimism
update config.json: put token address ^^^from above^^^ as portAddr of optimism
npx hardhat run scripts/deployERC721.js --network base
update config.json: put token address ^^^from above^^^ as portAddr of base
npx hardhat run scripts/deploySpinWheelGame.js --network optimism

[PolyERC20 source code]
npx hardhat verify --network optimism 0x01d4a540743D717C311a86C5fE8Bff5a46AaBd9A "0xC3318ce027C560B559b09b1aA9cA4FEBDDF252F5" 
(OP_UC_MW_SIM in .env)
=> https://optimism-sepolia.blockscout.com/address/0x01d4a540743D717C311a86C5fE8Bff5a46AaBd9A#code

[PolyERC721 source code]
npx hardhat verify --network base 0x72702AF2745E189F14257764d6187675F2299d57 "0x5031fb609569b67608Ffb9e224754bb317f174cD"
(BASE_UC_MW_SIM in .env)
=> https://base-sepolia.blockscout.com/address/0x72702AF2745E189F14257764d6187675F2299d57#code

[Wheel game source code]
npx hardhat verify --network optimism 0x051955Fc3cFA2FD02BA117D178d72aAc398c8129
=> https://optimism-sepolia.blockscout.com/address/0x051955Fc3cFA2FD02BA117D178d72aAc398c8129

npx hardhat run scripts/mintPoints.js --network optimism