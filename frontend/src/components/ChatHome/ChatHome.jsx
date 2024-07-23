import { useSelector } from "react-redux"
import Loading from "../Layouts/Loading/Loading";

import './ChatHome.css';
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

import { Link } from "react-router-dom";

import { PiGearFill } from "react-icons/pi";
import Meta from "../Layouts/Meta/Meta";
import ConnectedUser from "../Layouts/chat/ConnectedUser/ConnectedUser";


const ChatHome = () => {
    
    const { isAuthenticated, loading, user } = useSelector(state => state.user);

    const [currentChat, setCurrentChat] = useState(null);

    const navigate = useNavigate();

    let [friends, setFriends] = useState([
        {
            name: 'Hassaan Naushad',
            profileimgUrl: 'https://res.cloudinary.com/dm1hjjfsz/image/upload/v1721754451/Now/Now-Data/hassaan_ruh1l9.jpg',
            id: 0
        },
        {
            name: 'Zain Malik',
            profileimgUrl: 'https://res.cloudinary.com/dm1hjjfsz/image/upload/v1721754450/Now/Now-Data/zain_wzb1v3.jpg',
            id: 1
        },
        {
            name: 'Muhammad Ebad',
            profileimgUrl: 'https://res.cloudinary.com/dm1hjjfsz/image/upload/v1721754605/Now/Now-Data/ebad_oixtd7.jpg',
            id: 2
        },
    ])

    const updateChatContainer = (id) => {
        console.log(id);
    }

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
        <>
            <Meta title="Chat" />
            <main>
                <div className="main-container-chat-home-page">
                    <div className="left-container-chat-home-page">
                        <div className="current-user-top-left-container">
                            <img src={"https://res.cloudinary.com/dm1hjjfsz/image/upload/v1721754450/Now/Now-Data/me_b5bpbm.jpg"} alt="User Profile Image" />
                    
                            <div className="inner-container-current-user-top-left">
                                <h3>{user.name}</h3>
                                <Link className="small-button-transparent" to={'/'}><PiGearFill /></Link>
                            </div>
                        </div>

                        <div className="friends-chat-container-left">
                            {
                                friends.map(curr => (
                                    <div key={curr.id} onClick={() => updateChatContainer(curr.id)}>
                                        <ConnectedUser key={curr.id} name={curr.name} profileimgUrl={curr.profileimgUrl} />
                                    </div>
                                ))
                            }
                        </div>
                    </div>

                    <div className="right-container-chat-home-page">
                        <h1>Start Chatting Now!</h1>
                        <p>Click on any of your friends profile to start chatting.</p>
                    </div>
                </div>
            </main>
        </>
    )
}

export default ChatHome