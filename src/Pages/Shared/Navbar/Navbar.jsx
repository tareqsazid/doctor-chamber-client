import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.log(error));
  };

  return (
    <div className=" bg-orange-200">
      <div className="navbar bg-orange-200">
        <div className="navbar-start">
          <a
            className="text-xl font-bold p-2 rounded-lg bg-orange-300
          text-orange-600"
          >
            <span className="text-7xl text-red-700 ">R</span>elief
          </a>
        </div>
        <div className="navbar-center hidden  lg:flex text-5xl text-orange-500 font-bold">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <a>Service</a>
            </li>
            {user?.email ? (
              <>
                <li>
                  <Link to="/bookings">My Bookings</Link>
                </li>
                <li>
                  <button onClick={handleLogOut}>Log Out</button>
                </li>
              </>
            ) : (
              <li>
                <Link to="/login">Login</Link>
              </li>
            )}
          </ul>
        </div>
        <div className="navbar-end">
          <button className="btn bg-orange-200 text-orange-700 font-bold text-2xl ">
            Appointment
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
