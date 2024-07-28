import {
  FaHeart,
  FaPlus,
  FaMinus,
  FaRegHeart,
} from "react-icons/fa";
import DisplayShoes from "../../assets/new picks/1.svg";
import Shoes1 from "../../assets/new picks/2.svg";
import Shoes2 from "../../assets/new picks/3.svg";
import Shoes3 from "../../assets/new picks/4.svg";
import "./styles.scss";

export const WeeklyPick = () => {
  return (
    <div className="weeklypick-container">
      <div className="header">OUR WEEKLY PICK</div>
      <div className="image-content-wrapper">
        <div className="image">
          <img
            className="shoes-img"
            src={DisplayShoes}
            alt=""
            style={{
              objectFit: "contain",
              maxWidth: "fit-content",
              width: "100%",
            }}
          />
          <div className="text-wrapper">
            <div className="text">NIKE</div> <div className="text"> THE JOYRIDE</div>
          </div>
        </div>
        <div className="content-wrapper">
          <div className="title">Nike - The Joyride</div>
          <div className="rate">$390</div>
          <div className="size-colour-review-wrapper">
            <div className="colour-container">
              <div className="sub-title">Colour</div>
              <div className="colour-wrapper">
                <div
                  className="colour-outer"
                  style={{ border: "2px solid black" }}
                >
                  <div
                    className="colour-inner"
                    style={{ background: "black" }}
                  />
                </div>
                <div
                  className="colour-outer"
                  style={{ border: "2px solid #F6835F" }}
                >
                  <div
                    className="colour-inner"
                    style={{ background: "#F6835F" }}
                  />
                </div>
              </div>
            </div>
            <div className="size-review-wrapper">
              <div className="size-container">
                <div className="sub-title">Size</div>
                <div className="sizes">
                  <div
                    className="size"
                    style={{ color: "white", background: "#007D8B" }}
                  >
                    42
                  </div>
                  <div className="size">43</div>
                  <div className="size">44</div>
                  <div className="size">45</div>
                </div>
              </div>
              <div className="review-container">
                <div className="sub-title">Reviews</div>
                <div className="reviews">
                  <div>
                    <FaHeart style={{ color: "#FF4848" }} size={30} />
                  </div>
                  <div>
                    <FaHeart style={{ color: "#FF4848" }} size={30} />
                  </div>
                  <div>
                    <FaHeart style={{ color: "#FF4848" }} size={30} />
                  </div>
                  <div>
                    <FaHeart style={{ color: "black" }} size={30} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="count-like-container">
            <div className="count-wrapper">
              <FaMinus style={{ color: "#007D8B" }} />
              <span className="count">0</span>
              <FaPlus style={{ color: "#007D8B" }} />
            </div>

            <div className="like-wrapper">
              <FaRegHeart style={{ color: "#007D8B" }} size={25} />
            </div>
          </div>
          <div className="image-panel">
            <div className="panel">
              <img
                src={Shoes1}
                alt=""
                style={{
                  objectFit: "contain",
                  maxWidth: "fit-content",
                  width: "100%",
                }}
              />
            </div>
            <div className="panel">
              <img
                src={Shoes3}
                alt=""
                style={{
                  objectFit: "contain",
                  maxWidth: "fit-content",
                  width: "100%",
                }}
              />
            </div>
            <div className="panel">
              <img
                src={Shoes2}
                alt=""
                style={{
                  objectFit: "contain",
                  maxWidth: "fit-content",
                  width: "100%",
                }}
              />
            </div>
          </div>
          <div className="button">Buy It Now!</div>
        </div>
      </div>
      {/*
        <div className="button"><span>Shop Now</span> <FaArrowRight size={20}/></div> */}
    </div>
  );
};
