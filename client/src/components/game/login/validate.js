import axios from "axios";
import { ethers } from "ethers";
const {REACT_APP_SERVER} = process.env

//Funcion que verifica que este instalado MetaMask y se trae las public addresses
export const handleVerify = async (eth) => {
  try {
    if (!eth) {
      //si no esta instalado lanzamos esta alerta
      alert("Please install MetaMask");
      return;
    }

    //extraemos las Public Address que tenga el usuario
    const publicAddress = await eth.request({ method: "eth_requestAccounts" });
    //console.log(publicAddress);
    if (!publicAddress[0]) {
      alert("Please create an account in MetaMask");
      return;
    }
    console.log(publicAddress)
    return publicAddress[0];
  } catch (error) {
    console.log("verMetaMask: ", error);
  }
};

export const handleUserValidate = async (pubAd) => {
  try {
    console.log('pubAd vUs: ', pubAd)
    const user = await axios.get(`${REACT_APP_SERVER}/users/${pubAd}`);
    console.log('user1: ', user.data)
    if (!user.data) {

      await axios.post(`${REACT_APP_SERVER}/users`, {
        address: pubAd,
      });

     const userCreate = await axios.get(`${REACT_APP_SERVER}/users/${pubAd}`);
      console.log('user2: ', userCreate.data)
     return userCreate.data

    };

    return user.data;
  } catch (error) {
    console.log("userVer: ", error);
  }
};

//esta función verifica que el usario existe
export const handleSignature = async (eth, user) => {
  try {
    const provider = new ethers.providers.Web3Provider(eth);
    console.log("provider: ", provider);

    const signed = provider.getSigner();
    console.log("signed: ", signed);

    const signature = await signed.signMessage(
      `you are logining in Cryptomillionaire with this nonce: ${user.nonce}`
    );
    console.log("signed: ", signature);

    return signature;
  } catch (error) {
    console.log("signature: ", error);
  }
};

export const handleAuth = async (publicAddress, signature) => {
  try {
    const res = await axios.post(`${REACT_APP_SERVER}/login`, {
      publicAddress,
      signature,
    });

    localStorage.setItem("token", res.data.token);
    localStorage.setItem("user", res.data.user);
    localStorage.setItem("role", res.data.role);

  } catch (error) {
    console.log("auth: ", error);
  };
};
