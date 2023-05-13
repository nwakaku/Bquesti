
# BQuesti

Documentation for "BQuesti" DApp

## Introduction

"Bquesti" is a decentralized application (DApp) built on the Binance blockchain that allows users to create a will and transfer their assets to their beneficiaries automatically upon their death. The DApp supports the transfer of BEP-20, BEP-721, and BEP-1155 tokens. The user can set a specific day of the year for the execution of the will.

This document explains how to use the "Bquesti" DApp, including the features, user interface, and how to interact with the Binance blockchain.
## Features
The "BQuesti" DApp has the following features:

- Register and add legacies: Users can register themselves as testators and add their legacies, including the token type (BEP-20, BEP-721, or BEP-1155), the amount, and the beneficiary's address.
- Remove legacies: Users can remove their legacies if they change their minds.
- Schedule the execution day: Users can set a specific day of the year for the will's execution.
- Get beneficiary legacies: Beneficiaries can view all the legacies they are entitled to receive.
- Transfer legacy: Upon the testator's death, the DApp automatically transfers the legacies to the beneficiaries according to the will's instructions.


## Related

Here are some related projects

### Particle Auth + RainbowKit

it involves creating a project in the Particle Dashboard, configuring Web app to access Particle Network's auth and wallet services, and integrating SDKs through RainbowKit to onboard web2 and web3 users, authenticate dApp users, and install a fully functional wallet into the dApp. Additionally, Particle Network's node services can be used to interact with on-chain data and send different transactions to the network by utilizing API-provided endpoints. 

[Github Link to Codebase](https://github.com/nwakaku/Bquesti)


## Get Started

To get started with Bquesti, simply follow these steps:

- Clone the repository from GitHub:

```http
  git clone https://github.com/nwakaku/Bquesti

```

- Install the necessary dependencies:

```bash
cd app && cd frontend  

yarn 
```

- Create a project in the Particle Dashboard and get the Api Keys

Visit https://dashboard.particle.network to sign up for an API key.
## Authors

- [@nwakaku](https://www.github.com/nwakaku)

## BlockChain Deployed

| Name Of Chain             |   Contract Address |
| ----------------- | ------------------------------------------------------------------ |
| Binance Blockchain | 0xA89379b27EA065F76CceAec7E3BBc9D77714E1Ca|



## Tech Stack

BQuesti is built using the following technologies:

**Client:** NextJs, RainBowKit, TailwindCSS, Particle.Network, Wagmi, 

**Server:** Node, Solidity, Binance Blockchain, ChainlinkAutomation


## Usage/Examples

```javascript
import Component from 'my-project'

function App() {
  return <Component />
}
```


## Running Tests

To run tests, run the following command

```bash
  cd backend
  yarn run backend
```


## Support

For support, email Ixuhonline@gmail.com or join our Slack channel.


## Roadmap

- Drop down options for existing tokens in wallet (Pull wallet assets) 
- Give a grace period before execution Send a reminder to email/calendar when check in date is coming up


## License

[MIT](https://choosealicense.com/licenses/mit/)


## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`NEXT_PUBLIC_PROJECT_ID`

`NEXT_PUBLIC_CLIENT_KEY`

`NEXT_PUBLIC_APP_ID`


## Demo

Insert gif or link to demo

[Demo Website](https://bquesti.vercel.app/)