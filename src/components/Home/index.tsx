import './style.css'
import React from 'react';
import {Link} from 'react-router-dom';
import {Header} from '../Header';

export const Home =()=>{
    return(
        <>
        <Header/>
            <div className="slider">
                <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
                <h1 className="animate__animated animate__backInUp">
                    S P A C E - X
            </h1>
            <p className="animate__animated animate__backInUp">
            Space Exploration Technologies Corp. is an American aerospace manufacturer and space transportation services company headquartered in Hawthorne, California. It was founded in 2002 by Elon Musk with the goal of reducing space transportation costs to enable the colonization of Mars. </p>
            <div className="btn-div">
            <Link className="launch-btn-link" to="/launch" >
            <button className="launch-btn">
                Launches
                </button>
                </Link>
            </div>
            </div>
            <div className="bottom_images">
                <img src='https://p0.pikist.com/photos/597/903/spacecraft-landing-mars-probe-artist-phoenix-exploration-vehicle-science.jpg' height='200px' width='300px' ></img>
                <img src='https://lh3.googleusercontent.com/proxy/q-3R_LoKRaW9LVCCciUGWqJKxSg9u9IB-iN03Hr5z4neQnIOdjVNxGE_i6U6fcid46HOPPfDNagSNqN9ySv9q39VQBd1hlKO6I1D4K239-bT3bQ4dUzzZISpHZ7Nlw' height='200px' width='300px' ></img>
                <img src='https://static.independent.co.uk/s3fs-public/thumbnails/image/2008/08/01/09/41856.bin?width=1200' height='200px' width='300px' ></img>
                <img src='http://www.spaceflightinsider.com/wp-content/uploads/2017/08/InSight-PIA19811_rsz-1600x1066-c.jpg' height='200px' width='300px' ></img>
                <img src='https://mars.nasa.gov/system/news_items/main_images/8382_22097_PIA22812-web.jpg' height='200px' width='300px' ></img>
            </div>
            <div className='footer'>
            <h4>Made by Athar Rasool</h4>
            </div>
            </>
    )
}