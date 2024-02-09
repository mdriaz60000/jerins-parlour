import { useForm } from "react-hook-form";


const Book = () => {

    const { register, handleSubmit } = useForm()
    const onSubmit = (data) =>{ 
        console.log(data)
    }

    return (
        <div className="  text-[#111430]  ">
           <h3 className=" font-bold text-3xl pb-3" >Book </h3>     
           <section>
           <form   onSubmit={handleSubmit(onSubmit)}>
          <div className="">
          <input  type="text" placeholder="Name" className="input input-bordered input-info w-full max-w-xs"  {...register("name")} />
          </div>
         <div className="py-4">
         <input  type="email" placeholder="Your-email" className="input input-bordered input-info w-full max-w-xs"   {...register("email")} />
         </div>   
          <div>
          <select className="input input-bordered text-white input-info w-full max-w-xs" {...register("services")}>
        <option value="face">Anti Age Face Treatment</option>
        <option value="hair">Hair Color & Styleing</option>
        <option value="skin">Skin Care Treatment</option>
      </select> 
            </div> 
            <section>
                <p className="font-bold py-2">Pay With </p>
             <div className=" flex gap-2">
             <h2> <input className=" w-6 h-6" {...register("Developer", { required: true })} type="radio" value="Yes" /></h2>
            <h2>Credit Cart</h2>
            
            <p className="ml-4"> <input className=" w-6 h-6 " {...register("Developer", { required: true })} type="radio" value="No" /></p>
            <p>Paypal</p>
             </div>
             <div>
         <input  type="number" placeholder="Credit Cart" className="input input-bordered input-info w-full max-w-xs"   {...register("creditCart")} />
         </div> 
         <div className="flex gap-3 py-2">
         <input  type="text" placeholder="MM/YY" className="input input-bordered input-info w-full max-w-[154px]"   {...register("creditCart")} />
         <input  type="text" placeholder="CVC" className="input input-bordered input-info w-full max-w-[154px]"   {...register("creditCart")} />
         </div>
            </section>
        {/* btn section */}
        <section className=" flex gap-4 py-2 items-center">
            <p>your service charged $1000 tk</p>
            <div className="">
        <button className=" btn btn-sm bg-[#F63E7B] px-8" >Pay</button>
        </div>
        </section>
    </form>
           </section>           
        </div>
    );
};

export default Book;