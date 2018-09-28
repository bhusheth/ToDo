pragma solidity ^0.4.24;

import 'openzeppelin-solidity/contracts/token/ERC20/ERC20.sol';
import 'openzeppelin-solidity/contracts/token/ERC20/StandardToken.sol';
import 'openzeppelin-solidity/contracts/ownership/Ownable.sol';

/**
 * @title SimpleToken
 * @dev Very simple ERC20 Token example, where all tokens are pre-assigned to the creator.
 * Note they can later distribute these tokens as they wish using `transfer` and other
 * `ERC20` functions.
 */

contract TykCoinTest is StandardToken, Ownable {
  string public  name = "Tyk Coin";
  string public  symbol = "TYK";
  uint8 public  decimals = 18;

  constructor() public {
      totalSupply_ = 10000000000;
      owner = msg.sender;
      balances[msg.sender] = totalSupply_;

      emit Transfer(0x0, msg.sender, totalSupply_);
  }

}
