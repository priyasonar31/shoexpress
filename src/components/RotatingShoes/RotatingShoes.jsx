import img1 from "../../assets/1.svg";
import img2 from "../../assets/2.svg";
import img3 from "../../assets/3.svg";
import img4 from "../../assets/5.png";
import img5 from "../../assets/6.png";
import img7 from "../../assets/7.png";
import ellipse from "../../assets/Elp.svg";
import "./styles.scss";

export const RotatingShoes = () => {
  const onClickShoes = (e) => {
    e.preventDefault();
    window.scrollTo({
      top: document.querySelector("#new-arrival").offsetTop,
      behavior: "smooth",
    });
  }
  return (
    <div className="side-left-wrapper">
      <div>
        <img className="ellipse" src={ellipse} alt=""  />
      </div>
      <div className="middle"></div>
      <div>
        <img src={img1} onClick={onClickShoes} alt="Rev" className="shoe1-rotating-image" />
        <img src={img2} onClick={onClickShoes} alt="Rev2" className="shoe3-rotating-image" />
        <img src={img3} onClick={onClickShoes} alt="Rev2" className="shoe2-rotating-image" />
        <img src={img4} onClick={onClickShoes} alt="Rev2" className="shoe4-rotating-image" />
        <img src={img5} onClick={onClickShoes} alt="Re3" className="shoe5-rotating-image" />
        <img src={img7} onClick={onClickShoes} alt="Re3" className="shoe6-rotating-image" />
      </div>
    </div>
  );
};
