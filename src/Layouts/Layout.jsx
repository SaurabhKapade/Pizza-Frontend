import { useDispatch, useSelector } from "react-redux";
import pizzaLogo from "../assets/images/pizza1.png";
import Footer from "../Components/Footer";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../Redux/Slices/AuthSlice";
import { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

function Layout({ children }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // State from Redux
  const { isLoggedIn, username, role } = useSelector((state) => ({
    isLoggedIn: state.auth.isLoggedIn,
    username: state.auth.data.firstName,
    role: state.auth.role,
  }));
  const {length} = useSelector((state)=> state.cart)
  useEffect(()=>{},[length])

  // Local state for mobile menu and dropdown menu
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  // Handle Logout
  async function handleLogout(e) {
    e.preventDefault();
    dispatch(logout());
    navigate("/auth/login");
  }

  // Toggle Mobile Menu
  const toggleMenu = () => setMenuOpen(prev => !prev);

  // Toggle Dropdown Menu
  const toggleDropdownMenu = () => setDropdownOpen(prev => !prev);

  // Get first character of username
  const firstInitial = isLoggedIn && username ? username.charAt(0).toUpperCase() : "";

  return (
    <div>
      <nav className="flex items-center justify-between h-16 px-4 text-[#6B7280] font-mono border-none shadow-md bg-white">
        {/* Admin Section */}
        {role === "ADMIN" && (
          <div className="text-lg font-bold text-[#ff9110]">ADMIN</div>
        )}

        {/* Logo and App Name */}
        <div className="flex items-center justify-center">
          <p className="text-xl font-bold">Pizza Corner</p>
          <Link to={"/"}><img src={pizzaLogo} alt="Pizza Logo" className="h-8 w-8 ml-2" /></Link>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-4">
          <Link to="/menu" className="hover:text-[#ff9110]">Menu</Link>
          <Link to="/services" className="hover:text-[#ff9110]">Services</Link>
          <Link to="/about" className="hover:text-[#ff9110]">About</Link>
        

        {(isLoggedIn)&&
              <div className="relative bg-none hover:bg-none">
                      <span className="px-4 -ml-4">
                        <Link to="/cart"className="hover:text-[#ff9110]">Cart</Link>
                      </span>
                      {
                        (length!=0)&& <div className="absolute text-gray-900 bg-slate-300 h-4 w-4 rounded-full flex items-center justify-center -mt-9 ml-11">{length}</div>
                      }

              </div>}
        </div>

        {/* User Profile Section */}
        <div className="flex items-center space-x-4">
          {isLoggedIn ? (
            <div className="relative">
              {/* Profile Initial */}
              <div
                className="w-8 h-8 flex items-center justify-center bg-slate-800 text-white rounded-full cursor-pointer"
                onClick={toggleDropdownMenu}
              >
                {firstInitial}
              </div>
              {/* Profile Dropdown */}
              {isDropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-md">
                  <p className="font-bold text-slate-700 px-4">
                    Hey <span className="text-[#6B7280]">{username}</span>
                  </p>
                  <ul className="py-2">
                    <li className="px-4 py-2 hover:bg-gray-100">
                      <Link to="/profile" onClick={() => setDropdownOpen(false)}>Profile</Link>
                    </li>
                    { <div className="relative">
                      <li className="px-4 py-2 hover:bg-gray-100">
                        <Link to="/cart" onClick={() => setDropdownOpen(false)}>cart</Link>
                      </li> 
                      {
                        (length!=0)&& <div className="absolute text-gray-900 bg-slate-300 h-4 w-4 rounded-full flex items-center justify-center -mt-9 ml-11">{length}</div>
                      }

                    </div> }
                    <li className="px-4 py-2 hover:bg-gray-100">
                      <Link to="/settings" onClick={() => setDropdownOpen(false)}>Settings</Link>
                    </li>
                    <li className="px-4 py-2 hover:bg-gray-100">
                      <button onClick={(e) => { handleLogout(e); setDropdownOpen(false); }}>Logout</button>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          ) : (
            <Link to="/auth/login" className="hover:text-[#ff9110]">Log In</Link>
          )}
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-transparent shadow-md">
          <ul className="flex flex-col items-center space-y-4 py-4">
            <li>
              <Link to="/menu" onClick={() => setMenuOpen(false)} className="hover:text-[#ff9110]">Menu</Link>
            </li>
            <li>
              <Link to="/services" onClick={() => setMenuOpen(false)} className="hover:text-[#ff9110]">Services</Link>
            </li>
            <li>
              <Link to="/about" onClick={() => setMenuOpen(false)} className="hover:text-[#ff9110]">About</Link>
            </li>
            {isLoggedIn && (
              <>
                <li>
                  <Link to="/settings" onClick={() => setMenuOpen(false)} className="hover:text-[#ff9110]">Settings</Link>
                </li>
                <li>
                  <button onClick={(e) => { handleLogout(e); setMenuOpen(false); }} className="hover:text-[#ff9110]">Logout</button>
                </li>
              </>
            )}
          </ul>
        </div>
      )}

      {/* Render Children Components */}
      <div>{children}</div>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default Layout;
