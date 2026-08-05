import { useState, useEffect } from "react";
import { atom, useAtom } from "jotai";
import { ethers } from "ethers";

export const walletAtom = atom({
    address: null,
    signer: null,
    network: null,
  });

  const useWallet = () => {
    const [wallet, SetWallet] = useAtom(walletAtom);

    async function connectWallet(walletAtom) {
        if(!window.ethereum) {
            return
        }
        else{
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
        } 
    };

    async function disconnectWallet(walletAtom) {
        setWalletAtom({ address: null, signer: null, network: null });
    };

    return { wallet, connectWallet, disconnectWallet, isConnected: !!wallet.address };
}

export default useWallet;