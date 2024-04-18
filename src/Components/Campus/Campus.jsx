import React from "react";
import "./Campus.css";
import gallery_1 from "../../assets/gallery-1.png";
import gallery_2 from "../../assets/gallery-2.png";
import gallery_3 from "../../assets/gallery-3.png";
import gallery_4 from "../../assets/gallery-4.png";
import white_arrow from "../../assets/white-arrow.png";
const Campus = () => {
  return (
    <div className="campus">
      <div className="gallery">
        <img src={gallery_1} alt="gallery first image" />
        <img src={gallery_2} alt="gallery second image" />
        <img src={gallery_3} alt="gallery third image" />
        <img src={gallery_4} alt="gallery fourth image" />
      </div>
      <button className="btn btn-blue">
        See More Here <img src={white_arrow} alt="" />
      </button>
    </div>
  );
};

export default Campus;
