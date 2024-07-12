
import { useLoaderData } from "react-router-dom";

const BookingList = () => {

  const bookings = useLoaderData()
  
    return (
        <div>
         <div className="  overflow-x-auto">
  <table className="table table-zebra">
    {/* head */}
    <thead className=" text-red-600">
      <tr>
        <th></th>
        <th>Name</th>
        <th>Email</th>
        <th>Service</th>
      </tr>
    </thead>
    <tbody>
      
    {
     bookings.map((booking, index) => (
    <tr key={index}>
      <th>{index + 1}</th>
      <td>{booking.name}</td>
      <td>{booking.email}</td>
      <td>{booking.selectValue}</td>
    </tr>
  ))
}
  
     

    </tbody>
  </table>
</div>
        </div>
    );
};

export default BookingList;