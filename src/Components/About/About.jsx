import React from "react";
import "./About.css";
import about_img from "../../assets/about.png";
import play_icon from "../../assets/play-icon.png";
const About = ({ setPlayState }) => {
  return (
    <div className="about">
      <div className="about-left">
        <img src={about_img} alt="about-img" className="about-img" />
        <img
          src={play_icon}
          alt="play-icon"
          className="about-icon"
          onClick={() => {
            setPlayState(true);
          }}
        />
      </div>
      <div className="about-right">
        <h3>ABOUT UNIVERSITY</h3>
        <h2>Nurturing Tommorow's Leaders Today</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, odit
          hic dolore sint deserunt consectetur. Et dolores error cupiditate?
          Cupiditate ipsa nam, cum, animi veritatis incidunt ut recusandae illum
          pariatur reiciendis nemo cumque libero facere autem soluta neque.
          Consequatur, sequi!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad unde
          itaque explicabo et eum nulla voluptatibus qui ullam totam
          reprehenderit?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores natus
          reiciendis quae molestias odit ipsa modi distinctio, saepe non unde
          accusamus quaerat quia quidem repudiandae obcaecati quisquam? Unde
          accusantium sint consequuntur consequatur vero est voluptate!
        </p>
      </div>
    </div>
  );
};

export default About;
