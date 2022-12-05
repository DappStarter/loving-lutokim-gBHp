require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hockey knife olympic system index renew still mistake hidden enter equal gesture'; 
let testAccounts = [
"0x86ea364182317d60d672877a03c01f9d4f0276dd381fb9a215862d8a09b42baf",
"0x4d9f66e52cbc77330f2129f569a37061a22ae8e23d0eb5f49862165a3f1d8c17",
"0xfc32a2e1dead677179c61edc8108a1898b365698519e9e5180bb88d94761bb8c",
"0x18c7e590c00d33bf8700ff8b635abcd06f5308f00ba56d599b74c754d498a177",
"0x445a5378bdf9fe443b444499894a1678078819eefd8148e1f1b368d3e0882865",
"0x4502be8b6c6c5340c9ee13cf99454917800bc671c747e4602381f82146b3c5c6",
"0x06200b8242d6a55c0bd74e6a2607a6f365083fcf9bf6455423a893a1ae936bec",
"0xa25642a20411e2eafdf3aa5cc417a6b61df11beac25372473da9f0c145373149",
"0xf5ab4094df9c6d9aace431eb62a5683e547466db1f6ac54de97db88ec23c47b7",
"0x6a53719d5fc10f3b83f5699d9b3000ff607e9d7340a4242f28325a50bad813c3"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

