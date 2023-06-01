import './nonInteractive.scss'
import profilePic from "../../assets-portfolio-qr/ProfilePic.jpg"


function NonInteractive() {
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
        </>
    );
}

export default NonInteractive;
