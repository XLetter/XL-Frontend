const userAddr = window.klaytn.selectedAddress;
const contractAddr = '0x1D34D008d88F6457C6C6f874B11197FBE8f706E3';

const XLTAbi = require("./XLTAbi.json");
// const Kaikascaver = require('../pages/myPage/kaikas/Caver');
const Caver = require('caver-js');
const caver = new Caver('https://public-node-api.klaytnapi.com/v1/baobab');
const XltContract = new caver.contract(XLTAbi, '0x1D34D008d88F6457C6C6f874B11197FBE8f706E3', { gasPrice: '25000000000' });


const getKlayBalance = () => {
    return caver.rpc.klay.getBalance(userAddr)
    .then((res)=>{
        let balance = caver.utils.hexToNumberString(res)
        return caver.utils.fromPeb(balance);
    })
}

const getXLTBalance = () => {
    return XltContract.call('balanceOf', userAddr)
    .then((balance)=>{
        return caver.utils.fromPeb(balance, "KLAY")
    })
}

const swapToXLT = async (xlt) => {
    // TODO: 가스 최적화하기
    console.log("최적화");
    caver.rpc.klay.estimateGas({ 
        to: contractAddr,
        input: buyXltFuncAbi
    })
    .then(console.log)
    .catch(console.log);

    const buyXltFuncAbi = caver.klay.abi.encodeFunctionCall({
        "inputs": [],
        "name": "buyXlt",
        "outputs": [],
        "stateMutability": "payable",
        "type": "function",
    });

    return caver.rpc.klay.sendTransaction({
        from: window.klaytn.selectedAddress,
        to: contractAddr,
        input: buyXltFuncAbi,
        gas: 8000000,
        value: caver.utils.toPeb(xlt, 'KLAY'),
    })
    .once('transactionHash', transactionHash => {
        console.log('txHash', transactionHash)
    })
    .once('receipt', receipt => {
        console.log('receipt', receipt)
    })
    .once('error', error => {
        console.log('error', error)
    })
}

module.exports = {
    getKlayBalance: getKlayBalance,
    getXLTBalance: getXLTBalance,
    swapToXLT: swapToXLT
}