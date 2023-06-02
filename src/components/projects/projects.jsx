import './projects.scss'
import projects from '../../assets-portfolio-qr/projects.png'
import retroRumble from '../../assets-portfolio-qr/RetroRumble.jpeg'

function ProjectsPage() {
    return (
        <>
            <div className='background--image'>
                <div className='project--page--container'>
                    <img className='banner--projects--page' src={projects} alt="" />
                </div>
                <div className='project--card'>
                    <img className='project--thumbnail' src={retroRumble} alt="" />
                    <p className='project--decription'>
                        Retro Rumble, features classic arcade games like Space Invaders and Tetris.
                        The Website includes leaderboard functionality so you can compete against
                        other gamers from around the world to see who's the best.
                    </p>
                </div>
            </div>
        </>
    );
}

export default ProjectsPage;
