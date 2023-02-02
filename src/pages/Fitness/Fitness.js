
import Template  from "../../common/Template";
import { ApiCaller } from "../../utility/ApiCaller";
import { useEffect ,useState} from "react";
import bollyfirst from '../../images/fit.png';
import Nav from "../../Route/navgation/Nav";
import Title from "../../Route/navgation/Title";


const Bollywood=()=>{
   const state={
        imageurl:bollyfirst,
        title:"Watch Martins Licis Train With Lifter Rauno Geinla",
        url:"https://www.menshealth.com/fitness/a40887148/strongman-martins-licis-rauno-heinla-deadlift-workout/"
        
    }
const [data,setData]=useState([])
    useEffect(()=>{
        ApiCaller({
           url:"https://newsapi.org/v2/top-headlines?country=in&category=health&apiKey=90b5566f6c314946a71f7e0be8d307c4",
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
        <Template name={"Fitness"}  Apidata={data} second={state} />
        </>
       
    )
}
export default Bollywood;