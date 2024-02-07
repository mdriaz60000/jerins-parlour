import { useForm } from "react-hook-form";



const SendMessage = () => {
 
    const { register, handleSubmit } = useForm()
    const onSubmit = (data) =>{ 
        console.log(data)
    }
   
//
    return (
        <div className=" md:pt-16  text-[#111430]  bg-[#E5E5E5]  font-bold text-[38px] ">
           <h3 className=" text-center" >Let us handle your </h3> 
           <h3 className="text-center" > project, professionally</h3> 

           <section>
           <form  onSubmit={handleSubmit(onSubmit)}>
      <section className="flex gap-2 w-1/2 mx-auto   ">
        <div>
        <input  type="text" placeholder="fullName" className="input input-bordered input-info w-full max-w-xs"  {...register("fullName")} />
        
        <input  type="email" placeholder="Your-email" className="input input-bordered input-info w-full max-w-xs"   {...register("email")} />
        </div>
        <div>
        <input  type="text" placeholder="lastName" className="input input-bordered input-info w-full max-w-xs"   {...register("lastName")} />
        <input  type="text" placeholder="your-Number" className="input input-bordered input-info w-full max-w-xs"   {...register("yourNumber")} />
      
        </div>
      </section>
    <div className=" w-1/2 mx-auto">
    <textarea {...register("yourMessage")} className=" mt-4 textarea w-full   md:h-40" placeholder="your message"></textarea>
    </div>
        <div className=" text-center p-7">
        <button className=" btn bg-[#F63E7B]" >Send Message</button>
        </div>
    </form>
           </section>           
        </div>
    );
};

export default SendMessage;