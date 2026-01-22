const calculateGasFee = (units, price) => {
    return units * price
}

const fee = calculateGasFee(2000, 20)

console.log(`Gas Fee = ${fee}`);
