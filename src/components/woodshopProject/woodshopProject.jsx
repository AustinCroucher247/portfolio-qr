import './woodshopProject.scss'
import projects from '../../assets-portfolio-qr/projects1.png'
import moreProjects from '../../assets-portfolio-qr/moreProjects.png'
import woodshopVideo from '../../assets-portfolio-qr/woodshopVideo.mp4'
import { useState } from 'react'
import wood1 from '../../assets-portfolio-qr/wood1.png'
import wood2 from '../../assets-portfolio-qr/wood2.png'
import wood3 from '../../assets-portfolio-qr/wood3.png'

import woodshopThumb from '../../assets-portfolio-qr/WoodshopThumbnail.png'

function WoodshopProject() {
    const [showVideo, setShowVideo] = useState(false);
    const [showGallery, setShowGallery] = useState(false);

    return (
        <>
            <div className='background--image'>
                <div className='project--page--container'>

                    <img className='banner--projects--page' src={projects} alt="" />
                </div>
                <div className='project--card'>
                    <h3 className='project--title'>Croucher Woodshop</h3>
                    <img className='project--thumbnail' src={woodshopThumb} alt="" />
                    <p className='project--decription'>
                        A portfolio website built in React utilizing Strapi CMS for backend content management.
                        Client of project can upload and delete pictures themsevles. If no pictures are visible it is
                        becasue the owner of the website is working on it. To see the site in full effect, feel free to
                        watch the video demo!
                    </p>
                    <button className='link--button' onClick={() => setShowVideo(true)}>Video Demo</button>
                    <button className='link--button' onClick={() => setShowGallery(true)}>Gallery</button>
                </div>
                {showVideo && (
                    <>
                        <div className='video-overlay' onClick={() => setShowVideo(false)}></div>
                        <div className='video-player'>
                            <video width="320" height="240" controls>
                                <source src={woodshopVideo} type="video/mp4" />
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
                            <img src={wood1} alt="Gallery" />
                            <img src={wood2} alt="Gallery" />
                            <img src={wood3} alt="Gallery" />
                            <button className='link--button' onClick={() => setShowGallery(false)}>Close</button>
                        </div>
                    </>
                )}
                <img className='next--projects--page--wood' src={moreProjects} alt="" />
            </div>
            <div>
            </div>
        </>
    );
}

export default WoodshopProject;