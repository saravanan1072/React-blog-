import Template  from "../../common/Template";
import { ApiCaller } from "../../utility/ApiCaller";
import { useEffect ,useState} from "react";
import bollyfirst from '../../images/techfirst.jpg';
import Nav from "../../Route/navgation/Nav";
import Title from "../../Route/navgation/Title";


const Bollywood=()=>{
   const state={
        imageurl:bollyfirst,
        title:"Using Hybrid Cloud To Meet The Challenges Of  Data Architectures",
        
    }
const [data,setData]=useState([])
    useEffect(()=>{
        ApiCaller({
           url:"https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=8d69664814e9481094f08138747bb2a2",
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
        <Template name={"Technology"}  Apidata={data} second={state} />
        </>
       
    )
}
export default Bollywood;