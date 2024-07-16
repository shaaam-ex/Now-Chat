import { useSelector } from "react-redux"
import Loading from "../Layouts/Loading/Loading";

import './ChatHome.css';
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

import { Link } from "react-router-dom";

import { PiGearFill } from "react-icons/pi";


const ChatHome = () => {
    
    const { isAuthenticated, loading, user } = useSelector(state => state.user);

    const navigate = useNavigate();

    useEffect(() => {
        if(!isAuthenticated) {
            navigate('/login');
        }
    }, [isAuthenticated, navigate])
    
    useEffect(() => {
        let header = document.getElementById('header-container-main');
        header.style.display = 'none';
    }, [])
    

    return (
        loading ? <Loading /> :
        <div className="main-container-chat-home-page">
            <div className="left-container-chat-home-page">
                <div className="current-user-top-left-container">
                    <img src={"https://scontent.fisb5-2.fna.fbcdn.net/v/t39.30808-1/406478511_2111345645882145_1908622622939664747_n.jpg?stp=dst-jpg_p200x200&_nc_cat=111&ccb=1-7&_nc_sid=0ecb9b&_nc_ohc=JGSfoC9OElUQ7kNvgEw__eQ&_nc_ht=scontent.fisb5-2.fna&oh=00_AYB-e-aaFGbeZ2Z22db9VQa4xqsc9ikUQ6eOP6OMsmym8g&oe=669C7202"} alt="User Profile Image" />
                    
                    <div className="inner-container-current-user-top-left">
                        <h3>{user.name}</h3>
                        <Link className="small-button-transparent" to={'/'}><PiGearFill /></Link>
                    </div>
                </div>
            </div>

            <div className="right-container-chat-home-page">
            </div>
        </div>
    )
}

export default ChatHome