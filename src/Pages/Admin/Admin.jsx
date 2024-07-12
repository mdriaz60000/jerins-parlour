import { NavLink, Outlet } from "react-router-dom";
import logo from "../../assets/logo.png"


const Admin = () => {
    return (
        <div className="flex text-[#111430] ">
        <section className="w-64 min-h-screen  bg-[#E5E5E5]">
          <div className="w-36 p-4 ">
           <NavLink to='/' >
           <img className="" src={logo} alt="" />
           </NavLink>
          </div>
         <ul className="menu p-4">
         <li><NavLink to='/admin'>Order List</NavLink></li>
         <li><NavLink to='/admin/addService'>Add Service</NavLink></li>
         <li><NavLink to='/admin/makeAdmin'>Make Admin</NavLink></li>
         <li><NavLink to='/admin/manageService'>Manage Service</NavLink></li>
           
         </ul>
        </section>
        <section className=" flex-1  bg-slate-400">
        <Outlet></Outlet>
        </section>
      </div>
    );
};

export default Admin;