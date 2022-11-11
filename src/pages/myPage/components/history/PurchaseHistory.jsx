import React from 'react';
import './PurchaseHistory.css';
import HistoryList from './HistoryList';

const PurchaseHistory = () => {
  return (
    <div className="PurchaseHistory">
      <div className='purchaseHistory_header' style={{width: 1030}}>
        purchase history
      </div>
      
      <div className='historyList_wrapper'>
        <HistoryList />
      </div>
      
    </div>
  );
};

export default PurchaseHistory;
