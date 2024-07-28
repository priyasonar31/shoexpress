import { RiInstagramFill } from "react-icons/ri";
import { SiFacebook, SiYoutube } from "react-icons/si";
import "./styles.scss";

export const Footer = () => {
  const footerConfig = [
    {
      title: "Products",
      content: ["Shoes"],
    },
    {
      title: "Category",
      content: ["Men", "New In", "Weekly Pick"],
    },
    {
      title: "Company Info",
      content: [
        "About us",
        "Contact us",
        "Payment Options",
        "Track Order",
        "Support",
        "Vouchers",
        "Size Charts",
      ],
    },
    {
      title: "Follow us",
      content: [
        <RiInstagramFill size={42}/>,
        <SiFacebook size={42}/>,
        <SiYoutube size={42}/>
      ],
    },
  ];
  return (
    <>
      <div className="footer-container">
        <div className="line"></div>
        <div className="content-wrapper">
          {footerConfig.map(({ title, content }) => (
            <div className="content">
              <div className="title"> {title} </div>
              {content.map((item) => (
                <div className="item">{item}</div>
              ))}
            </div>
          ))}
        </div>
      </div>
      <div className="footer">{['Data settings', 'Cookie settings', 'Privacy Policy','Terms And Conditions', 'Imprint'].map((item)=><div>{item}</div>)}</div>
    </>
  );
};
