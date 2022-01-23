import { NavLink, Outlet } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="flex flex-row items-center justify-between bg-blue shadow-w">
        <div className="ml-8 text-lg text-white hidden md:flex">
          QQCM GAME
        </div>
        <span className="w-screen md:w-1/3 h-10 bg-gray-200 cursor-pointer border border-gray-300 text-sm rounded-full flex">
          <input
            type="search"
            name="serch"
            placeholder="Search"
            className="flex-grow px-4 rounded-l-full rounded-r-full text-sm focus:outline-none"
          />
          <i className="fas fa-search m-3 mr-5 text-lg text-gray-700 w-4 h-4"></i>
        </span>
        <div className="flex flex-row-reverse mr-4 ml-4 md:hidden">
          <i className="fas fa-bars"></i>
        </div>

        <div className="flex flex-row mr-8 hidden md:flex">
          <button className="text-black text-center bg-white px-4 py-2 m-2">
            <NavLink to="/">Home</NavLink>
          </button>
          <button className="text-black text-center bg-white px-4 py-2 m-2">
            <NavLink to="/whitePaper">White Paper</NavLink>
          </button>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Navbar;
