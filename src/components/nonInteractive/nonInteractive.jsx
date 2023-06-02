import './nonInteractive.scss'
import profilePic from "../../assets-portfolio-qr/ProfilePic.jpg"
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import clouds from '../../assets-portfolio-qr/cloudsMOving.png'
import flappyBack from '../../assets-portfolio-qr/flappyBack.jpg'


function NonInteractive() {
    return (
        <>
            <Parallax pages={4}>
                <ParallaxLayer
                    speed={-0.2}
                    style={
                        {
                            backgroundImage: `url(${clouds})`,
                            backgroundSize: 'cover'
                        }
                    }
                >
                    <div className='background--img--non'>
                        <div className='picText--container'>
                            <h1 className='landing-page-text'>Hello World! My Name is <br></br>
                                Austin Croucher</h1>

                            <div className='profile--container'>
                                <img className='profilePic' src={profilePic} alt="" />
                            </div>
                            <h1 className='landing-page-text--scroll'>Scroll up to see about me!</h1>
                        </div>
                    </div>
                </ParallaxLayer>
                <ParallaxLayer offset={0.99} speed={0.5}
                    style={
                        {
                            backgroundImage: `url(${flappyBack})`,
                            backgroundSize: 'cover'
                        }
                    }   >

                    <section className='aboutMe'>
                        <p className='about--me--text'>
                            My name is Austin Croucher and I am a graduate of both the Philosophy and History programs
                            at York University with a certificate in conflict resolution and dispute management. After
                            graduating I started moving up in the restaurant industry until I reached the position of General Manager.
                            After a few years in this position I realized I wanted to challenge myself more intellectually and given
                            my pre-existing interest in the tech industry, it seemed a shift into software engineering would be a good
                            fit. I made the decision to leave and pursued an
                            education in software engineering through BrainStation.
                            I believe that my educational background as well as my professional background will work together for a
                            seamless transition into the tech industry. My interpersonal skills learned throughout my time in the
                            restaurant industry will make working as part of a team effortless and on top of this my logical and
                            analytical thought processes formed throughout my philosophy degree will transition well into programming
                            given the innate logical nature of coding.
                        </p>
                    </section>
                </ParallaxLayer>

            </Parallax >
        </>
    );
}

export default NonInteractive;
