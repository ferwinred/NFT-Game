// import { useDispatch } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
// import { logout } from '../../actions/auth';

const GameNavbar = () => {

  const navigate = useNavigate();
  // const dispatch = useDispatch();

  const handleClick = (e) => {
    localStorage.removeItem('role');
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    // dispatch(logout());
    navigate('/', {replace: true});
  }
  console.log(localStorage)
  return (
      <div className="flex flex-row items-center justify-between bg-blue">
        <div className="ml-8 text-lg text-white md:flex">
          QQCM GAME
        </div>
        <div className="flex flex-row mr-8 md:flex">
          <button className="text-black text-center bg-white px-4 py-2 m-2">
            <NavLink to="/game">Home</NavLink>
          </button>
          <button onClick={handleClick} className="text-black text-center bg-white px-4 py-2 m-2">
            <NavLink to="/login">Logout</NavLink>
          </button>
        </div>
      </div>
  );
};

export default GameNavbar;
