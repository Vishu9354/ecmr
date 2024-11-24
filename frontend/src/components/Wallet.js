import React, { useState, useEffect } from 'react';
function Wallet({ customerId }) {
  const [balance, setBalance] = useState(0);
  useEffect(() => {
    fetch(`/api/wallet/${customerId}`)
      .then(res => res.json())
      .then(data => setBalance(data.balance))
      .catch(err => console.error(err));
  }, [customerId]);
  return (
    <div className="wallet">
      <h2>Wallet Balance</h2>
      <p>${balance.toFixed(2)}</p>
    </div>
  );
}
export default Wallet;