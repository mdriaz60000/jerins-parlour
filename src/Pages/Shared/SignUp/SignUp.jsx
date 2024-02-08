import { Player,  } from "@lottiefiles/react-lottie-player";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";


const SignUp = () => {

    const { register, handleSubmit } = useForm()
    const onSubmit = (data) =>{ 
        console.log(data)
    }

    return (
        <div className=" bg-[#E5E5E5]  pt-5 md:pt-24">
            <h1 className=" text-4xl font-bold p-4 text-[#111430] text-center">SignUp New Account</h1>
                 <form  onSubmit={handleSubmit(onSubmit)}>
      <section className=" flex md:w-1/2 mx-auto   ">
       <div className=" border-4 border-sky-200 p-6  ">
       <p className="py-2">
       <input  type="text" placeholder="fullName" className="input input-bordered input-info w-full max-w-xs "  {...register("fullName")} />
       </p> 
        <p className="py-2">
        <input  type="email" placeholder="Your-email" className="input input-bordered input-info w-full max-w-xs"   {...register("email")} />
        </p>
       <p className="py-2">
       <input  type="password" placeholder="lastName" className="input input-bordered input-info w-full max-w-xs"   {...register("password")} />
       </p>
      <p className="py-2">
      <input  type="url" placeholder="your-photo-url" className="input input-bordered input-info w-full max-w-xs"   {...register("photoUrl")} />
        </p> 
        <div className=" text-center ">
        <button className=" btn w-full bg-[#F63E7B]" >SignUp</button>
        <h1 className=" py-3"> allReady Account ?<Link to='/signIn' className=" text-[#F63E7B]"> SignIn</Link></h1>
        </div>

       </div>
       <div className=" ">
       <Player
  autoplay
  loop
  src="https://assets3.lottiefiles.com/packages/lf20_XZ3pkn.json"
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

export default SignUp;