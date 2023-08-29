import React from 'react';
import './works.css';
import Img1 from '../../assets/portfolio-1.png';
import Img2 from '../../assets/portfolio-2.png';
import Img3 from '../../assets/portfolio-3.png';
import Img4 from '../../assets/portfolio-4.png';
import Img5 from '../../assets/portfolio-5.png';
import Img6 from '../../assets/portfolio-6.png';

const Works = () => {
  return (
    <section id='works'>
        <h2 className='worksTitle'>My Portfolio</h2>
        <span className='worksDescription'>I take pride in paying attention to the samallest
        details and making sure that my work is pixel perfect.I'm excited to bring my skills 
        experience to help businesses achieve their goals and create a strong online presence.</span>

        <div className="worksImgs">

            <img src={Img1} alt="" className="worksImg" />
            <img src={Img2} alt="" className="worksImg" />
            <img src={Img3} alt="" className="worksImg" />
            <img src={Img4} alt="" className="worksImg" />
            <img src={Img5} alt="" className="worksImg" />
            <img src={Img6} alt="" className="worksImg" />

        </div>
        <button className="worksBtn">See More</button>
    </section>
  )
}

export default Works;
