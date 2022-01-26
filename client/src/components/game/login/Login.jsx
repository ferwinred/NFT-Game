// import web3 from 'web3'
// import detectEthereumProvider from '@metamask/detect-provider';
import { ethers } from 'ethers';
// import axios from 'axios';
// const { REACT_APP_SERVER } = process.env;
import { users, jwt} from './validate';
import { setLogged, checkLogged } from '../../../actions/auth';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';



function Login() {

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const {isLogged} = useSelector(state => state.authReducer);

    console.log('before: ', isLogged)

    useEffect(()=>{
      dispatch(checkLogged())
      if(isLogged) navigate('/game', {replace: true})
    }, [dispatch, isLogged, navigate]);
  
    const handleClick = async (e) => {
        // console.log(web3)

        //traemos la propiedad ethereum del objeto window
        const {ethereum} = window;
      try{
        //verificamos que este instalado metamask
        if(!ethereum){
          //si no esta instalado lanzamos esta alerta
          alert('Please install MetaMask');
          return
        };

        //extraemos las Public Address que tenga el usuario
        const publicAddress = await ethereum.request({ method: 'eth_requestAccounts' });
        //console.log(publicAddress);
        console.log('Public Adress: ', publicAddress[0]);
        
        //hacemos un get pasandole la public address seleccionada al endpoint users pra traernos al usuario
        // const user = await axios.get(`${REACT_APP_SERVER}/users/${publicAddress[0]}`)

        users.push({ address: publicAddress[0]});
        // const userReg = user ? user : await axios.post(`${REACT_APP_SERVER}/users`, publicAddress)
        console.log('users: ', users);
        const user = users.find(e => e.address === publicAddress[0]);
        console.log('user: ', user);

        user.nonce=0;

        const nonce = user.nonce;
       
        const provider = new ethers.providers.Web3Provider(ethereum);
        console.log('provider: ', provider);

        const signed = provider.getSigner();
        console.log('signed: ', signed);

        const signature = await signed.signMessage(`you are logining in Cryptomillionaire with this nonce: ${nonce}`);
        console.log('signed: ', signature);

        const { token, role, user_id} = jwt(publicAddress[0], signature);
        console.log('datos para el localstorage: ', token, role, user_id);

        localStorage.setItem('token', token);
        localStorage.setItem('role', role);
        localStorage.setItem('user', user_id);
        
        dispatch(setLogged());

        navigate('/game', {replace: true});

      } catch(err){
        console.log(err)
        return
      }
        
    };

    // console.log('after: ', isLogged)

  return (
        <div className="mt-6">
          <button onClick={handleClick}
          className="w-full inline-flex items-center justify-center px-4 py-2 bg-red-600 border border-transparent rounded-md font-semibold capitalize text-white hover:bg-red-700 active:bg-red-700 focus:outline-none focus:border-red-700 focus:ring focus:ring-red-200 disabled:opacity-25 transition">
            Conect Wallet
          </button>
        </div>
  );
}

export default Login;
