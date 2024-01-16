import "./footer.css";
import gpt3Logo from "../../assets/logo.svg";

const Footer = () => {
  return (
    <div className="gpt3__footer section__padding">
      <div className="gpt3__footer-heading">
        <h1 className="gradient__text" style={{ textTransform: "capitalize" }}>
          Do you want to step in to the future before others
        </h1>
      </div>

      <div className="gpt3__footer-btn">
        <p>Request Early Access</p>
      </div>

      <div className="gpt3__footer-links">
        <div className="gpt3__footer-links_logo">
          <img src={gpt3Logo} alt="logo" />
          <p>Maxx Designs, All Rights Reserved</p>
        </div>

        <div className="gpt3__footer-links_div">
          <h4>Links</h4>
          <p>Overons</p>
          <p>Social Media</p>
          <p>Counters</p>
          <p>Contact</p>
        </div>

        <div className="gpt3__footer-links_div">
          <h4>Company</h4>
          <p>Terms & Conditions</p>
          <p>Privacy Policy</p>
          <p>Contact</p>
        </div>

        <div className="gpt3__footer-links_div">
          <h4>Get in touch</h4>
          <p>Street K12, 125 DK harderwijk</p>
          <p>022-123456</p>
          <p>info@payus.net</p>
        </div>
      </div>

      <div className="gpt3__footer-copyright">
        <p>&copy; 2024 GPT-3 Dev. All Rights Reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
