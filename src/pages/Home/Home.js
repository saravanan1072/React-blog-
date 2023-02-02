
import Latest from "./Latest";
import Title from "../../Route/navgation/Title";
import Nav from "../../Route/navgation/Nav";
import LatestStorie from './LatestStorie'

import Hello from "./Hello";


import {useNavigate} from 'react-router-dom'

import "./Home.css";
import { useEffect ,useState} from "react";
import { ApiCaller } from "../../utility/ApiCaller";

function Home() {

  const [data,setData]=useState([]);
  const navigate=useNavigate();
  useEffect(()=>{
    ApiCaller({
       url:"https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=8d69664814e9481094f08138747bb2a2",
        method:'get',

    })
    .then((Response)=>{
      console.log(Response)
        setData(Response.articles)
       

    })
    .catch((rej)=>{
        console.log(rej);
    })
    .finally(()=>{
        console.log("done");
    })
},[]);

const handleNavigation = (item, index) => {
  console.log(item);
  navigate(`/home/a/${index}`, { state: item });
};


  return (
    <>
    <Title></Title>
    <Nav></Nav>
      <div id="Home">
        <div>
          <img className="one" src={data[2]?.urlToImage} alt="nature" 
           onClick={() => handleNavigation(data[2], 2)}
            />
          <div className="textOne">
            Title of Veticall gallery
            <div className="text-One-last">Travel/january 15 2023</div>
          </div>
        </div>
        <div>
          <img className="second" src={data[3]?.urlToImage} alt="nature" 
           onClick={() => handleNavigation(data[3], 3)}/>
          <div className="textSecond">
            The sound cloud <br /> You loved is doomed
            <div className="text-Second-last">Travel/january 15 2023</div>
          </div>
        </div>
        <div>
          <img className="third" src={data[3]?.urlToImage} alt="nature"
           onClick={() => handleNavigation(data[3], 3)} />
          <div className="textThird">
            The sound cloud <br /> You loved is doomed
            <div className="text-Third-last">Travel/january 15 2023</div>
          </div>
        </div>
        <Latest />
        
        <Hello/>
        <LatestStorie/>
      
      </div>
    </>
  );
}

export default Home;
