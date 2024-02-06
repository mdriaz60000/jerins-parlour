import face  from "../../../assets/images/engin-akyurt-g-m8EDc4X6Q-unsplash 1.png"

const Profetional = () => {
    return (
        <div>
            <div className="hero  bg-[#E5E5E5] text-[#111430]">
  <div className="hero-content flex-col lg:flex-row-reverse gap-32">
    <div className="text-center lg:text-left">
      <h1 className="text-[40px] font-bold">Let us handle your  </h1>
      <h3  className="text-[40px] font-bold">  screen  <span className="text-[#F63E7B]"> professionally</span></h3>
     
     
       <p className=" w-[420px]">
     With well written codes, we build amazing apps for all platforms, mobile and web apps in general ipsum.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum.
     </p>
         <div className=" mb-2 flex gap-9"> 
           <section>
            <p className=" text-[#F63E7B] text-3xl font-bold">500+</p>
            <h1> Happy customer</h1>
           </section>

           <section>
            <p className=" text-[#F63E7B] text-3xl font-bold">16+</p>
            <h1>total services</h1>
           </section>
       
            </div>
    </div>
    <div className="card shrink-0 w-full max-w-sm  ">
     <img src={face} alt="" />
    </div>
  </div>
</div>
        </div>
    );
};

export default Profetional;