require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.0",
  networks: {
    goerli: {
      url: "https://eth-goerli.g.alchemy.com/v2/f5TYSP2JFBybOPGCqEtzghzuMXCESW2l", // this came from Alchemy
      accounts: [
        "d5db1a0364e84dc7ce3749e99d6d524624e763cd513278337e82495b3f5ac0ce",
      ],
    },
  },
};
