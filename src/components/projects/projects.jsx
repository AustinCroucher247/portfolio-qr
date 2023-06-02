import './projects.scss'
import next from '../../assets-portfolio-qr/nextProject.png'
import projects from '../../assets-portfolio-qr/projects1.png'
import retroRumble from '../../assets-portfolio-qr/RetroRumble.jpeg'
import retroRumbleVideo from '../../assets-portfolio-qr/RetroRumbleVid.mp4'
import { useState } from 'react'

function ProjectsPage() {
    const [showVideo, setShowVideo] = useState(false);

    return (
        <>
            <div className='background--image'>
                <div className='project--page--container'>

                    <img className='banner--projects--page' src={projects} alt="" />
                </div>
                <div className='project--card'>
                    <h1 className='project--title'>Retro Rumble</h1>
                    <img className='project--thumbnail' src={retroRumble} alt="" />
                    <p className='project--decription'>
                        Retro Rumble, features classic arcade games like Space Invaders and Tetris.
                        The Website includes leaderboard functionality so you can compete against
                        other gamers from around the world to see who's the best.
                    </p>
                    <button className='link--button' onClick={() => setShowVideo(true)}>Video Demo</button>
                    <button className='link--button'>Gallery</button>
                </div>
                {showVideo && (
                    <>
                        <div className='video-overlay' onClick={() => setShowVideo(false)}></div>
                        <div className='video-player'>
                            <video width="320" height="240" controls>
                                <source src={retroRumbleVideo} type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                            <button className='link--button' onClick={() => setShowVideo(false)}>Close</button>
                        </div>
                    </>
                )}
                <img className='next--projects--page' src={next} alt="" />
            </div>
            <div>
            </div>
        </>
    );
}

export default ProjectsPage;
