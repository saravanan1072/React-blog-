

import Template  from "../../common/Template";
import { ApiCaller } from "../../utility/ApiCaller";
import { useEffect ,useState} from "react";
import bollyfirst from '../../images/food.jpg';
import Nav from "../../Route/navgation/Nav";
import Title from "../../Route/navgation/Title";


const Bollywood=()=>{
   const state={
        imageurl:bollyfirst,
        title:"Wooden table with food, top view",
        url:"https://www.dreamstime.com/wooden-table-food-top-view-cafe-image102532611"
        
    }
const [data,setData]=useState([])
    useEffect(()=>{
        ApiCaller({
           url:"https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=90b5566f6c314946a71f7e0be8d307c4 ",
            method:'get',

        })
        .then((Response)=>{
            setData(Response.articles)
           

        })
        .catch((rej)=>{
            console.log(rej);
        })
        .finally(()=>{
            console.log("done");
        })
    },[]);
console.log(typeof data);
console.log(data);


    return(
        <>
        <Title></Title>
        <Nav></Nav>
        <Template name={"Food"}  Apidata={data} second={state} />
        </>
       
    )
}
export default Bollywood;