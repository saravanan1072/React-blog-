import Template  from "../../common/Template";
import { ApiCaller } from "../../utility/ApiCaller";
import { useEffect ,useState} from "react";
import bollyfirst from '../../images/holly.webp';
import Nav from "../../Route/navgation/Nav";
import Title from "../../Route/navgation/Title";


const Bollywood=()=>{
   const state={
        imageurl:bollyfirst,
        title:"Top 5 most expensive Hollywood movies made to date",
        url:""
        
    }
const [data,setData]=useState([])
    useEffect(()=>{
        ApiCaller({
           url:"https://newsapi.org/v2/everything?domains=wsj.com&apiKey=90b5566f6c314946a71f7e0be8d307c4",
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
        <Template name={"Hollywood"}  Apidata={data} second={state} />
        </>
       
    )
}
export default Bollywood;