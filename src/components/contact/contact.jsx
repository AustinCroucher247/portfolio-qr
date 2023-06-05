import './contact.scss'
import linkedBanner from '../../assets-portfolio-qr/LinkedBanner.png'
import GitHubBanner from '../../assets-portfolio-qr/GitHubBanner.png'
import gmailBanner from '../../assets-portfolio-qr/gmailBanner.png'
import contact from "../../assets-portfolio-qr/ContactHeading.png"


function Contact() {


    return (
        <>
            <div>
                <img className='contact--heading' src={contact} alt="" />
                <div className='background--img--non'>
                    <div className='banners'>

                        <a className='icon--banners' href="https://www.linkedin.com/in/austincroucher/"> <img className='contact--banner' src={linkedBanner} alt="linkedin" /></a>
                        <a className='icon--banners' href="https://github.com/AustinCroucher247"> <img className='contact--banner' src={GitHubBanner} alt="git" /></a>
                        <a className='icon--banners' href="mailto:austin.croucher@gmail.com" > <img className='contact--banner--centered' src={gmailBanner} alt="gmail" /></a>
                    </div>
                    <form className='form' action="https://formsubmit.co/092d6d2b49e64d5ea83288c159a27055" method="POST" id="contact-form">
                        <label htmlFor="name">Name:</label>
                        <input type="text" id="name" name="name" required />

                        <label htmlFor="email">Your Email:</label>
                        <input type="email" id="email" name="email" required />

                        <label htmlFor="message">Message:</label>
                        <textarea id="message" name="message" required></textarea>

                        <button className='submit--button' type="submit">Submit</button>
                    </form>
                </div>
            </div>
            <div className='form--container'>

            </div>
        </>
    );
}

export default Contact;