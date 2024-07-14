import { useSelector } from "react-redux"
import Loading from "../Layouts/Loading/Loading";

import './ChatHome.css';


const ChatHome = () => {
    
    const { isAuthenticated, loading, user } = useSelector(state => state.user);

    return (
        loading ? <Loading /> :
        <div className="main-container-chat-home-page">
            <p>Testing this page</p>
            {
                console.log("Am I here")
            }
        </div>
    )
}

export default ChatHome