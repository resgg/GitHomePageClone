import React from 'react'
import "./hero.css"

// Define a functional component called "Hero"
const Hero = () => {
  return (
    // Start of the main container for the hero section
    <div className='hero-container'>
      {/* Container for the hero images */}
      <div className='hero-image-container'>
        {/* Right image */}
        <div className='right-image'>
          <img src="https://github.githubassets.com/images/modules/site/home-campaign/lines-hero.svg"></img>
        </div>
        {/* Left image */}
        <div className='left-image'>
          <img src="https://github.githubassets.com/images/modules/site/home-campaign/hero-drone.webp"></img>
        </div>
      </div>

      {/* Container for the left-aligned content */}
      <div className='left-align-container'>
        {/* Part 1: GitHub Universe */}
        <div className='hero-git-universe'>
          <div className='hero-git-universe-image'>
            <img src="https://github.githubassets.com/images/modules/site/universe/eyebrow-23@2x.png?width=44&format=webpll]]"></img>
          </div>
          <div className="hero-git-universe-content">
            <h4 className='hero-git-universe-h4'>
              GitHub Universe: Dive into AI, security, and DevEx</h4>
            <h3 className='hero-git-universe-h3'>Get your tickets now to join us on Nov. 8-9.</h3>
          </div>
          <div className='hero-git-universe-arrow'>
            <i className="fa fa-angle-right fa-lg fa-color" aria-hidden="true"></i>
          </div>
        </div>

        {/* Part 2: Hero Heading */}
        <div className='hero-heading'>
          <h1 className='hero-heading-h1'>Let’s build from here</h1>
          <h2 className='hero-heading-h2'>The AI-powered developer platform to build, scale, and deliver <br></br>secure software.</h2>
        </div>

        {/* Part 3: Hero Sign-up */}
        <div className='hero-signup'>
          <div className='hero-signup-box'>
            <input type='text' placeholder="reshmabarvin123@gmail.com" className='hero-signup-inputbox'></input>
            <button class="hero-signup-button">Sign up for GitHub</button>
          </div>
          <div className='hero-signup-line'>
            <hr className="vertical-line"/>
          </div>
          <div className='hero-signup-trial' >
            <h4 className='hero-signup-h4'>Start a free enterprise trial</h4>
            <i className="fa fa-angle-right fa-lg fa-color trial-arrow" aria-hidden="true"></i>
          </div>
        </div>

        {/* Part 4: Hero Trust Logos */}
        <div className='hero-trusters'>
          <div className='hero-trusters-h4'><h4>Trusted by the world’s leading organizations </h4></div>
          <div className='hero-trusters-image'>
            {/* Trust logos */}
            <img className='hero-trusters-image-1 ti' src='https://github.githubassets.com/images/modules/site/home-campaign/logos/stripe.svg'></img>
            <img className='hero-trusters-image-2 ti' src='https://github.githubassets.com/images/modules/site/home-campaign/logos/pinterest.svg'></img>
            <img className='hero-trusters-image-3 ti' src='https://github.githubassets.com/images/modules/site/home-campaign/logos/kpmg.svg'></img>
            <img className='hero-trusters-image-4  ti' src='https://github.githubassets.com/images/modules/site/home-campaign/logos/mercedes.svg'></img>
            <img className='hero-trusters-image-5 ti' src='https://github.githubassets.com/images/modules/site/home-campaign/logos/pg.svg'></img>
            <img className='hero-trusters-image-6 ti' src='https://github.githubassets.com/images/modules/site/home-campaign/logos/telus.svg'></img>
          </div>
        </div>
      </div>
    </div> // End of the main container for the hero section
  )
}


export default Hero;
