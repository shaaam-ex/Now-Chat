import './Landing.css';

const Landing = () => {
    return (
        <>
            <div className="main-container-landing-page">
                <div className="first-section-landing-page">
                    <div className="first-inner-first-section-landing-page">
                        <h1>Chat anywhere, Anytime <br /> Seamlessly</h1>
                        <img src="https://res.cloudinary.com/dm1hjjfsz/image/upload/v1720108216/Now/Now-logo/vector/default-monochrome_vrthcc.svg" alt="Now Logo Main" />
                    </div>
                </div>

                <div className="second-section-landing-page">
                    <div className="first-inner-second-section-landing-page">
                    <img src="https://img.freepik.com/free-photo/medium-shot-smiley-family-with-tablet_23-2148936768.jpg?size=626&ext=jpg&ga=GA1.1.523418798.1710374400&semt=ais" alt="Happy Family" />
                        <h1>Chat with your friends, family, and colleagues <br /> with ease</h1>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Landing;