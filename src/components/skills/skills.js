import React from 'react'
import './skills.css'
import UiDesign from '../../assets/ui-design.png';
import AppDesign from '../../assets/app-design.png';
import WebDesign from '../../assets/website-design.png';

const Skills = () => {
  return (
   <section id='skills'>
    <span className="skillTitle">What I do</span>
    <span className="skillDiscription">I'm a skilled and a passionate web designer with experience 
    in creating visually appealing and user friendly Websites.I have a strong understanding 
    of design and a keen eye for detail.I am profecient in HTML , CSS and Javascript as well as
    Adobe Photoshop and Illustrator</span>

    <div className="skillBars">
        <div className="skillbar">
            <img src={UiDesign} alt="UI-Design" className="skillBarImg" />
            <div className="skillBarText">
                <h2>UI/UX Design</h2>
                <p>This is a demo text uou can write your own text here</p>
            </div>
        </div>
        <div className="skillbar">
            <img src={WebDesign} alt="Web-Design" className="skillBarImg" />
            <div className="skillBarText">
                <h2>Website Design</h2>
                <p>The demo text can be changed while the product file is uploading</p>
            </div>
        </div>
        <div className="skillbar">
            <img src={AppDesign} alt="App-Design" className="skillBarImg" />
            <div className="skillBarText">
                <h2>App Design</h2>
                <p>You can write text related to app development</p>
            </div>
        </div>
    </div>
   </section>
  )
}

export default Skills;
