import { useState } from "react";

function App() {
  const [connected, setConnected] = useState(false);
  const [account, setAccount] = useState("");
  const [status, setStatus] = useState("");
  const [inputAmount, setInputAmount] = useState("");
  const [balance, setBalance] = useState("100"); // Fake balance

  const connectWallet = () => {
    setConnected(true);
    setAccount("0x5B38Da6a701c568545dCfcB03FcB875f56beddC4");
  };

  const approve = () => {
    if (!inputAmount) {
      setStatus("❌ Enter amount to approve");
      return;
    }
    setStatus(`✅ Approved ${inputAmount} BLX`);
  };

  const deposit = () => {
    if (!inputAmount) {
      setStatus("❌ Enter amount to deposit");
      return;
    }
    setStatus(`✅ Deposited ${inputAmount} BLX`);
    setBalance((prev) => (parseFloat(prev) - parseFloat(inputAmount)).toFixed(2));
  };

  const withdraw = () => {
    const reward = 0.2; // Simulate reward
    setStatus(`✅ Withdrawn with 0.2 BLX reward`);
    setBalance((prev) => (parseFloat(prev) + reward).toFixed(2));
  };

  return (
    <div style={{ padding: "40px", fontFamily: "sans-serif" }}>
      <h1>💎 BLUME Vault DApp (Simulated)</h1>

      {!connected ? (
        <button onClick={connectWallet}>🔗 Connect Wallet</button>
      ) : (
        <>
          <p><strong>Wallet:</strong> {account}</p>
          <p><strong>BLX Balance:</strong> {balance}</p>

          <input
            type="number"
            placeholder="Amount (BLX)"
            value={inputAmount}
            onChange={(e) => setInputAmount(e.target.value)}
          />
          <br /><br />

          <button onClick={approve}>✅ Approve</button>{" "}
          <button onClick={deposit}>💸 Deposit</button>{" "}
          <button onClick={withdraw}>🔓 Withdraw</button>

          <p style={{ marginTop: "20px", color: "green" }}>{status}</p>
        </>
      )}
    </div>
  );
}

export default App;
