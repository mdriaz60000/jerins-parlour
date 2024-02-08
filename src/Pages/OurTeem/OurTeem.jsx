import { useEffect, useState } from "react";


const OurTeem = () => {
    const [teems, setTeems] = useState([])

    useEffect(()=>{
        fetch('teems.json')
        .then(res =>res.json())
        .then(data =>setTeems(data))
    },[])
    return (
        <div className=" p-9 bg-[#E5E5E5] text-[#111430] grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
           {
            teems?.map(teem =><div key={teem.id}>
                <div className="card  glass">
  <figure><img className=" md:h-56 w-full" src={teem.img} alt="car!"/></figure>
  <div className="card-body">
    <h2 className="card-title">{teem.name}</h2>
    <p>{teem.experience} year</p>
    
  </div>
</div>
            </div>)
           }
        </div>
    );
};

export default OurTeem;