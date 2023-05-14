import axios from "axios";

const apiKey = "c427f781bb3b4c6c8d9c88200e752664";

const chainEndpoints = [
  `https://bsc-mainnet.nodereal.io/v1/${apiKey}`,
  `https://bsc-testnet.nodereal.io/v1/${apiKey}`,
  `https://eth-mainnet.nodereal.io/v1/${apiKey}`,
  `https://eth-goerli.nodereal.io/v1/${apiKey}`,
  `https://eth2-beacon-mainnet.nodereal.io/v1/${apiKey}`,
  `https://aptos-mainnet.nodereal.io/v1/${apiKey}`,
  `https://aptos-testnet.nodereal.io/v1/${apiKey}`,
  `https://opt-mainnet.nodereal.io/v1/${apiKey}`,
  `https://polygon-mainnet.nodereal.io/v1/${apiKey}`,
];

export default async function handler(req, res) {
  const { hash } = req.query;

  // Perform search on each chain
  for (const endpoint of chainEndpoints) {
    try {
      const options = {
        method: "POST",
        url: endpoint,
        headers: {
          accept: "application/json",
          "content-type": "application/json",
        },
        data: {
          id: 1,
          jsonrpc: "2.0",
          params: [hash],
          method: "eth_getTransactionReceipt",
        },
      };

      const response = await axios.request(options);
      if (response.data.result) {
        return res.send(response.data.result);
      }
    } catch (error) {
      console.error(error);
    }
  }

  return res.status(404).send("Transaction not found");
}
