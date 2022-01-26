import { NavLink, useNavigate } from "react-router-dom";

const GameNavbar = () => {

  const navigate = useNavigate();

  const handleClick = (e) => {
    localStorage.removeItem('role');
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    navigate('/', {replace: true})
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
