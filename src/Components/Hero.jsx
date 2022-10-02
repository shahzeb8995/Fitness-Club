import React from 'react'
import Header from './Header'
import hero_image from '../assets/hero_image.png'
import hero_image_back from '../assets/hero_image_back.png'
import Heart from '../assets/heart.png'
import Calories from '../assets/calories.png'
import './Hero.css'
const Hero = () => {
    return (
        <div className="hero" id='home'>
            <div className="blur hero-blur"></div>
            <div className="left-h">
                <Header />
                <div className="the-best-ad">
                <div></div>
                    <span>The best fitness gym in the town</span>
                </div>


                <div className="hero-text">
                    <div>
                        <span className='stroke-text'>Shape </span>
                        <span>Your </span>
                    </div>
                    <div><span>Ideal Body</span></div>
                    <div className='para'><span>In here we will help you to shape and build your ideal body and live up your life to fullest</span></div>
                </div>

               <div className="figures">
                <div>
                    <span>+140</span>
                <span>expert coaches</span></div>
                <div><span>+978</span>
                <span>members joined</span></div>
                <div><span>+50</span>
                <span>fitness programs</span></div>
                </div>

            <div className="hero-buttons">
            <buttons className="btn">Get Starterd</buttons>
            <buttons className="btn">Learn More</buttons>        
               </div>
               </div>


            <div className="right-h">
                 <button className='btn'>Join Us</button>
            <div
            className="heart-rate">
                <img src={Heart} alt='' />
                <span>Heart Rate</span><span>116 bpm</span>
           </div>     
          <img src={hero_image} alt="" className="hero-image" />
          <img src={hero_image_back} alt=""  className="hero-image_back" />

          <div className="calories">
            <img src={Calories} alt="" />
            <div>
            <span>Calories Burned </span>
            <span>220 kcal</span>
            </div>
          </div>


   </div>

        </div>
    )
}

export default Hero;
