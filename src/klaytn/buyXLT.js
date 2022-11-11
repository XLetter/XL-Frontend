// const userAddr = window?.klaytn?.selectedAddress;
const contractAddr = '0x1D34D008d88F6457C6C6f874B11197FBE8f706E3';

const XLTAbi = require('./XLTAbi.json');
// const caver = require('../pages/myPage/kaikas/Caver');
const Caver = require('caver-js');
const caver = new Caver('https://klaytn-baobab-rpc.allthatnode.com:8551');
const XltContract = new caver.contract(XLTAbi, '0x1D34D008d88F6457C6C6f874B11197FBE8f706E3', {
  gasPrice: '25000000000',
});

const getKlayBalance = async () => {
  const userAddr = window?.klaytn?.selectedAddress;
  console.log('klay a', userAddr);
  return caver.rpc.klay.getBalance(userAddr).then((res) => {
    let balance = caver.utils.hexToNumberString(res);
    return caver.utils.fromPeb(balance);
  });
};

const getXLTBalance = (account) => {
  if (!account) {
    account = window?.klaytn?.selectedAddress;
  }
  return XltContract.call('balanceOf', account).then((balance) => {
    return caver.utils.fromPeb(balance, 'KLAY');
  });
};

const swapToXLT = async (xlt) => {
  const caver = new Caver(window.klaytn);

  const buyXltFuncAbi = caver.klay.abi.encodeFunctionCall({
    inputs: [],
    name: 'buyXlt',
    outputs: [],
    stateMutability: 'payable',
    type: 'function',
  });

  // TODO: 가스 최적화하기 -> RPC 에러 왜남?
  console.log('최적화');
  // caver.rpc.klay.estimateGas({
  // caver.rpc.klay.estimateGas({
  // caver.rpc.klay.estimateGas({
  //     to: contractAddr,
  //     input: buyXltFuncAbi
  // })
  // .then(console.log)
  // .catch(console.log);
  const userAddr = window?.klaytn?.selectedAddress;
  return caver.rpc.klay
    .sendTransaction({
      from: userAddr,
      to: contractAddr,
      input: buyXltFuncAbi,
      gas: 8000000,
      value: caver.utils.toPeb(xlt, 'KLAY'),
    })
    .once('transactionHash', (transactionHash) => {
      console.log('txHash', transactionHash);
    })
    .once('receipt', (receipt) => {
      console.log('receipt', receipt);
    })
    .once('error', (error) => {
      console.log('error', error);
    });
};

module.exports = {
  getKlayBalance: getKlayBalance,
  getXLTBalance: getXLTBalance,
  swapToXLT: swapToXLT,
};
