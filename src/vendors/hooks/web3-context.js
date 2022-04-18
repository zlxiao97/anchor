import React, { useState, useContext, useMemo, useCallback } from "react";
import Web3Modal from "web3modal";
import { StaticJsonRpcProvider, Web3Provider } from "@ethersproject/providers";
import WalletConnectProvider from "@walletconnect/web3-provider";
import { getBscTestURI, getBscURI } from "./helpers";
import { DEFAULD_NETWORK } from "../constants";
import { Networks } from "../constants";
import { messages } from "../constants/messages";
import { swithNetwork } from "../helpers/switch-network";

const Web3Context = React.createContext(null);

export const useWeb3Context = () => {
  const web3Context = useContext(Web3Context);
  if (!web3Context) {
    throw new Error(
      "useWeb3Context() can only be used inside of <Web3ContextProvider />, " +
        "please declare it at a higher level."
    );
  }
  const { onChainProvider } = web3Context;
  return useMemo(() => {
    return { ...onChainProvider };
  }, [web3Context]);
};

export const useAddress = () => {
  const { address } = useWeb3Context();
  return address;
};

export const Web3ContextProvider = ({ children }) => {
  const [connected, setConnected] = useState(false);
  const [chainID] = useState(DEFAULD_NETWORK);
  const [providerChainID, setProviderChainID] = useState(DEFAULD_NETWORK);
  const [address, setAddress] = useState("");

  // const [uri] = useState(getBscTestURI());
  const [uri] = useState(getBscURI());

  var [provider, setProvider] = useState(new StaticJsonRpcProvider(uri));

  const [web3Modal] = useState(
    new Web3Modal({
      cacheProvider: true,
      providerOptions: {
        walletconnect: {
          package: WalletConnectProvider,
          options: {
            rpc: {
              // [Networks.BSCTEST]: getBscTestURI()
              [Networks.BSC]: getBscURI()
            }
          }
        }
      }
    })
  );

  const hasCachedProvider = () => {
    if (!web3Modal) return false;
    if (!web3Modal.cachedProvider) return false;
    return true;
  };

  const _initListeners = useCallback(
    (rawProvider) => {
      if (!rawProvider.on) {
        return;
      }

      rawProvider.on("accountsChanged", () =>
        setTimeout(() => window.location.reload(), 1)
      );

      rawProvider.on("chainChanged", async (chain) => {
        changeNetwork(chain);
      });

      rawProvider.on("network", (_newNetwork, oldNetwork) => {
        if (!oldNetwork) return;
        window.location.reload();
      });
    },
    [provider]
  );

  const changeNetwork = async (otherChainID) => {
    const network = Number(otherChainID);

    setProviderChainID(network);
  };

  const connect = useCallback(async () => {
    const rawProvider = await web3Modal.connect();

    _initListeners(rawProvider);

    const connectedProvider = new Web3Provider(rawProvider, "any");

    const chainId = await connectedProvider
      .getNetwork()
      .then((network) => Number(network.chainId));
    console.log("chainId", chainId);
    const connectedAddress = await connectedProvider.getSigner().getAddress();
    console.log("connect()", connectedAddress, chainID);

    setAddress(connectedAddress);

    setProviderChainID(chainId);
    setProvider(connectedProvider);
    if (chainId === Networks.AVAX) {
      setProvider(connectedProvider);
    }

    setConnected(true);
    provider = connectedProvider;
    const addr = await provider.getSigner().getAddress();
    console.log("sb provider ", addr);

    return connectedProvider;
  }, [provider, web3Modal, connected]);

  const checkWrongNetwork = async () => {
    if (providerChainID !== DEFAULD_NETWORK) {
      const shouldSwitch = window.confirm(messages.switch_to_avalanche);
      if (shouldSwitch) {
        await swithNetwork();
        window.location.reload();
      }
      return true;
    }

    return false;
  };

  const disconnect = useCallback(async () => {
    web3Modal.clearCachedProvider();
    setConnected(false);

    setTimeout(() => {
      window.location.reload();
    }, 1);
  }, [provider, web3Modal, connected]);

  const onChainProvider = useMemo(
    () => ({
      connect,
      disconnect,
      hasCachedProvider,
      provider,
      connected,
      address,
      chainID,
      web3Modal,
      providerChainID,
      checkWrongNetwork
    }),
    [
      connect,
      disconnect,
      hasCachedProvider,
      provider,
      connected,
      address,
      chainID,
      web3Modal,
      providerChainID
    ]
  );
  //@ts-ignore
  return (
    <Web3Context.Provider value={{ onChainProvider }}>
      {children}
    </Web3Context.Provider>
  );
};
