const ethers = require('ethers');
// const BigNumber = require('bignumber.js');
const Caver = require('caver-js');
const caver = new Caver('https://public-node-api.klaytnapi.com/v1/baobab');
const XLTAbi = require("./XLTAbi.json");

const provider = new ethers.providers.JsonRpcProvider('https://public-node-api.klaytnapi.com/v1/baobab');
const wallet = new ethers.Wallet(privateKey, provider);
let XLTContract = new ethers.Contract("0xe6eF0Ea5686341e2Dc03dD1EAECA6Efe74F380C7", XLTAbi, wallet);

// TODO: 인자로 넘겨 받아야함 + wallet도
const klayAmount = 100;

const getKlayBalance = () => {
    return provider.getBalance(wallet.address)
    .then((balance)=>{
        let klayBalance = parseInt(balance.toHexString());
        return caver.utils.fromPeb(klayBalance, "KLAY");
    })
}

const getXLTBalance = () => {
    return XLTContract.balanceOf(wallet.address)
    .then((balance)=>{
        let XLTBalance = parseInt(balance.toHexString());
        return caver.utils.fromPeb(XLTBalance, "KLAY");
    })
    .catch(console.log);
}

// deprecated
const approve = () => {
    return XLTContract.approve(wallet.address, klayAmount, {gasLimit: ethers.BigNumber.from(30000)})
    .then((receipt)=>{
        return receipt;
    })
    .catch(console.log);
};

// 왜인지 UNPREDICTABLE_GAS_LIMIT
const getEstimateGas = () => {
    return XLTContract.estimateGas.buyXlt()
    .then(console.log)
}

const swapToXLT = () => {
    return XLTContract.buyXlt({gasPrice: ethers.BigNumber.from(100000), gasLimit: ethers.BigNumber.from(100000), value: ethers.BigNumber.from(klayAmount)})
    .then((res)=>{
        console.log("hihi");
        console.log(res);
    })
    .catch(console.log);
}

module.exports = {
    getKlayBalance: getKlayBalance,
    getXLTBalance: getXLTBalance,
    swapToXLT: swapToXLT
}