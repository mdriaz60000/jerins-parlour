import { useForm } from "react-hook-form";


const AddService = () => {

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
        
         
         <div className="m-6 bg-[#E5E5E5] p-4  ">
        <form  onSubmit={handleSubmit(onSubmit)}>
        <section className=" ">
       <p>Service title</p>
     <input  type="text" placeholder="fullName" className="input input-bordered input-info w-full max-w-xs"  {...register("fullName")} />
    
        <p> upload image</p>
        <input  type="file" placeholder="upload" className=" file-input file-input-bordered file-input-success w-full max-w-xs"  {...register("upload")} />

        <div className=" mt-3">
            <p>Description</p>
      <textarea {...register("description")} className="  textarea w-full max-w-xs" placeholder="Description"></textarea>
     </div>

     </section>
    
     <div className="mt-4">
     <button className=" btn btn-sm px-6 bg-[#F63E7B]" >Submit</button>
     </div>
     </form>
                  
     </div>
       

        </div>
    );
};

export default AddService;