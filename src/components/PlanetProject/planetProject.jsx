import './planetProject.scss'
import next from '../../assets-portfolio-qr/nextProject.png'
import projects from '../../assets-portfolio-qr/projects1.png'
import planetVideo from '../../assets-portfolio-qr/planetVideo.mp4'
import { useState } from 'react'
import planetJumper from '../../assets-portfolio-qr/PlanetJumper.jpg'
import planet1 from '../../assets-portfolio-qr/planet1.png'
import planet2 from '../../assets-portfolio-qr/planet2.png'
import { Link } from 'react-router-dom'



function PlanetProject() {
    const [showVideo, setShowVideo] = useState(false);
    const [showGallery, setShowGallery] = useState(false);

    return (
        <>
            <div className='background--image'>
                <div className='project--page--container'>

                    <img className='banner--projects--page' src={projects} alt="" />
                </div>
                <div className='project--card'>
                    <h1 className='project--title'>Planet Jumper</h1>
                    <img className='project--thumbnail' src={planetJumper} alt="" />
                    <p className='project--decription'>
                        An interactive space education tool where users can flip between different planets
                        and use spacebar to make the astronaut jump relative to the currently selected planets gravity
                    </p>
                    <button className='link--button' onClick={() => setShowVideo(true)}>Video Demo</button>
                    <button className='link--button' onClick={() => setShowGallery(true)}>Gallery</button>
                </div>
                {showVideo && (
                    <>
                        <div className='video-overlay' onClick={() => setShowVideo(false)}></div>
                        <div className='video-player'>
                            <video width="320" height="240" controls>
                                <source src={planetVideo} type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                            <button className='link--button' onClick={() => setShowVideo(false)}>Close</button>
                        </div>
                    </>
                )}
                {showGallery && (
                    <>
                        <div className='gallery-overlay' onClick={() => setShowGallery(false)}></div>
                        <div className='gallery'>
                            <img src={planet1} alt="Gallery" />
                            <img src={planet2} alt="Gallery" />
                            <img src={planetJumper} alt="Gallery" />
                            <button className='link--button' onClick={() => setShowGallery(false)}>Close</button>
                        </div>
                    </>
                )}
                <Link to={'/nonInteractive/projects/woodshopproject'}>
                    <img className='next--projects--page' src={next} alt="" />
                </Link>
            </div>
            <div>
            </div>
        </>
    );
}

export default PlanetProject;