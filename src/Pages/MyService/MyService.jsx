  import { NavLink, Outlet } from "react-router-dom";


const MyService = () => {
    return (
        <div className="flex text-[#111430] ">
          <section className="w-64 min-h-screen  bg-[#E5E5E5]">
            
           <ul className="menu p-4">
           <li><NavLink to='/myService'>book</NavLink></li>
           <li><NavLink to='/myService/bookingList'>booking list</NavLink></li>
           <li><NavLink to='/myService/review'>Review</NavLink></li>
             
           </ul>
          </section>
          <section className=" flex-1 p-8 bg-slate-400">
          <Outlet></Outlet>
          </section>
        </div>
    );
};

export default MyService;