import { useParams, useLocation } from "react-router-dom";
import face from "../images/download.png";
const ArticleContent = () => {
  const param = useParams();
  const location = useLocation();
  console.log(param);
  console.log(location);
  return (
    <>
      <div className="article">
        <span id="logo-article">
          <p className="the"> The</p> <h1 className="Siren">Siren</h1>
        </span>
        <span className="getstart">Get Started</span>
      </div>
      <hr />
      <div className="body">
        <h2 className="title">{location.state.title}</h2>
        <div id="profile">
          <span>
            <img className="imgs-body" src={face} alt="images" />
            <span id="author-name">
              <h4>{location.state.author}</h4>{" "}
              <p id="time"> jan-28,2023 10mins read</p>
            </span>
          </span>
          <span className="logo-media">
            <i className="fa-brands fa-facebook"></i>
            <i className="fa-brands fa-whatsapp"></i>
            <i className="fa-brands fa-instagram"></i>
            <i className="fa-brands fa-twitter"></i>
          </span>
        </div>
        <div>
          <img id="urlimage" src={location.state.urlToImage} alt="images" />
        </div>
        <p className="content">
          {location.state.content} Lorem ipsum dolor, sit amet consectetur
          adipisicing elit. Soluta harum officia officiis. Voluptatum eum
          doloremque esse quis magni fuga, accusantium incidunt nam,
          perspiciatis ut aliquam, voluptas ad alias facilis id? Expedita
          dignissimos nihil neque officiis atque perspiciatis cumque veritatis
          blanditiis nisi, laboriosam accusamus debitis, delectus enim officia
          molestiae accusantium autem voluptatibus maiores voluptates! Magnam
          totam asperiores aperiam aliquid, maxime illo! Recusandae ipsam
          voluptate ad enim. Nulla ducimus iusto numquam nesciunt optio est
          libero! Temporibus iusto vitae ea laborum provident, praesentium
          distinctio veniam debitis voluptatibus minus sit possimus nisi quis
          aliquam. Perspiciatis perferendis ipsum hic ea tempora blanditiis!
          Nihil quis cumque officiis expedita. Unde at iusto aliquam sint ipsum
          labore consequuntur eum dicta placeat obcaecati eveniet corporis nulla
          similique, vitae accusamus? At consequatur nulla odit est pariatur
          error atque, temporibus voluptatem unde consequuntur eligendi
          molestiae blanditiis quia, tempora aliquid minima labore quas deserunt
          culpa doloremque tempore fugit magni necessitatibus nisi! Incidunt!
          Enim asperiores consectetur at odio aperiam reiciendis earum! Sunt,
          minima animi eligendi sint atque tempore officia odit esse laudantium,
          ab enim incidunt. Quo deleniti magnam perferendis doloribus debitis,
          eaque quasi. Asperiores magni id molestias ad quia consectetur sint
          ducimus vero delectus cupiditate optio repellendus fugit autem
          sapiente exercitationem repellat ratione tenetur qui, maxime
          repudiandae ipsum atque minima accusantium. Distinctio, laboriosam. Id
          deleniti sapiente voluptate quos maxime repellendus, quod pariatur
          numquam quasi, placeat debitis amet eos asperiores ex culpa tempore
          quidem. Quisquam, recusandae? Mollitia libero exercitationem eum
          quibusdam iste, saepe repudiandae. Vel ad ipsam delectus magni est ex?
          Laborum consequuntur accusamus consequatur eos neque iure, iste, illum
          adipisci maxime id impedit magnam ipsam repudiandae dolorum, odit nisi
          voluptate iusto quo eaque! Veritatis nihil corrupti vel quasi
          similique quisquam consectetur, dicta tempore illo soluta ad est
          asperiores voluptatem, natus voluptates iure eaque nisi sapiente a
          ipsa numquam necessitatibus earum laborum nostrum. Nobis! Impedit,
          maiores porro! Iste vel ab, nobis officiis porro nihil, sapiente,
          molestiae eius dignissimos asperiores voluptate ipsa unde nulla illum
          accusamus quos placeat exercitationem repudiandae. Architecto eveniet
          ab reiciendis reprehenderit! Optio eveniet repudiandae deleniti sint
          similique totam animi perspiciatis consectetur perferendis et?
          Excepturi eius, tempora, quod iste quas culpa necessitatibus eos iusto
          possimus facere doloremque laboriosam voluptas delectus tempore
          asperiores. Nobis esse aut enim asperiores aliquid reiciendis
          necessitatibus quibusdam, veritatis nulla cumque atque tempore illo
          maiores dolores qui voluptate repudiandae voluptates totam cum nemo!
          Officiis vel at ipsa enim minima. Deleniti praesentium quod
          dignissimos hic reiciendis vero quaerat fuga facilis!
        </p>
        <br />
        <h4>
          FOR MORE INFO CLICK ON BELOW Link:
          <a href={location.state.url}>click me</a>
          <br /><br />
        </h4>
        <hr />
      </div>
      
      <div id="footer">
        <div classname="footer">
          <img className="imgs-footer" src={face} alt="images" />
          <span id="author-footer">
            Written by 
            <h4>{location.state.author}</h4>
            <p id="time"> jan-28,2023 10mins read</p>
          </span>
          <hr />
        </div>
      </div>
      
    </>
  );
};
export default ArticleContent;
