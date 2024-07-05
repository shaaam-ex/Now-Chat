import './Landing.css';
import Meta from '../Layouts/Meta/Meta';
import { useEffect, useRef, useState } from 'react';

const Landing = () => {

    let secondSectionRef = useRef();
    let [secondSectionVisible, setSecondSectionVisible] = useState(false);

    let thirdSectionRef = useRef();
    let [thirdSectionVisible, setThirdSectionVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) {
                setSecondSectionVisible(true);
            }
        }, {
            threshold: 0.25
        })

        observer.observe(secondSectionRef.current);

        const observer2 = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) {
                setThirdSectionVisible(true);
            }
        }, {
            threshold: 0.10
        })

        observer2.observe(thirdSectionRef.current);

        return () => {
            observer.disconnect();
            observer2.disconnect();
        }
    }, [])

    return (
        <>
            <Meta title="Home" />
            <div className="main-container-landing-page">
                <div className="standard-section-format-landing-page first-section-landing-page">
                    <div className="first-inner-first-section-landing-page">
                        <h1>Chat anywhere, Anytime <br /> Seamlessly</h1>
                        <img src="https://res.cloudinary.com/dm1hjjfsz/image/upload/v1720108216/Now/Now-logo/vector/default-monochrome_vrthcc.svg" alt="Now Logo Main" />
                    </div>
                </div>

                <div className={`standard-section-format-landing-page second-section-landing-page ${secondSectionVisible ? "sectionVisibleLandingPage" : ""}`} ref={secondSectionRef}>
                    <div className="first-inner-second-section-landing-page">
                        <img src="https://img.freepik.com/free-photo/medium-shot-smiley-family-with-tablet_23-2148936768.jpg?size=626&ext=jpg&ga=GA1.1.523418798.1710374400&semt=ais" alt="Happy Family" />
                        <h1 className={`second-section-landing-page ${secondSectionVisible ? "sectionVisibleLandingPageH1" : ""}`} ref={secondSectionRef}>Chat with your friends, family, and colleagues <br /> <span className='green-span'>&ldquo;with ease&ldquo;</span></h1>
                    </div>
                </div>

                <div className={`standard-section-format-landing-page third-section-landing-page ${thirdSectionVisible ? "sectionVisibleLandingPage" : ""}`} ref={thirdSectionRef}>
                    <div className="circular-div-design-landing-page-left"><p></p></div>
                    <div className="standard-section-format-landing-page first-inner-third-section-landing-page">
                        <img src="https://res.cloudinary.com/dm1hjjfsz/image/upload/v1720108237/Now/N-logo/vector/default-monochrome_bgdm61.svg" alt="N Logo Last Section" />
                        <h1>Get started <span className='green-span'>Now</span></h1>
                        <button>Get Started</button>
                    </div>
                    <div className="circular-div-design-landing-page-right"><p></p></div>
                </div>
            </div>
        </>
    )
}

export default Landing;