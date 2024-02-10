import { useForm } from "react-hook-form";


const Review = () => {
    const { register, handleSubmit } = useForm()
    const onSubmit = (data) =>{ 
        console.log(data)
    }
    return (
        <div className="      font-bold text-[38px] ">
        <form  onSubmit={handleSubmit(onSubmit)}>
   <section className=" ">
    
     <input  type="text" placeholder="fullName" className="input input-bordered input-info w-full max-w-xs"  {...register("fullName")} />
     <br />
     <input  type="text" placeholder="lastName" className="input input-bordered input-info w-full max-w-xs"   {...register("lastName")} /> 
   </section>
 <div className="">
 <textarea {...register("description")} className=" mt-4 textarea w-full max-w-xs" placeholder="Description"></textarea>
 </div>
     <div className="-mt-4">
     <button className=" btn btn-sm px-6 bg-[#F63E7B]" >Submit</button>
     </div>
 </form>
                  
     </div>
    );
};

export default Review;