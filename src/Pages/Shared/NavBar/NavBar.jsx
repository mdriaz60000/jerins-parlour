import { NavLink } from 'react-router-dom';
import logo  from "../../../assets/logo.png"
 

const NavBar = () => {

    return (
        <div className="navbar bg-[#E5E5E5] items-center">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              <li><NavLink to='/'>Home</NavLink></li>
              <li><NavLink to='/'>Our portfolio</NavLink></li>
              <li><NavLink to='/'>Our teem</NavLink></li>
              <li><NavLink to='/'>Contact us</NavLink></li>
            
             
            </ul>
          </div>
          <NavLink className="btn btn-ghost text-2xl "> <img className='h-12 ' src={logo} alt="" /></NavLink>
        </div>
        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
          <li><NavLink to='/'>Home</NavLink></li>
              <li><NavLink to='/portfolio'>Our portfolio</NavLink></li>
              <li><NavLink to='/ourTeem'>Our teem</NavLink></li>
              <li><NavLink to='/contact'>Contact us</NavLink></li>
          </ul>
        </div>
        <div className="">
          <a className="btn">Button</a>
        </div>
      </div>
    );
};

export default NavBar;