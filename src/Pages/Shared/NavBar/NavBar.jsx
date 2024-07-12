import { NavLink } from 'react-router-dom';
import logo  from "../../../assets/logo.png"
import { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
 

const NavBar = () => {
  const { logOut,user} = useContext(AuthContext)

    return (
        <div className="navbar bg-[#E5E5E5] items-center">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-56 items-center">
              <li><NavLink to='/'>Home</NavLink></li>
              <li><NavLink to='/'>Our portfolio</NavLink></li>
              <li><NavLink to='/ourTeem'>Our teem</NavLink></li>
              <li><NavLink to='/myService/book'>/My Service</NavLink></li>
            
             
            </ul>
          </div>
          <NavLink className=" text-2xl "> <img className='h-12 ' src={logo} alt="" /></NavLink>
        </div>
        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal  px-1">
              <li><NavLink to='/'>Home</NavLink></li>
              <li><NavLink to='/ourTeem'>Our teem</NavLink></li>
              {/* <li><NavLink to='/contact'>Contact us</NavLink></li> */}
              <li><NavLink to='/myService/book'>My Service</NavLink></li>
          </ul>
          <div className="">
        {user? <div className="avatar px-3">
  <div className="w-8 h-8 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 ">
    <img src={user.photoURL}/>
  </div>
</div> : ""}
          {
            user ?
            <button  className=' justify-end items-center ' onClick={ logOut}>SignOut</button>
            : <NavLink
            className={({ isActive }) =>
              isActive ? "bg-[#F63E7B] btn " : "  bg-[#F63E7B]    btn "
            }
            to="/signIn"
          >
            SignIn
          </NavLink>
          }
        
        </div>

        </div>
       
        <div className="navbar-end md:hidden lg:hidden">
        {user? <div className="avatar px-3">
  <div className="w-10 h-10 rounded-full tems-center ring ring-primary ring-offset-base-100 ring-offset-2 ">
    <img src={user.photoURL}/>
  </div>
</div> : ""}
          {
            user ?
            <button className=' items-center'  onClick={ logOut}>SignOut</button>
            : <NavLink
            className={({ isActive }) =>
              isActive ? "bg-[#F63E7B] btn " : "  bg-[#F63E7B]  btn "
            }
            to="/signIn"
          >
            SignIn
          </NavLink>
          }
        
        </div>
       
      
        </div>
      
    );
};

export default NavBar;