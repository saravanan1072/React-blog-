
import {BrowserRouter ,Routes,Route} from 'react-router-dom';
import Home from "../pages/Home/Home";
import Hollywood from '../pages/Hollywood/Hollywood';
import Bollywood from '../pages/Bollywood/Bollywood';
import Fitness from '../pages/Fitness/Fitness';
import Food from '../pages/Food/Food';
import Technology from '../pages/Technology/Technology';
import ArticleContent from '../common/ArticleContent';




const Routers=()=>{
    return(
        <>
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/hollywood" element={<Hollywood/>}/>
            <Route path="/bollywood" element={<Bollywood/>}/>
            <Route path="/fitness" element={<Fitness/>}/>
            <Route path="/food" element={<Food/>}/>
            <Route path="/technology" element={<Technology/>}/>

            {/* dynamic routing */}

            <Route path='/home/a/:id' element={<ArticleContent/>}/>

          
            <Route path='/Bollywood/a/:id' element={<ArticleContent/>}/>
            <Route path='/Hollywood/a/:id' element={<ArticleContent/>}/>
            <Route path='/Food/a/:id' element={<ArticleContent/>}/>
            <Route path='/Fitness/a/:id' element={<ArticleContent/>}/>
            <Route path='Technology/a/:id' element={<ArticleContent/>}/>






        </Routes>
        </BrowserRouter>
        </>

    )
}

export default Routers;