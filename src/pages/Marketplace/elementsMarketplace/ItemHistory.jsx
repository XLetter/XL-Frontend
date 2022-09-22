import React from 'react';

const History = () => {
  return (
    <div>
      <table>
        <tr>
          <th id="event">이벤트</th>
          <th id="price">가격</th>
          <th id="from">From</th>
          <th id="to">To</th>
          <th id="transactionDate">거래일자</th>
        </tr>
        <tr>
          <th>가격제안</th>
          <th>000XLT</th>
          <th>123456</th>
          <th>123456</th>
          <th>2022.00.00</th>
        </tr>
        <tr>
          <th>리스트</th>
          <th>000XLT</th>
          <th>123456</th>
          <th>123456</th>
          <th>2022.00.00</th>
        </tr>
        <tr>
          <th>발행</th>
          <th>000XLT</th>
          <th>123456</th>
          <th>123456</th>
          <th>2022.00.00</th>
        </tr>
      </table>
    </div>
  );
};

export default History;