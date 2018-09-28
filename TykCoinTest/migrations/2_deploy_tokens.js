var TykCointestCrowdsale = artifacts.require("./TykCointestCrowdsale");
var TykCoinTest = artifacts.require("./TykCoinTest.sol");

module.exports = function (deployer, network, accounts) {
    const rate = new web3.BigNumber(1000);
    const wallet = accounts[1];
    
    return deployer
        .then(() => {
            return deployer.deploy(TykCoinTest);
        })
        .then(() => {
            return deployer.deploy(
                TykCointestCrowdsale,
                rate,
                wallet,
                TykCoinTest.address
            );
        });
};
