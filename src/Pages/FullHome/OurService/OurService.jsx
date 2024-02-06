import { useEffect } from "react";
import { useState } from "react";


const OurService = () => {
    const [services, setServices] = useState([])
    useEffect(()=>{
        fetch('services.json')
        .then(res =>res.json())
        .then(data =>setServices(data))
    },[])

    const handleService = () =>{
        
        // services?.map(service =><div key={service.id}>
        //      <div className="card px-8 h-[360px] text-black  bg-[#ffffff] shadow-md">
        //       <div className="card-body">
        //         <img className=" h-28 w-28 mx-auto" src={service.img} alt="" />
        //         <h2 className="card-title text-[#111430]">{service.title}</h2>
        //       <h3 className="text-[#F63E7B]">${service.price}</h3>
        //        <p>{service.details}</p>
    
        //     </div>
        //     </div> 
        // </div>)
    }
    return (
        <div className=" bg-[#ffffff]">
           <h1 className=" text-[#111430] text-center  font-bold text-[43px] md:py-12">Our Awesome <span className=" text-[#F63E7B]">Services</span></h1> 
           <div className=" grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
            {
                services?.slice(0,3).map(service =><div key={service.id}>
                    <div className="card px-8 h-[360px] text-black  bg-[#ffffff] shadow-md">
              <div className="card-body">
                <img className=" h-28 w-28 mx-auto" src={service.img} alt="" />
                <h2 className="card-title text-[#111430]">{service.title}</h2>
              <h3 className="text-[#F63E7B]">${service.price}</h3>
               <p>{service.details}</p>
    
            </div>
            </div> 
                </div>)               
            }           
           </div>
           <div className=" text-center p-6">
           <button onClick={handleService} className=" btn bg-[#F63E7B]">Explore more</button>
           </div>
        </div>
    );
};

export default OurService;