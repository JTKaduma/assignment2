const calculateGasFee = (units, price) => {
  return units * price;
};

const calculateGasFeeNew = (units, base, priority) => {
  return units * (base + priority);
};

const fee = calculateGasFee(2000, 20);
const newFee = calculateGasFeeNew(2000, 10, 10);

console.log(`Gas Fee = ${fee}`);
console.log(`New Gas Fee = ${newFee}`);
