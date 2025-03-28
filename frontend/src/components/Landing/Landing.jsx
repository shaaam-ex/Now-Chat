import './Landing.css';
import Meta from '../Layouts/Meta/Meta';
import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Loading from '../Layouts/Loading/Loading';

const Landing = () => {

    let secondSectionRef = useRef();
    let [secondSectionVisible, setSecondSectionVisible] = useState(false);

    let thirdSectionRef = useRef();
    let [thirdSectionVisible, setThirdSectionVisible] = useState(false);

    let { loading } = useSelector(state => state.user);

    useEffect(() => {
        if(!loading) {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach((entry) => {
                    if (entry.target === secondSectionRef.current && entry.isIntersecting) {
                        setSecondSectionVisible(true);
                    }
                    if (entry.target === thirdSectionRef.current && entry.isIntersecting) {
                        setThirdSectionVisible(true);
                    }
                });
            }, {
                threshold: [0.25, 0.10]
            });
    
            observer.observe(secondSectionRef.current);
            observer.observe(thirdSectionRef.current);
    
            return () => {
                observer.disconnect();
            }
        }
    }, [loading])


    const handleContextMenu = (e) => {
        e.preventDefault();
    }

    return (
        loading ? <Loading /> :
        <>
            <Meta title="Home" />
            <div onContextMenu={handleContextMenu} className="main-container-landing-page">
                <div className="standard-section-format-landing-page first-section-landing-page">
                    <div className="first-inner-first-section-landing-page">
                        <h1>Chat anywhere, Anytime <br /> Seamlessly</h1>
                        <img src="https://res.cloudinary.com/dm1hjjfsz/image/upload/v1720108216/Now/Now-logo/vector/default-monochrome_vrthcc.svg" alt="Now Logo Main" draggable="false" />
                    </div>
                </div>

                <div className={`standard-section-format-landing-page second-section-landing-page ${secondSectionVisible ? "sectionVisibleLandingPage" : ""}`} ref={secondSectionRef}>
                    <div className="first-inner-second-section-landing-page">
                        <img src="https://img.freepik.com/free-photo/medium-shot-smiley-family-with-tablet_23-2148936768.jpg?size=626&ext=jpg&ga=GA1.1.523418798.1710374400&semt=ais" alt="Happy Family" draggable="false" />
                        <h1 className={`second-section-landing-page ${secondSectionVisible ? "sectionVisibleLandingPageH1" : ""}`} ref={secondSectionRef}>Chat with your friends, family, and colleagues <br /> <span className='green-span'>&ldquo;with ease&ldquo;</span></h1>
                    </div>
                </div>

                <div className={`standard-section-format-landing-page third-section-landing-page ${thirdSectionVisible ? "sectionVisibleLandingPage" : ""}`} ref={thirdSectionRef}>
                    <div className="standard-section-format-landing-page first-inner-third-section-landing-page">
                        <img src="https://res.cloudinary.com/dm1hjjfsz/image/upload/v1720108237/Now/N-logo/vector/default-monochrome_bgdm61.svg" alt="N Logo Last Section" draggable="false" />
                        <h1>Get started <span className='green-span'>Now</span></h1>
                        <Link to={'register'} className='big-green-button-standard'>Get Started</Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Landing;