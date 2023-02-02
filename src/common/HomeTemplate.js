import "./style.css";
import { useNavigate } from "react-router-dom";
const Template = (props) => {
  const navigate = useNavigate();
  const { name, Apidata, second } = props;

  const handleNavigation = (item, index) => {
    console.log(item);
    console.log(`/${name}/a/${index}`);
    navigate(`/${name}/a/${index}`, { state: item });
  };

  return (
    <div>
      <div className="index">
        <div className="title-name">
          {name} <hr className="hr" />
        </div>
        <div className="title-second-name">
          Top post <hr className="hr" />
        </div>
      </div>

      <div className="Grid-template">
        <div className="flex-Blog1">
          {Apidata.slice(6, 12).map((item, index) => {
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
        
        <div className="post-three">
            <span className="center">advertisement</span>{" "}
          </div>
        <div className="flex-Blog2">
          <div className="post-one">
            <img className="static" src={second.imageurl} alt="images" />
            <h3 className="post-one-title"> {second.title}</h3>
            <p className="post-one-time">{Apidata[0]?.publishedAt}</p>
          </div>
          <hr />
          <div>
            <div className="post-two">
              {Apidata.slice(13, 16).map((item, index) => {
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
    </div>
  );
};
export default Template;
