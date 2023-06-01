import './nonInteractive.scss'
import profilePic from "../../assets-portfolio-qr/ProfilePic.jpg"
import { useEffect } from 'react';

function NonInteractive() {
    useEffect(() => {
        const handleScroll = () => {
            const scrollPos = window.scrollY;
            const img = document.querySelector('.background--img--non');

            // This fades out the picture when we've scrolled past the first screen
            img.style.opacity = 1 - scrollPos / window.innerHeight;
        }

        window.addEventListener('scroll', handleScroll);

        // clean up the event listener when the component is unmounted
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    return (
        <>
            <div className='background--img--non'>
                <div className='picText--container'>
                    <h1 className='landing-page-text'>Hello World! My Name is <br></br>
                        Austin Croucher</h1>

                    <div className='profile--container'>
                        <img className='profilePic' src={profilePic} alt="" />
                    </div>
                    <h1 className='landing-page-text--scroll'>Scroll down to see about me!</h1>
                </div>
            </div>
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
        </>
    );
}

export default NonInteractive;
