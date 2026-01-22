# Assisgnment 21/01/25

**Assignment 1: Gas fee and limit**
- Gas is the work fee for doing anything on a blockchain
- Gas fee is calculated by multiplying the total units of computational effort (gas limit) by the price per unit (gas price).
- **Gas Used** is how much work the transactions needs
- **Gas Price/Gwei** is a smaller unit of ETH to make it readable.
> 1 ETH = 1,000,000,000 gwei

- Think of Gas Used as Naira and Gwei as Kobo

* The Gas fee as Pre-EIP-1559, the gas fee was calculated as:
> Gas Fee = Gas Units Used x Gas Price (Gwei)

* Post-EIP-1559
> Gas Fee = Gas Used × (Base Fee + Priority Fee)

- The New formula takes in the fact that not all the gas is gotten by the validator. Some are burnt and destroyed forever. Removed from supply

- The more gas you pay, the faster the transaction



``Transactions:``
1. ETH transfer: cheap
2. Token Transfer: more expensive
3. Smart Contracts: expensive
4. Complex DeFi: very expensive


**Assignment 2 Hashing Algorithms**
- **SHA256** and **KEC256** are different hashing algorithms that carry out the same thing
- SHA256 is used by Bitcoin and Keccak256 is used by Ethereum.
- **SHA256** and **KEC256** produce different hashes because they use diffrent constructions, padding rules and internal states, even though they output 256 bits both.
- keccak256 is preferred by ethereum because it's more resistant to "length extension attacks"