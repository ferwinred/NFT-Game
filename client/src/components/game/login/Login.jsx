import { setLogged, checkLogged } from '../../../actions/auth';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { handleVerify, handleSignature, handleAuth, handleUserValidate } from './validate';


function Login() {

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const {isLogged} = useSelector(state => state.authReducer);

    console.log('before: ', isLogged)

    useEffect(()=>{
      dispatch(checkLogged())
      // if(isLogged) navigate('/game', {replace: true})
    }, [dispatch, isLogged]);

   
    const handleClick = async (e) => {

        //traemos la propiedad ethereum del objeto window
        const {ethereum} = window;

      try{
        //verificamos que este instalado metamask y nos traemos la publicAddress
        const publicAddress = await handleVerify(ethereum);

        //Validamos si hay algún usuario registrado con esta address, sino se crea el usuario
        const user = await handleUserValidate(publicAddress);
        console.log('user-res: ', user)
        console.log('publicAddress: ', publicAddress)
        //realizamos la firma del usuario en MetaMask para luego pasarle este dato al JWT
        const signature = await handleSignature(ethereum, user);
        console.log('signature: ', signature)
        //se crea el token en JWT para autenticación y permisos del usuario
        await handleAuth(publicAddress, signature);

      

        //se despacha la action setLogged para logear al usuario en la App
        dispatch(setLogged());

        //se redireccióna al user a la página principal
        navigate('/game', {replace: true});

      } catch(err){
        console.log(err);
        return
      };
        
    };


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
