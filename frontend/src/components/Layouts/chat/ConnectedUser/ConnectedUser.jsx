import './ConnectedUser.css';

const ConnectedUser = (props) => {
    return (
        <>
            <div className="main-container-friend-left-profile">
                <img src={props.profileimgUrl} alt="" />

                <div className="inner-contaienr-friend-left-container">
                    <h3>{props.name}</h3>
                    <p>Recent Message</p>
                </div>
            </div>
        </>
    )
}

export default ConnectedUser