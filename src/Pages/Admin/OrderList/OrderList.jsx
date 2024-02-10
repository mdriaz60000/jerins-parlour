

const OrderList = () => {
    return (
       <section>
         <div className=" flex justify-between p-5 bg-[#E5E5E5] text-2 font-bold">
          <h2 className=" ">Order List</h2> 
          <h2 className=" ">saif ahamed</h2>            
        </div>
        {/* table */}
        <div className="overflow-x-auto">
  <table className="table table-md">
    <thead>
      <tr className=" text-white">
       
        <th>Name</th> 
        <th>Email Id</th> 
        <th>Service</th> 
        <th>Pay With</th> 
        <th>Status</th>   
          
      </tr>
    </thead> 
    <tbody>
      <tr> 
        <td>Quality Control Specialist</td> 
        <td>Littel, Schaden and Vandervort</td> 
        <td>Canada</td> 
        <td>12/16/2020</td> 
        <td>12/16/2020</td> 
      </tr>
      <tr>
        <td>Hart Hagerty</td> 
        <td>Desktop Support Technician</td> 
        <td>Zemlak, Daniel and Leannon</td> 
        <td>United States</td> 
        <td>12/5/2020</td> 
        
      </tr>
      <tr>
       
        <td>Brice Swyre</td> 
        <td>Tax Accountant</td> 
        <td>Carroll Group</td> 
        <td>China</td> 
        <td>8/15/2020</td> 
   
      </tr>
      <tr>
       
        <td>Marjy Ferencz</td> 
        <td>Office Assistant I</td> 
        <td>Rowe-Schoen</td> 
        <td>Russia</td> 
        <td>3/25/2021</td> 
        
      </tr>
      <tr>
         
        <td>Yancy Tear</td> 
        <td>Community Outreach Specialist</td> 
        <td>Wyman-Ledner</td> 
        <td>Brazil</td> 
        <td>5/22/2020</td> 
        
      </tr>
 
    </tbody> 
    <tfoot>
      <tr>
        <th></th> 
        <th>Name</th> 
        <th>Job</th> 
        <th>company</th> 
        <th>location</th> 
        <th>Last Login</th> 
        
      </tr>
    </tfoot>
  </table>
</div>

       </section>
    );
};

export default OrderList;