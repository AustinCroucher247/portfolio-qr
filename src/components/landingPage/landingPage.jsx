import './landingPage.scss'
import banner from "../../assets-portfolio-qr/banner-text.png";
import banner1 from "../../assets-portfolio-qr/banner-text-1.png";
import austinPort from "../../assets-portfolio-qr/austinport.png"
function LandingPage() {
    return (
        <>
            <div className='landing--top'>
                <img className='banner--first' src={austinPort} alt="" />
                {/* <div className='banner--container'> */}
                <img className='banner banner--third' src={banner} alt="banner" />
                <img className='banner banner--second' src={banner1} alt="banner" />
                {/* </div> */}
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
            </div>

        </>
    );
}

export default LandingPage;
