//import axios from "axios";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
// import Swal from "sweetalert2";

const Book = () => {
  const [selectValue, setSelectValue] = useState("hair");
  const [price, setPrice] = useState(0);

  const { register, handleSubmit } = useForm();

  const onSubmit = async (data) => {
    const info = {
        ...data,selectValue
    }
    console.log(info);

    // axios.post('http://localhost:3000/product', info)
    // .then(data=>console.log(data.data))
    // if(data){
    //   Swal.fire({
    //     title: "success?",
    //     text: "That added successfully",
    //     icon: "success"
    //   });
    // }
    console.log(info);
    
     
     
      
if  (info) {
  fetch("http://localhost:3000/customer/",  {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(info),
  })
      // .then((res) => res.json())
    .then((newdata) => {
      console.log(newdata);
      // toast('successfully order')
      alert("You clicked the button!");
    });
    
}

  };

  useEffect(() => {
    if (selectValue === "face") {
      setPrice(1000);
    }
    if (selectValue === "hair") {
      setPrice(900);
    }
    if (selectValue === "skin") {
      setPrice(1300);
    }
  }, [selectValue]);
  console.log(selectValue);

  return (
    <div className="  text-[#111430]  ">
      <h3 className=" font-bold text-3xl pb-3">Book </h3>
      <section>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="">
            <input
              type="text"
              placeholder="Name"
              className=" text-green-600 input input-bordered input-info w-full max-w-xs"
              {...register("name")}
            />
          </div>
          <div className="py-4">
            <input
              type="email"
              placeholder="Your-email"
              className=" text-green-600 input input-bordered input-info w-full max-w-xs"
              {...register("email")}
            />
          </div>
          <div>
            <select
              onChange={(e) => setSelectValue(e.target.value)}
              className="input input-bordered text-green-600 input-info w-full max-w-xs"
            //   {...register("services")}
            >
              <option value="face">Anti Age Face Treatment</option>
              <option value="hair">Hair Color & Styleing</option>
              <option value="skin">Skin Care Treatment</option>
            </select>
          </div>
          <section>
            <p className="font-bold py-2">Pay With </p>
            <div className=" flex  gap-2">
              <h2>
                {" "}
                <input
                  className=" w-6 h-6 text-green-600 "
                  {...register("Developer", { required: true })}
                  type="radio"
                  value="Yes"
                />
              </h2>
              <h2>Credit Cart</h2>

              <p className="ml-4">
                {" "}
                <input
                  className=" w-6 h-6 text-green-600  "
                  {...register("Developer", { required: true })}
                  type="radio"
                  value="No"
                />
              </p>
              <p>Paypal</p>
            </div>
            <div>
              <input
                type="number"
                placeholder="Credit Cart"
                className=" text-green-600 input input-bordered   input-info w-full max-w-xs"
                {...register("creditCart")}
              />
            </div>
            <div className="flex gap-3 py-2">
              <input
                type="text"
                placeholder="MM/YY"
                className=" text-green-600 input input-bordered input-info w-full max-w-[154px]"
                {...register("date")}
              />
              <input
                type="text"
                placeholder="CVC"
                className=" text-green-600 input input-bordered input-info w-full max-w-[154px]"
                {...register("cvs")}
              />
            </div>
          </section>
          {/* btn section */}
          <section className=" flex gap-4 py-2 items-center">
            <p>your service charged ${price}tk</p>
            <div className="">
              <button className=" btn btn-sm bg-[#F63E7B] px-8">Pay</button>
            </div>
          </section>
        </form>
      </section>
     
    </div>
  );
};

export default Book;
