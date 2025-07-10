export const VAULT_ADDRESS = "0xcD6a42782d230D7c13A74ddec5dD140e55499Df9";

export const VAULT_ABI = [
  "function deposit(uint256 _amount) external",
  "function withdraw() external",
  "function calculateReward(address) view returns (uint256)",
  "function lockPeriod() view returns (uint256)",
  "function apy() view returns (uint256)",
  "function deposits(address) view returns (uint256 amount, uint256 startTime, bool withdrawn)",
  "function blxToken() view returns (address)"
];
