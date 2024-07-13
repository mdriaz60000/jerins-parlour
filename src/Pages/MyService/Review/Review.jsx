import { useForm } from "react-hook-form";

const Review = () => {
  const { register, handleSubmit, reset} = useForm();
  const onSubmit = (data) => {
    console.log(data);
    fetch('https://jerins-parlour-sarver.vercel.app/review',  {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((newdata) => {
          console.log(newdata);
          alert("You clicked the button!");
        reset()
        });

  };
  return (
    <div className="      font-bold text-[38px] ">
      <form onSubmit={handleSubmit(onSubmit)}>
        <section className=" ">
          <input
            type="text"
            placeholder="fullName"
            className="input input-bordered input-info w-full max-w-xs"
            {...register("fullName")}
          />
          <br />
          <input
            type="text"
            placeholder="lastName"
            className="input input-bordered input-info w-full max-w-xs"
            {...register("lastName")}
          />
        </section>
        <div className="">
          <textarea
            {...register("description")}
            className=" mt-4 text-white textarea w-full max-w-xs"
            placeholder="Description"
          ></textarea>
        </div>
        <div className="-mt-4">
          <button className=" btn btn-sm px-6 bg-[#F63E7B]">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default Review;
