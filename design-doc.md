# 📄 Design & Implementation – BLUME Vault

This document justifies key design choices and outlines the architecture behind the BLUME Vault DApp.

---

## 🎯 Purpose of the DApp

BLUME Vault allows users to:
- Stake BLX tokens
- Lock them for a fixed time (lockPeriod)
- Earn APY-based rewards
- Withdraw after unlock with interest

---

## 🔧 Smart Contract Design

### 🔹 `BLXToken.sol`
- Based on OpenZeppelin’s ERC-20 standard
- Includes `mint()` function restricted to `onlyOwner`
- Compatible with Ethers.js and MetaMask

### 🔹 `Vault.sol`
- Holds user deposits of BLX tokens
- Enforces lock period using `block.timestamp`
- Calculates interest via a fixed APY (10%)
- Tracks deposits using a mapping per user
- Prevents double withdrawal

### 🔐 Access Control
- Only owner can:
  - Mint tokens
  - Set lock period
  - Change APY

---

## 🖥️ Frontend Design (React)

### Technologies Used:
- React.js (via `create-react-app`)
- Ethers.js (simulated)
- Local React state for fake wallet + balance

### Why Simulated UI?
- Simplifies demo experience without needing testnet ETH
- Works independently of MetaMask
- Enables seamless walkthrough for submissions or interviews

---

## ⚖️ Design Trade-Offs

| Decision | Why |
|---------|-----|
| Remix VM instead of Sepolia | Faster testing, no faucet delays |
| Simulated frontend | No risk of RPC issues or failed wallet connects |
| Simple UI | Focused on core logic + clarity |
| Hardcoded APY | Easier to audit, deterministic returns |

---

## 💡 Future Enhancements

- Connect to Sepolia + MetaMask
- Add real-time countdown for lock period
- Show dynamic APY options
- Add unit tests using Hardhat
- Frontend deployment to Vercel

---

## 🙌 Author

**Likith Bharadwaj**  
BLUME Vault – Architecture & Implementation Notes
