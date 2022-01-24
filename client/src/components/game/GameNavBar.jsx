import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="flex flex-row items-center justify-between bg-blue shadow-w">
        <div className="ml-8 text-lg text-white hidden md:flex">
          QQCM GAME
        </div>
        <div className="flex flex-row mr-8 hidden md:flex">
          <button className="text-black text-center bg-white px-4 py-2 m-2">
            <NavLink to="/game">Home</NavLink>
          </button>
          <button className="text-black text-center bg-white px-4 py-2 m-2">
            <NavLink to="/login">Logout</NavLink>
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
