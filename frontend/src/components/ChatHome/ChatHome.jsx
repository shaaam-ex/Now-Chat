import { useSelector } from "react-redux"
import Loading from "../Layouts/Loading/Loading";

import './ChatHome.css';
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";


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
            </div>

            <div className="right-container-chat-home-page">
            </div>
        </div>
    )
}

export default ChatHome