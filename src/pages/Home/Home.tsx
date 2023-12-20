import { Outlet, Link } from "react-router-dom";
import home_logo from '../../assets/images/home_logo.png';
import "./styles/Home.css";

const Layout = () => {
  return (
    <>
        <div className="main_div">
            <img src= {home_logo} className="main_image" alt="Hangman game main logo"></img>
            
            <Link to="/Hangman">
                <button className="main_button">Iniciar</button>
            </Link>            
        </div>

      <Outlet />
    </>
  )
};

export default Layout;