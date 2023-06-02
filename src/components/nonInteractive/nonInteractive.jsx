import './nonInteractive.scss';
import profilePic from "../../assets-portfolio-qr/ProfilePic.jpg";
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import clouds from '../../assets-portfolio-qr/cloudsMOving.png';
import flappyBack from '../../assets-portfolio-qr/flappy4.png';
import dino from '../../assets-portfolio-qr/Dino.png';
import HTML from '../../assets-portfolio-qr/html-5.png'
import CSS from '../../assets-portfolio-qr/css-3.png'
import JavaScript from '../../assets-portfolio-qr/js.png'
import Node from '../../assets-portfolio-qr/nodejs.png'
import ReactImg from '../../assets-portfolio-qr/react.png'
import SASS from '../../assets-portfolio-qr/sass.png'
import MySQL from '../../assets-portfolio-qr/mysql.png'
import Git from '../../assets-portfolio-qr/git.png'
import dino2 from '../../assets-portfolio-qr/dino2.png'
import dino3 from '../../assets-portfolio-qr/dino3.png'


function NonInteractive() {
    return (
        <>
            <Parallax pages={5}>
                <ParallaxLayer
                    speed={-0.2}
                    style={{
                        backgroundImage: `url(${clouds})`,
                        backgroundSize: 'cover'
                    }}
                >
                    <div className='background--img--non'>
                        <div className='picText--container'>
                            <h1 className='landing-page-text'>Hello World! My Name is <br />
                                Austin Croucher</h1>

                            <div className='profile--container'>
                                <img className='profilePic' src={profilePic} alt="" />
                            </div>

                            <h1 className='landing-page-text--scroll'>Scroll up to see about me!</h1>
                        </div>
                    </div>

                </ParallaxLayer>

                <ParallaxLayer offset={0.99} speed={0.5}
                    style={{
                        backgroundImage: `url(${flappyBack})`,
                        backgroundSize: 'cover'
                    }}
                >                            <div class="container">
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

                    <section className='aboutMe'>

                        <div className='text--section'>
                            <h3 className='about'>ABOUT ME</h3>

                            <p className='about--me--text'>
                                My name is Austin Croucher and I am a graduate of both the Philosophy and History programs
                                at York University with a certificate in conflict resolution and dispute management. After
                                graduating, I started moving up in the restaurant industry until I reached the position of General Manager.
                                After a few years in this position, I realized I wanted to challenge myself more intellectually, and given
                                my pre-existing interest in the tech industry, it seemed a shift into software engineering would be a good fit.
                            </p>

                            <p className='about--me--text'>
                                I made the decision to leave and pursued an education in software engineering through BrainStation.
                                I believe that my educational background, as well as my professional background, will work together for a
                                seamless transition into the tech industry. My interpersonal skills learned throughout my time in the
                                restaurant industry will make working as part of a team effortless, and on top of this, my logical and
                                analytical thought processes formed throughout my philosophy degree will transition well into programming,
                                given the innate logical nature of coding.
                            </p>
                        </div>

                    </section>

                </ParallaxLayer>
                <ParallaxLayer offset={1.38} speed={0.9}
                    style={{
                        backgroundImage: `url(${dino})`,
                        backgroundSize: 'contain'
                    }}
                >
                    <h3 className='skillset'>SKILLSET</h3>
                    <div className='skill--icon--container'>
                        <img src={HTML} className='skill--image' alt='HTML' />
                        <img src={CSS} className='skill--image' alt='CSS' />
                        <img src={JavaScript} className='skill--image' alt='Javascript' />
                        <img src={ReactImg} className='skill--image' alt='React' />
                        <img src={Node} className='skill--image' alt='Node' />
                        <img src={SASS} className='skill--image' alt='SASS' />
                        <img src={Git} className='skill--image' alt='Git' />
                        <img src={MySQL} className='skill--image' alt='MySQL' />
                    </div>
                </ParallaxLayer>
                <ParallaxLayer offset={1.78} speed={0.9}
                    style={{
                        backgroundImage: `url(${dino2})`,
                        backgroundSize: 'contain'
                    }}
                >
                </ParallaxLayer>
                <ParallaxLayer offset={1.97} speed={0.9}
                    style={{
                        backgroundImage: `url(${dino3})`,
                        backgroundSize: 'contain'
                    }}
                >
                </ParallaxLayer>
            </Parallax>
        </>
    );
}

export default NonInteractive;