import './Nav.css';
import {Link} from 'react-router-dom';
const Nav=()=>{
    return(
        <div>
            
            <div className='nav'>
            <ul>
                     <li><Link to="/">Home</Link></li>
                    <li><Link to="/bollywood">bollywood</Link></li>
                    <li><Link to="/technology">technology</Link></li>
                     <li><Link to="/hollywood">hollywood</Link></li>
                     <li><Link to="/fitness">fitness</Link></li>
                     <li><Link to="/food">food</Link></li>

                 </ul>
            </div>
           <hr/> <br/><br/><br/>
        </div>
                 

    )
}
export default Nav;