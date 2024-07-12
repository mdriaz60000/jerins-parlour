import { Rating } from "@smastrom/react-rating";
import '@smastrom/react-rating/style.css'
import { useEffect } from "react";
import { useState } from "react";


const TestyMonials = () => {

const [testimonials, setTestimonials] = useState([])



useEffect(()=>{
fetch('testimonials.json')
.then(res =>res.json())
.then(data =>setTestimonials(data))
},[])

    return (   
        <>
        <h3 className="text-[#111430] bg-[#E5E5E5] text-center  font-bold text-[43px] md:py-10">Testimonials</h3>
       
       <section className=" bg-[#E5E5E5]  grid gap-12 md:pt-16 px-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
       {
            testimonials?.map(testimonial =><div key={testimonial.id}>

         <div className=" p-5 px-8  text-black  bg-[#ffffff] ">            
              <div className=' flex gap-5'>
              <div className="avatar">
         <div className="w-16 h-16 rounded-full">
            <img src={testimonial.img} />
             </div>
            </div>
              <section>
              <h2 className="font-bold ">{testimonial.name}</h2>
              <h3 className="text-[#F63E7B]">{testimonial.post}</h3>
               </section>
              </div>
               <p>{testimonial.details}</p>
               <p className=" pt-3"> <Rating 
      style={{ maxWidth: 140 }}
      value={testimonial.rating}
      readOnly
    /></p>
            </div> 
            </div>)
        }
       </section>
      
      
        
        
        
      
    </>

    );
};

export default TestyMonials;