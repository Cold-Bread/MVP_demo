import { useState, useEffect } from "react";
import { atom, useAtom } from "jotai";
import { ethers } from "ethers";

const walletAtom = atom({
    address: null,
    signer: null,
    network: null,
  });

  const useWallet = () => {
    const [wallet, setWallet] = useAtom(walletAtom);

    async function connectWallet() {
        if(!window.ethereum) {
            return
        }
        try{
            const provider = new ethers.providers.Web3Provider(window.ethereum);
            await provider.send("eth_requestAccounts", []);

            const signer = provider.getSigner();
            const address = await signer.getAddress();
            const network = await provider.getNetwork();

            setWallet({signer, address, network});

        }catch(error){
            console.log(error);
            return;
        }
    };

    async function disconnectWallet() {
        setWalletAtom({ address: null, signer: null, network: null });
    };

    return { wallet, connectWallet, disconnectWallet, isConnected: !!wallet.address };
}

export default useWallet;