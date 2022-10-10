const hre = require("hardhat");

async function main() {
 
  const Staking = await hre.ethers.getContractFactory("Staking");
  const staking = await Staking.deploy("0x5FbDB2315678afecb367f032d93F642f64180aa3","0x5FbDB2315678afecb367f032d93F642f64180aa3");

  await staking.deployed();

  console.log(
    ` deployed to ${staking.address}`
  );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
