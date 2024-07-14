import { useSelector } from "react-redux"
import Loading from "../Layouts/Loading/Loading";
import { useLocation } from "react-router-dom";


const ChatHome = () => {
    
    const { isAuthenticated, loading, user } = useSelector(state => state.user);

    return (
        loading ? <Loading /> :
        <>
        </>
    )
}

export default ChatHome