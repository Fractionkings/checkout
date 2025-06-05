import {
  ThirdwebProvider,
  ConnectWallet,
  Web3Button,
  embeddedWallet,
} from "@thirdweb-dev/react";
import { Polygon } from "@thirdweb-dev/chains";
import "./App.css";

export default function App() {
  return (
    <ThirdwebProvider
      activeChain={Polygon}
      clientId="d10a174f609eca0ab01fba71027fc2fc"
      supportedWallets={[embeddedWallet()]}
    >
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <h1>Buy DUNDAS Tokens</h1>

        <ConnectWallet auth={{ loginOptional: false }} />

        <Web3Button
          contractAddress="0xAb5Ce3de270cA0D2F37a461A7017B83b12cE8378"
          action={(contract) => contract.erc20.claim(10)}
        >
          Buy 10 Tokens ($10)
        </Web3Button>

        <p style={{ fontSize: "14px", color: "#666", marginTop: "20px" }}>
          🔐 Your tokens are stored in your smart wallet, linked to your email.
        </p>
      </div>
    </ThirdwebProvider>
  );
}
