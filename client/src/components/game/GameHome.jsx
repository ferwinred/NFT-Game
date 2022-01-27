import { useDispatch, useSelector } from "react-redux";
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import GameNavbar from "./GameNavBar";
import { checkLogged } from '../../actions/auth';

function GameHome() {

    const {isLogged} = useSelector(state => state.authReducer);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(()=>{
        dispatch(checkLogged())
        if(!isLogged) navigate('/login', {replace: true})
        return
      }, [dispatch, isLogged, navigate]);

    return (
        <div className="">
            <GameNavbar />
            <h2>game</h2>
        </div>
    )
}

export default GameHome
