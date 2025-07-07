import { use } from "react";
import "../styles/home.css"
import { FaRegUser } from "react-icons/fa";
import { IoSearchOutline } from "react-icons/io5";
import {Outlet,useNavigate} from "react-router-dom";
function Home(){
    const navigate=useNavigate();
    return (
        <div>
            <div className="nav">
                <div className="profile-icon"><FaRegUser onClick={() => navigate("/profile")}/></div>
                <div className="heading">
                    <h2>Jobhunt</h2>
                    <div><IoSearchOutline className="search-icon"/></div>
                </div>
            </div>
            <div className="body">
                <div className="nav2">
                    <div><button onClick={() => navigate("/home")} >Jobs</button></div>
                    <div><button onClick={() => navigate("/home/connect")}>Connect</button></div>
                    <div><button>About us</button></div>
                </div>
                <Outlet/>
            </div>

        </div>
    )
}
export default Home;