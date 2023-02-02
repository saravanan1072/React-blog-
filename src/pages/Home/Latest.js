import "./Latest.css";
import {useNavigate} from 'react-router-dom'

import { useEffect ,useState} from "react";
import { ApiCaller } from "../../utility/ApiCaller";
export default function Latest(){




    const navigate=useNavigate();



  const [data,setData]=useState([])
  useEffect(()=>{
    ApiCaller({
        url:"https://newsapi.org/v2/everything?domains=wsj.com&apiKey=8d69664814e9481094f08138747bb2a2",
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

    return(
        <div id="latest">
            <h2>The Latest</h2><hr/>
            <div id="grid-container">
                <div className="child child1">
                    <img src={data[5]?.urlToImage} alt="tree"
                               onClick={() => handleNavigation(data[5], 5)}
                               />
                    <h2>Joshua Tree Overnight Adventure</h2>
                    <p>Gujarat is vastly underrated and it’s a mystery to us why the region isn’t more well-known as a tourist destination. It has a plethora of temples and palaces</p>
                    <p><b>Travel</b> / August 21 2017</p>
                    </div>
                <div className="child child2">
                    <img src={data[3]?.urlToImage} alt="tree"            onClick={() => handleNavigation(data[3], 3)}
/>
                    <h2>Joshua Tree Overnight Adventure</h2>
                    <p>Gujarat is vastly underrated and it’s a mystery to us why the region isn’t more well-known as a tourist destination. It has a plethora of temples and palaces</p>
                    <p> <b>Travel</b> / August 21 2017</p>
                    </div>
                <div className="child child3">
                    <img src={data[4]?.urlToImage} alt="tree"            onClick={() => handleNavigation(data[4], 4)}
/>
                    <h2>Joshua Tree Overnight Adventure</h2>
                    <p>Gujarat is vastly underrated and it’s a mystery to us why the region isn’t more well-known as a tourist destination. It has a plethora of temples and palaces</p>
                    <p><b>Travel</b> / August 21 2017</p>
                </div>
               
            </div>
        </div>
    )
}