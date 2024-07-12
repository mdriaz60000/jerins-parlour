import { NavLink } from "react-router-dom";


const Error = () => {
    return (
        <div className="pt-3 md:p-8 ">
            
            <p ><NavLink href="/" className="btn bg-[#F63E7B]">back to home</NavLink></p>
            <div className=" max-w-md mx-auto p-8">
                <img src="https://img.freepik.com/free-vector/oops-404-error-with-broken-robot-concept-illustration_114360-5529.jpg?size=626&ext=jpg&uid=R110004738&ga=GA1.1.1584261188.1697473840&semt=sph" alt="" />
            </div>
        </div>
    );
};

export default Error;