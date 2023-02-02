


import {useNavigate} from 'react-router-dom'

import { useEffect ,useState} from "react";
import { ApiCaller } from "../../utility/ApiCaller";

const Hello=(()=>{
    const [data,setData]=useState([])
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

    return(
        <>
        <div className="position">
         <div className="index">
        <div className="title-name">
          Latest Article <hr className="hr" />
        </div>
        <div className="title-second-name">
          Top post <hr className="hr" />
        </div>
      </div>


      <div className="Grid-template">
        <div className="flex-Blog1">
          {data.slice(6, 10).map((item, index) => {
            return (
              <div className="childrens" key={index}>
                <img
                  className="img-size"
                  onClick={() => handleNavigation(item, index)}
                  src={item.urlToImage}
                  alt="images"
                />

                <hr className="line" />
                <div
                  className="childrens-right"
                  onClick={() => handleNavigation(item, index)}
                >
                  <h3 className="flex-title">{item.title}</h3>
                  <p className="Flex-content">{item.content}</p>
                  <p className="flex-time">{item.publishedAt}</p>
                </div>
              </div>
            );
          })}
        </div>
        </div>

        <div id="img-big">
            <img  className="img-big" src={data[18]?.urlToImage} alt="images"    onClick={() => handleNavigation(data[18], 18)}/>
        </div>

        <div className="post-three-latest">
            <span className="center">advertisement</span>{" "}
          </div>


          <div className="flex-Blog2-last">
          <div className="post-one">
            <img className="static" src={data[17]?.urlToImage} alt="images" onClick={() => handleNavigation(data[17], 17)} />
            <h3 className="post-one-title"> {data[17]?.title}</h3>
            <p className="post-one-time">{data[0]?.publishedAt}</p>
          </div>
          <hr />
          <div>
            <div className="post-two">
              {data.slice(13, 16).map((item, index) => {
                return (
                  <div className="childrens-rideside" key={index}>
                    <img
                      onClick={() => handleNavigation(item, index)}
                      className="img-resize"
                      src={item.urlToImage}
                      alt="images"
                    />
                    <hr className="line" />
                    <div
                      className="post-two-title"
                      onClick={() => handleNavigation(item, index)}
                    >
                      <h5 className="flex-title">{item.title}</h5>
                      <p className="flex-time">{item.publishedAt}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
        </div>


      

        </>

    )
});

export default Hello;