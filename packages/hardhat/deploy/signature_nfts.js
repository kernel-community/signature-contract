module.exports = async ({getNamedAccounts, deployments}) => {
    const {deploy} = deployments;
    var {deployer, creator} = await getNamedAccounts();

    var PROXY_REGISTRATION_ADDRESS = '0xa5409ec958c83c3f309868babaca7c86dcb077c1';
    let SIGNER_ADDRESS = '0x1F4Cb07192f96e2316d07A8ee2DBd503a74eD8dF';

    const network = await hre.ethers.provider.getNetwork();
    console.log(`network: ${network.name}`);
    if (network.name === "rinkeby") {
      console.log('Using Opensea registration address for Rinkeby');
      PROXY_REGISTRATION_ADDRESS = '0xf57b2c51ded3a29e6891aba85459d600256cf317';
      creator= '0x1D32F2aCB832AFc3D8c8ffB3BE20e8dC7Faac507';
      SIGNER_ADDRESS = '0x1F4Cb07192f96e2316d07A8ee2DBd503a74eD8dF';
    }
    await deploy('SignatureNFT', {
      from: deployer,
      args: [PROXY_REGISTRATION_ADDRESS, creator, SIGNER_ADDRESS],
      log: true,
    });
  };
  module.exports.tags = ['SignatureNFT'];