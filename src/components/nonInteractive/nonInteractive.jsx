import './nonInteractive.scss';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import profilePic from "../../assets-portfolio-qr/ProfilePic.jpg";
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import clouds from '../../assets-portfolio-qr/cloudsMOving.png';
import flappyBack from '../../assets-portfolio-qr/flappy5.png';
import skillSet from '../../assets-portfolio-qr/bannerskill.png'
// // import dino from '../../assets-portfolio-qr/Dino.png';
import express from '../../assets-portfolio-qr/express-js.png'
import HTML from '../../assets-portfolio-qr/html-5.png'
import CSS1 from '../../assets-portfolio-qr/css-3.png'
import JavaScript from '../../assets-portfolio-qr/js.png'
import Node from '../../assets-portfolio-qr/nodejs.png'
import ReactImg from '../../assets-portfolio-qr/react.png'
import SASS from '../../assets-portfolio-qr/sass.png'
import MySQL from '../../assets-portfolio-qr/mysql.png'
import Git from '../../assets-portfolio-qr/git.png'
import PHP from '../../assets-portfolio-qr/PHP.png'
import projects from '../../assets-portfolio-qr/projects.png'
import contact from "../../assets-portfolio-qr/contactBanner.png"
import about from '../../assets-portfolio-qr/AboutMeBanner.png'
// import dino2 from '../../assets-portfolio-qr/dino2.png'
// import dino3 from '../../assets-portfolio-qr/dino3.png'
// import noDino from '../../assets-portfolio-qr/noDino.png'


function NonInteractive() {
    const [_showText, setShowText] = useState(true);
    const [shouldScroll, _setShouldScroll] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            const targetOffset = window.innerHeight * 10;  // adjust as per requirement

            if (currentScrollY > targetOffset) {
                setShowText(false);
            } else {
                setShowText(true);
            }
        };

        // Handle the touch move event
        const handleTouchMove = (e) => {
            const currentScrollY = e.touches[0].clientY;
            const targetOffset = window.innerHeight * 10;  // adjust as per requirement

            if (currentScrollY > targetOffset) {
                setShowText(false);
            } else {
                setShowText(true);
            }
        };

        window.addEventListener("scroll", handleScroll);
        window.addEventListener("touchmove", handleTouchMove);

        return () => {
            window.removeEventListener("scroll", handleScroll);
            window.removeEventListener("touchmove", handleTouchMove);
        };
    }, []);

    return (
        <>
            <Parallax pages={2}>
                <ParallaxLayer
                    speed={0}
                    style={{
                        backgroundImage: `url(${clouds})`,
                        backgroundSize: 'cover',
                        height: '100vh'
                    }}
                >
                    <div className='background--img--non'>
                        <div className='picText--container'>
                            <h1 className='landing-page-text'>Hello World! My Name is <br />
                                Austin Croucher</h1>

                            <div className='profile--container'>
                                <img className='profilePic' src={profilePic} alt="" />
                            </div>

                            <h1 className='landing-page-text--scroll'>Scroll up to see more!</h1>
                        </div>
                    </div>

                </ParallaxLayer>
                <ParallaxLayer offset={1} speed={0.5}
                    style={{
                        backgroundImage: `url(${flappyBack})`,
                        backgroundSize: 'cover',
                        height: '100vh'
                    }}
                >
                    <div class="container">
                        <div class="bird-container bird-container--one">
                            <div class="bird bird--one"></div>
                        </div>

                        <div class="bird-container bird-container--two">
                            <div class="bird bird--two"></div>
                        </div>

                        <div class="bird-container bird-container--three">
                            <div class="bird bird--three"></div>
                        </div>

                        <div class="bird-container bird-container--four">
                            <div class="bird bird--four"></div>
                        </div>
                    </div>
                </ParallaxLayer>
                <ParallaxLayer offset={1} speed={0.6}
                >             <section className='skillset--section'>
                        <img className='skill--banner' src={skillSet} alt="" />
                        <div className='icon--container'>
                            <img className='icons' src={HTML} alt="" />
                            <img className='icons' src={CSS1} alt="" />
                            <img className='icons' src={JavaScript} alt="" />
                            <br />
                            <img className='icons' src={Node} alt="" />
                            <img className='icons' src={ReactImg} alt="" />
                            <img className='icons' src={MySQL} alt="" />
                            <br />
                            <img className='icons' src={Git} alt="" />
                            <img className='icons' src={SASS} alt="" />
                            <img className='icons' src={express} alt="" />
                            <img className='icons' src={PHP} alt="" />

                        </div>
                        <div>
                            <Link to='./projects'>
                                <img className={`projects--banner ${shouldScroll ? "visibleSkillBanner scrollDownBanner" : ""}`} src={projects} alt="" />
                            </Link>
                        </div>
                        <Link to={'/contact'}>
                            <div>
                                <img className={`projects--banner ${shouldScroll ? "visibleSkillBanner scrollDownContact" : ""}`} src={contact} alt="" />
                            </div>
                        </Link>
                        <Link to={'/aboutme'}>
                            <div>
                                <img className={`projects--banner ${shouldScroll ? "visibleSkillBanner scrollDownContact" : ""}`} src={about} alt="" />
                            </div>
                        </Link>
                    </section>
                </ParallaxLayer>

            </Parallax >
        </>
    );
}

export default NonInteractive;





// const [showText, setShowText] = useState(true);
// const [shouldScroll, setShouldScroll] = useState(false);

// useEffect(() => {
//     const handleScroll = () => {
//         const currentScrollY = window.scrollY;
//         const targetOffset = window.innerHeight * 10;  // adjust as per requirement

