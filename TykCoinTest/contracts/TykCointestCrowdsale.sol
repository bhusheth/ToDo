pragma solidity ^0.4.24;

import './TykCoinTest.sol';
import 'openzeppelin-solidity/contracts/crowdsale/emission/MintedCrowdsale.sol';
import 'openzeppelin-solidity/contracts/crowdsale/validation/TimedCrowdsale.sol';
import 'openzeppelin-solidity/contracts/crowdsale/Crowdsale.sol';
import 'openzeppelin-solidity/contracts/token/ERC20/ERC20.sol';

contract TykCointestCrowdsale is Crowdsale {
    constructor(
        uint256 _rate,
        address _wallet,
        ERC20 _token
    )
    public
    Crowdsale(_rate, _wallet, _token)
    {

    } 
}