import { FaArrowRight } from "react-icons/fa";

import "./styles.scss"
export const Home = () => {
  return (
    <div className="home-container">
      <div className="content">
        <div className="header">SPORTS SHOES</div>
        <h3 className="sub-header"><span className="green-blue">Men's</span> collection</h3>
        <div className="sub-text">
          Find your true style with shoexpress<br/> and explore the variety of
          playful,<br/>colourful designs!
        </div>
      </div>
      <div className="button"><span>Shop Now</span> <FaArrowRight size={20}/></div>
    </div>
  );
};
