require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'give close brown slab carpet repeat pitch erosion idea clog slot giant'; 
let testAccounts = [
"0x56e47083591ad17d3ba3f837dd08dd85a616caa9a1f8bc9cae56e5ef343b2ae1",
"0x0aa4e629d76e7c91b66dcbf8556e05df7f4156d83ba18af5f37d6fb628691e7f",
"0xff4a6d208695f98a264de5d18b88ccc2e77ad88bf6a9a20ea76bca681dfc78cd",
"0xcb3ab2eec3276bf50256dd92ff7462f48ca8aa77269a1b0e676e2d52af421675",
"0x35b5300e53850e94cbc30670db5509f3a355282fc6a58e4718c1863ceaa905c4",
"0x4fff5b73a892f0d80748f9c945fd393bf37040594617c712f6add3175bb15620",
"0xaa04c9d8e1932b3e0ec4837b13e9c79179c9e870a3793b8798d5b1ecb4409d3f",
"0x501a7f14d9c2be4f571269bf0de2c40b04a7d613bb2e16cd775829501b22a247",
"0x6f304b2735f3ccac0b2141e6299d4d48886798e6881af465641fdb59f2d777bb",
"0x82ccda0596495edb20991d94a2bacbd8f45a18690328577cc09416cb510c4379"
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

