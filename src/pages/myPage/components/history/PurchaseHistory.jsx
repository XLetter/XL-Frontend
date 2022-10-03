import React from 'react';
import './PurchaseHistory.css';
import HistoryList from './HistoryList';

const PurchaseHistory = () => {
  return (
    <div className="PurchaseHistory">
      <h2>purchase history</h2>
      <HistoryList />
    </div>
  );
};

export default PurchaseHistory;
