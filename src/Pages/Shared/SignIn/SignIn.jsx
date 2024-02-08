import { Player } from "@lottiefiles/react-lottie-player";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
import { AuthContext } from "../Provider/AuthProvider";

const SignIn = () => {
 
  const navigate = useNavigate()
  const location = useLocation()
    const {logIn, googlelogIn} = useContext(AuthContext)

    const { register, handleSubmit } = useForm()
    const onSubmit = (data) =>{ 
        console.log(data)
    }
    const handlegoogleLogin = () =>{
        //signInUser user in firebase
        googlelogIn()
        .then((result) => {
          console.log(result.user);
          navigate(location?.state ? location.state : '/')
          //  toast("success googlelogin!");
          
        })
        .catch((error) => {
          console.error(error);
        //   toast("error googlelogin!");
        });
     }
    return (
        <div className=" bg-[#E5E5E5]  pt-5 md:pt-24">
        <h1 className=" text-4xl font-bold p-4 text-[#111430] text-center">SignIn Account</h1>
             <form  onSubmit={handleSubmit(onSubmit)}>
  <section className=" flex md:w-1/2 mx-auto   ">
   <div className=" border-4 border-sky-200 p-6  ">
  
    <p className="py-2">
    <input  type="email" placeholder="Your-email" className="input input-bordered input-info w-full max-w-xs"   {...register("email")} />
    </p>
   <p className="py-2">
   <input  type="password" placeholder="lastName" className="input input-bordered input-info w-full max-w-xs"   {...register("password")} />
   </p>
    <div className=" text-center ">
    <button className=" btn w-full bg-[#F63E7B]" >SignIn</button>
    <h1 className=" py-3"> Create Account ?<Link to='/signUp' className=" text-[#F63E7B]"> SignUp</Link></h1>
    </div>
    <div className=" text-[#111636]  flex items-center text-center">
          <button onClick={handlegoogleLogin} className="btn btn-outline bg-[#F63E7B] w-full mx-auto border rounded-3xl ">
            <FaGoogle></FaGoogle>
            Continue with Google
          </button>
        </div>
   </div>
   <div className=" ">
   <Player
autoplay
loop
src="https://assets3.lottiefiles.com/packages/lf20_UJNc2t.json"

style={{ height: '300px', width: '300px' }}
>
{/* <Controls visible={true} buttons={['play', 'repeat', 'frame', 'debug']} /> */}
</Player>
   </div>
  </section>
</form>
    </div>
    );
};

export default SignIn;