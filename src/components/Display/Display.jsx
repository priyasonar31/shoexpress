import { FaArrowRight } from "react-icons/fa";
import Shoes from "../../assets/discount-shoe.svg";
import './styles.scss';

export const Display = () => {
  return (
    <div className="display-container">
        <div className="discount-txt">70% OFF</div>
        <div className="shoes-img-wrapper" ><img className="shoes-img" src={Shoes} alt='' /></div>
        <div className="button"><span>Shop Now</span> <FaArrowRight size={20}/></div>
    </div>
  );
};

export const SignUpBanner = () => {
    return (
        <div className="signup-container">
            <div className="discount-txt">BECOME A MEMBER AND GET 20% OFF</div>
            <div className="button"><span>SIGN UP FOR FREE NOW</span> <FaArrowRight size={20}/></div>
        </div>
      );
}
