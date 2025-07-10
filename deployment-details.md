Create a file in your repo root:

bash
Copy code
blume-frontend/deployment-details.md


# 🚀 Deployment Details – BLUME Vault

This project was deployed and tested using the **Remix VM (Prague)** environment for quick simulation without relying on live testnets.

---

## 🔧 Deployment Tool

- **Remix IDE (remix.ethereum.org)**
- **Solidity Compiler Version:** 0.8.21
- **Environment Used:** Remix VM (Prague)

---

## 🧠 Contracts

### 1. `BLXToken.sol`
- Type: ERC-20 Token
- Minted initial supply to test account

### 2. `Vault.sol`
- Used `BLXToken` address during deployment
- APY: 10%
- Lock period set: 60 seconds (for testing)

---

## 🧪 Deployed Contract Addresses (Remix VM)

Note: These addresses are temporary and exist only during the Remix session.

- **BLXToken Address:** `0xd9145CCE52D386f254917e481eB44e9943F39138`
- **Vault Address:** `0xf8e81D47203A594245E36C48e151709F0C19fBe8`

> ⚠️ These contracts are not deployed on a public testnet like Sepolia.

---

## 🔄 Key Function Calls

### Vault:
- `setLockPeriod(60)`
- `deposit(100 BLX)`
- `withdraw()` after lock time

### BLXToken:
- `approve(VaultAddress, amount)`
- `mint(userAddress, amount)`

---

## 💬 Notes

For future use, these contracts can be deployed to a public testnet (like Sepolia) or local test network (e.g., Hardhat). MetaMask integration is possible by switching away from Remix VM.

---

## 🙌 Author

**Likith Bharadwaj**  
BLUME Vault – Contract Deployment Report
