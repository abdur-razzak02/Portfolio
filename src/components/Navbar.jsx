import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const links = (
    <div className="text-main flex flex-col lg:flex-row">
      <li>
        <Link to={"/"}>Home</Link>
      </li>
      <li>
        <Link to={"/"}>Projects</Link>
      </li>
      <li>
        <NavLink to={"/about"}>About</NavLink>
      </li>
      <li>
        <NavLink to={"/about"}>Services</NavLink>
      </li>
      <li>
        <NavLink to={"/about"}>Contact</NavLink>
      </li>
    </div>
  );
  return (
    <div className="navbar px-5 lg:px-0 lg:w-3/4 mx-auto">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="lg:hidden mr-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-lg z-[1] mt-3 w-40 p-2 shadow flex-row "
          >
            {links}
          </ul>
        </div>
        <Link to={"/"} className="text-xl md:text-2xl font-bold">
          Abdur <span className="text-main">Razzak</span>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end">
        <Link
          to="/login"
          className="px-4 py-1 rounded-md bg-main hover:bg-[#520000] text-white"
        >
          Login
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