//         if (currentScrollY > targetOffset) {
//             setShowText(false);
//         } else {
//             setShowText(true);
//         }
//     };

//     // Handle the touch move event
//     const handleTouchMove = (e) => {
//         const currentScrollY = e.touches[0].clientY;
//         const targetOffset = window.innerHeight * 10;  // adjust as per requirement

//         if (currentScrollY > targetOffset) {
//             setShowText(false);
//         } else {
//             setShowText(true);
//         }
//     };

//     window.addEventListener("scroll", handleScroll);
//     window.addEventListener("touchmove", handleTouchMove);

//     return () => {
//         window.removeEventListener("scroll", handleScroll);
//         window.removeEventListener("touchmove", handleTouchMove);
//     };
// }, []);

// return (
//     <>
//         <Parallax pages={2}>
//             <ParallaxLayer
//                 speed={0}
//                 style={{
//                     backgroundImage: `url(${clouds})`,
//                     backgroundSize: 'cover',
//                     height: '100vh'
//                 }}
//             >
//                 <div className='background--img--non'>
//                     <div className='picText--container'>
//                         <h1 className='landing-page-text'>Hello World! My Name is <br />
//                             Austin Croucher</h1>

//                         <div className='profile--container'>
//                             <img className='profilePic' src={profilePic} alt="" />
//                         </div>

//                         <h1 className='landing-page-text--scroll'>Scroll up to see about me!</h1>
//                     </div>
//                 </div>

//             </ParallaxLayer>
//             <ParallaxLayer offset={1} speed={0.5}
//                 style={{
//                     backgroundImage: `url(${flappyBack})`,
//                     backgroundSize: 'cover',
//                     height: '100vh'
//                 }}
//             >
//                 <div class="container">
//                     <div class="bird-container bird-container--one">
//                         <div class="bird bird--one"></div>
//                     </div>

//                     <div class="bird-container bird-container--two">
//                         <div class="bird bird--two"></div>
//                     </div>

//                     <div class="bird-container bird-container--three">
//                         <div class="bird bird--three"></div>
//                     </div>

//                     <div class="bird-container bird-container--four">
//                         <div class="bird bird--four"></div>
//                     </div>
//                 </div>
//                 {showText && (
//                     <section className={`aboutMe ${shouldScroll ? "scrollUpText" : ""}`}>
//                         <div className='text--section'>
//                             <h3 className='about'>ABOUT ME</h3>

//                             <p className='about--me--text'>
//                                 My name is Austin Croucher and I am a graduate of both the Philosophy and History programs
//                                 at York University with a certificate in conflict resolution and dispute management. After
//                                 graduating, I started moving up in the restaurant industry until I reached the position of General Manager.
//                                 After a few years in this position, I realized I wanted to challenge myself more intellectually, and given
//                                 my pre-existing interest in the tech industry, it seemed a shift into software engineering would be a good fit.
//                             </p>

//                             <p className='about--me--text'>
//                                 I made the decision to leave and pursued an education in software engineering through BrainStation.
//                                 I believe that my educational background, as well as my professional background, will work together for a
//                                 seamless transition into the tech industry. My interpersonal skills learned throughout my time in the
//                                 restaurant industry will make working as part of a team effortless, and on top of this, my logical and
//                                 analytical thought processes formed throughout my philosophy degree will transition well into programming,
//                                 given the innate logical nature of coding.
//                             </p>
//                             <button className='next--button' onClick={() => setShouldScroll(true)}>NEXT</button>

//                         </div>
//                     </section>
//                 )}
//             </ParallaxLayer>
//             <section className='skillset--section'>
//                 <img className={`skill--banner ${shouldScroll ? "visibleSkillBanner scrollUpSkillset" : ""}`} src={skillSet} alt="" />
//                 <div className={`icon--container ${shouldScroll ? "scrollUpIcons" : ""}`}>
//                     <img className={`icons ${shouldScroll ? "visibleIcon" : ""}`} src={HTML} alt="" />
//                     <img className={`icons ${shouldScroll ? "visibleIcon" : ""}`} src={CSS1} alt="" />
//                     <img className={`icons ${shouldScroll ? "visibleIcon" : ""}`} src={JavaScript} alt="" />
//                     <br />
//                     <img className={`icons ${shouldScroll ? "visibleIcon" : ""}`} src={Node} alt="" />
//                     <img className={`icons ${shouldScroll ? "visibleIcon" : ""}`} src={ReactImg} alt="" />
//                     <img className={`icons ${shouldScroll ? "visibleIcon" : ""}`} src={MySQL} alt="" />
//                     <br />
//                     <img className={`icons ${shouldScroll ? "visibleIcon" : ""}`} src={Git} alt="" />
//                     <img className={`icons ${shouldScroll ? "visibleIcon" : ""}`} src={SASS} alt="" />
//                     <img className={`icons ${shouldScroll ? "visibleIcon" : ""}`} src={express} alt="" />
//                     <img className={`icons ${shouldScroll ? "visibleIcon" : ""}`} src={PHP} alt="" />

//                 </div>
//                 <div>
//                     <Link to='./projects'>
//                         <img className={`projects--banner ${shouldScroll ? "visibleSkillBanner scrollDownBanner" : ""}`} src={projects} alt="" />
//                     </Link>
//                 </div>
//                 <Link to={'/contact'}>
//                     <div>
//                         <img className={`projects--banner ${shouldScroll ? "visibleSkillBanner scrollDownContact" : ""}`} src={contact} alt="" />
//                     </div>
//                 </Link>
//             </section>
//         </Parallax>
//     </>
// );
// }