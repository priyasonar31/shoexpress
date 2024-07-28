import arrival1 from "../../assets/new arrivals/1.svg";
import arrival2 from "../../assets/new arrivals/2.svg";
import arrival3 from "../../assets/new arrivals/3.svg";
import arrival4 from "../../assets/new arrivals/4.svg";
import arrival5 from "../../assets/new arrivals/5.svg";
import "./styles.scss";

export const NewArrival = () => {
  return (
    <div className="newArrival-container" id="new-arrival">
      <div className="popular-tab">
        <div className="header">POPULAR RIGHT NOW</div>
        <div className="button-wrapper">
          {["Sneakers", "Sports Shoes", "Oxford", "Sale"].map((item) => (
            <div className="item">{item}</div>
          ))}
        </div>
      </div>

      <div className="new-arrival-tab">
        <div className="header">New Arrival</div>
        <div className="images-container">
          {[
            {
              svg: arrival2,
              text1: "NIKE SHOES",
              text2: "ZOOM-X",
              price: "$200"
            },
            {
              svg: arrival1,
              text1: "NIKE WMNS",
              text2: "ROSHE RASER",
              price: "$150"
            },
            {
              svg: arrival3,
              text1: "ASICS",
              text2: "PORTER JAPAN",
              price: "$150"
            },
            {
              svg: arrival4,
              text1: "NIKE SUN",
              text2: "AIR MAX",
              price: "$300"
            },
            {
              svg: arrival5,
              text1: "LI-NING",
              text2: "",
              price: "$400"
            },
          ].map(({ svg, text1, text2, price }) => (
            <div className="img-wrapper">
              <img className="image" src={svg} alt=""  />
              <div className="text-wrapper">
                <div className="text">{text1}</div>
                <div className="text">{text2}</div>
                <div className="price">{price}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
