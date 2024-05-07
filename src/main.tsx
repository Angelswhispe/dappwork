import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { ThirdwebProvider } from "@thirdweb-dev/react";
import { createThirdwebClient, getContract, resolveMethod } from "thirdweb";
import { defineChain } from "thirdweb/chains";
// import { ThirdwebProvider } from "thirdweb/react";
import "./styles/globals.css";
import { Toaster } from "./components/ui/Toaster";
import { getGasless } from "./utils/getGasless";
import {
  biconomyApiIdConst,
  biconomyApiKeyConst,
  chainConst,
  relayerUrlConst,
  clientIdConst,
} from "./consts/parameters";

const container = document.getElementById("root");
const root = createRoot(container!);
const urlParams = new URL(window.location.toString()).searchParams;

const relayerUrl = urlParams.get("relayUrl") || relayerUrlConst || "";
const biconomyApiKey =
  urlParams.get("biconomyApiKey") || biconomyApiKeyConst || "";
const biconomyApiId =
  urlParams.get("biconomyApiId") || biconomyApiIdConst || "";
const sdkOptions = getGasless(relayerUrl, biconomyApiKey, biconomyApiId);

const chain = (urlParams.get("chain") && urlParams.get("chain")?.startsWith("{")) ? JSON.parse(String(urlParams.get("chain"))) : urlParams.get("chain") || chainConst;

const clientId = urlParams.get("clientId") || clientIdConst || "";

export const client = createThirdwebClient({ 
  clientId: "146456f06c7661ff639c9735bed38b47" 
});

export const contract = getContract({ 
  client, 
  chain: defineChain(8453), 
  address: "0x..."
});

root.render(
  <React.StrictMode>
    <ThirdwebProvider activeChain={chain} sdkOptions={sdkOptions} clientId={clientId}>
      <Toaster />
      <App />
    </ThirdwebProvider>
  </React.StrictMode>,
);
