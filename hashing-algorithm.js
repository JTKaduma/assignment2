// import { sha256 } from "js-sha256";
import {ethers } from 'ethers'

const transactions = [
  "Jason sent 10NGN",
  "Alex sent 10NGN",
  "Richard sent 10NGN",
  "Jay sent 10NGN",
  "Daniel sent 100NGN",
  "Daniel sent 100NGN",
];

// const hashedTxn = transactions.map((t) => sha256(t));
const hashedTxn = transactions.map((t) => ethers.sha256(ethers.toUtf8Bytes(t)));
console.log(hashedTxn);
const hashingUsingSha256 = (array) => {
  if (array.length === 1) {
    return array[0];
  }
  let container = [];
  for (let index = 0; index < array.length; index += 2) {
    if (index + 1 < array.length) {
      container.push(ethers.sha256(ethers.toUtf8Bytes(array[index] + array[index + 1])));
    } else {
      container.push(array[index]);
    }
  }
  console.log(container);
  return hashingUsingSha256(container);
};

const hashingUsingKec256 = (array) => {
  if (array.length === 1) {
    return array[0];
  }
  let container = [];
  for (let index = 0; index < array.length; index += 2) {
    if (index + 1 < array.length) {
      container.push(ethers.keccak256(ethers.toUtf8Bytes(array[index] + array[index + 1])));
    } else {
      container.push(array[index]);
    }
  }
  console.log(container);
  return hashingUsingKec256(container);
};

const mRoot1 = hashingUsingSha256(hashedTxn);
const mRoot2 = hashingUsingKec256(hashedTxn);
console.log(`Meckle Root using sha256: ${mRoot1}`);
console.log(`Meckle Root using kec256: ${mRoot2}`);
