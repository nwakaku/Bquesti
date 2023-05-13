import {
  connectorsForWallets,
  RainbowKitProvider,
} from "@rainbow-me/rainbowkit";

import {
  argentWallet,
  coinbaseWallet,
  imTokenWallet,
  injectedWallet,
  ledgerWallet,
  metaMaskWallet,
  omniWallet,
  rainbowWallet,
  trustWallet,
  walletConnectWallet,
} from "@rainbow-me/rainbowkit/wallets";

import { configureChains, createClient, WagmiConfig } from "wagmi";
import { jsonRpcProvider } from "wagmi/providers/jsonRpc";
import { publicProvider } from "wagmi/providers/public";
import "@rainbow-me/rainbowkit/styles.css";

import { bscTestnet } from "wagmi/chains";
import React from "react";
import { ParticleNetwork } from "@particle-network/auth";

import { particleWallet } from "@particle-network/rainbowkit-ext";

function DynamicWagmi(props: any) {
  const particle = new ParticleNetwork({
    projectId: "cb99c115-33fc-4838-a6ac-0e99889cd3aa",
    clientKey: "cGfmojeOILJ4kDhGojjOsUyVBjvpuG1ilmflzrwI",
    appId: "b6276d3d-482f-4360-b603-3dac25908935",
  });
  const { chains, provider, webSocketProvider } = configureChains(
    [bscTestnet],
    [
      jsonRpcProvider({
        rpc: () => ({ http: "https://rpc.ankr.com/bsc_testnet_chapel" }),
      }),
      publicProvider(),
    ]
  );
  const popularWallets = {
    groupName: "Popular",
    wallets: [
      particleWallet({ chains, authType: "google" }),
      particleWallet({ chains, authType: "facebook" }),
      particleWallet({ chains, authType: "apple" }),
      particleWallet({ chains }),
      injectedWallet({ chains }),
      rainbowWallet({ chains }),
      coinbaseWallet({ appName: "RainbowKit demo", chains }),
      metaMaskWallet({ chains }),
      walletConnectWallet({ chains }),
    ],
  };

  const connectors = connectorsForWallets([
    popularWallets,
    {
      groupName: "Other",
      wallets: [
        argentWallet({ chains }),
        trustWallet({ chains }),
        omniWallet({ chains }),
        imTokenWallet({ chains }),
        ledgerWallet({ chains }),
      ],
    },
  ]);

  const wagmiClient = createClient({
    autoConnect: true,
    connectors,
    provider,
    webSocketProvider,
  });

  return (
    <>
      {wagmiClient && (
        <WagmiConfig client={wagmiClient}>
          <RainbowKitProvider chains={chains}>
            {props.children}
          </RainbowKitProvider>
        </WagmiConfig>
      )}
    </>
  );
}

export default DynamicWagmi;
