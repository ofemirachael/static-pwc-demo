import React from 'react'
import image1 from '../img/ane.jpg'
import image2 from '../img/dc-center-1.webp'
import image3 from '../img/ec.jpg'
import image4 from '../img/ecc.jpg'
import image5 from '../img/ede.webp'
import image6 from '../img/excenter.jpg'
import image7 from '../img/office.jpg'
import image8 from '../img/orange.avif'
import image9 from '../img/pcwec.jpg'
import image10 from '../img/PwC15.jpg'
import image11 from '../img/workspace.webp'

function Gallery() {
  return (
    <section className="home-page main-content">
      <h2>PWC Gallery</h2>

      <div className="gallery-option">
        <div className="gallOpt" id="all">
          All
        </div>
        <div className="gallOpt" id="locations">
          Locations
        </div>
        <div className="gallOpt" id="projects">
          Projects
        </div>
        <div className="gallOpt" id="random">
          Random
        </div>
      </div>

      <div className="grid-container">
        <img src={image1} className="gallery-image pwc" />

        <img src={image2} className="gallery-image projects" />

        <img src={image3} className="gallery-image Random" />

        <img src={image4} className="gallery-image pwc" />

        <img src={image5} className="gallery-image projects" />

        <img src={image6} className="gallery-image Random" />

        <img src={image7} className="gallery-image pwc" />

        <img src={image8} className="gallery-image projects" />

        <img src={image9} className="gallery-image Random" />

        <img src={image10} className="gallery-image projects" />

        <img src={image11} className="gallery-image Random" />

        <img src={image11} className="gallery-image Random" />

        <img src={image11} className="gallery-image Random" />
      </div>
    </section>
  )
}

export default Gallery
