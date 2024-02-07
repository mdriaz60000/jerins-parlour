import Banner from "../Banner/Banner";
import OurService from "../OurService/OurService";
import Profetional from "../Profetional/Profetional";
import SendMessage from "../SendMessage/SendMessage";
import TestyMonials from "../TestyMonials/TestyMonials";


const Home = () => {
    return (
        <div className="text-[#ffffff]">
          <Banner></Banner>
          <OurService></OurService>
          <Profetional></Profetional>
          <TestyMonials></TestyMonials>
          <SendMessage></SendMessage>
       
          
         
        </div>
    );
};

export default Home;