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

    const navigate = useNavigate();

    let [friends, setFriends] = useState([
        {
            name: 'Hassaan Naushad',
            profileimgUrl: 'https://scontent.fisb5-1.fna.fbcdn.net/v/t39.30808-1/347397970_289099423531073_3789015277106402604_n.jpg?stp=dst-jpg_s200x200&_nc_cat=107&ccb=1-7&_nc_sid=0ecb9b&_nc_ohc=F-qBzmVPq28Q7kNvgEkCogb&_nc_ht=scontent.fisb5-1.fna&oh=00_AYCgAI6LG1mebS1pGtLATK_WFRDWDIRRANFlTQpz2oKfYQ&oe=669CA14A'
        },
        {
            name: 'Zain Malik',
            profileimgUrl: 'https://scontent.fisb5-2.fna.fbcdn.net/v/t39.30808-1/439159181_825177422810823_6050681095915403484_n.jpg?stp=dst-jpg_s200x200&_nc_cat=104&ccb=1-7&_nc_sid=0ecb9b&_nc_ohc=iHqznlI2eLYQ7kNvgEJ55mX&_nc_ht=scontent.fisb5-2.fna&oh=00_AYC1TcwVviGMPKJPfmoGU1I0-lXcUTtdAdhsN15KwOi2nw&oe=669C77AC'
        },
        {
            name: 'Muhammad Ebad',
            profileimgUrl: 'https://scontent.fisb5-2.fna.fbcdn.net/v/t39.30808-1/448680290_2022316958170712_1089718321175194788_n.jpg?stp=dst-jpg_p200x200&_nc_cat=110&ccb=1-7&_nc_sid=0ecb9b&_nc_ohc=R1MAu1Rd4aEQ7kNvgHJdrmN&_nc_ht=scontent.fisb5-2.fna&oh=00_AYDKSOIm7bbbk2vrOvlSpOsE5E-3NCss8-2xtFXbgQwM6w&oe=669C93E8'
        },
    ])

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
        <head>
            <Meta title="Chat" />
        </head>
        
        <body>
            <main>
                <div className="main-container-chat-home-page">
                    <div className="left-container-chat-home-page">
                        <div className="current-user-top-left-container">
                            <img src={"https://scontent.fisb5-2.fna.fbcdn.net/v/t39.30808-1/406478511_2111345645882145_1908622622939664747_n.jpg?stp=dst-jpg_p200x200&_nc_cat=111&ccb=1-7&_nc_sid=0ecb9b&_nc_ohc=JGSfoC9OElUQ7kNvgEw__eQ&_nc_ht=scontent.fisb5-2.fna&oh=00_AYB-e-aaFGbeZ2Z22db9VQa4xqsc9ikUQ6eOP6OMsmym8g&oe=669C7202"} alt="User Profile Image" />
                    
                            <div className="inner-container-current-user-top-left">
                                <h3>{user.name}</h3>
                                <Link className="small-button-transparent" to={'/'}><PiGearFill /></Link>
                            </div>
                        </div>

                        <div className="friends-chat-container-left">
                            {
                                friends.map(curr => (
                                    <ConnectedUser name={curr.name} profileimgUrl={curr.profileimgUrl} />
                                ))
                            }
                        </div>
                    </div>

                    <div className="right-container-chat-home-page">
                    </div>
                </div>
            </main>
        </body>
        </>
    )
}

export default ChatHome