import young from "../../../assets/images/beautiful-young-asian-woman-touching-her-clean-face-with-fresh-healthy-skin-isolated-white-wall-beauty-cosmetics-facial-treatment-concept 1.png"

const Banner = () => {
    return (
        <div className="hero min-h-screen bg-[#E5E5E5]">
  <div className="hero-content flex-col lg:flex-row gap-44">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl text-[#111430] font-bold">BEAUTY SALON</h1>
      <h1 className="text-5xl text-[#111430] font-bold">FOR EVERY WOMEN</h1>
      <p className="py-6 text-[#666666] w-[364px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat </p>
    </div>
    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
     <img src={young} alt="" />
    </div>
  </div>
</div>
    );
};

export default Banner;