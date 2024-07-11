import { useSelector } from "react-redux"
import Loading from "../Layouts/Loading/Loading";


const ChatHome = () => {
    
    const { isAuthenticated, loading, user } = useSelector(state => state.user);

    return (
        loading ? <Loading /> :
        <div>ChatHome</div>
    )
}

export default ChatHome