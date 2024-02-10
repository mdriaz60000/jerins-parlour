import { useForm } from "react-hook-form";


const MakeAdmin = () => {

    const { register, handleSubmit } = useForm()
    const onSubmit = (data) =>{ 
        console.log(data)
    }  
    return (
        <div>
           <div className=" flex justify-between p-5 bg-[#E5E5E5] text-2 font-bold">
          <h2 className=" ">Add Service</h2> 
          <h2 className=" ">saif ahamed</h2>            
        </div>
        
         
         <div className="m-6  bg-[#E5E5E5] px-4 pt-4 pb-52 rounded-3xl  ">
         <p>Service title</p>
        <form className='flex gap-2'   onSubmit={handleSubmit(onSubmit)}>
      
      <div>
      
     <input  type="email" placeholder="email" className="input input-bordered input-info w-full max-w-xs"  {...register("email")} />
      </div>
     <p><button className=" btn  px-6 bg-[#F63E7B]" >Submit</button></p>
     </form>
                  
     </div>
       

        </div>
    );
};

export default MakeAdmin;