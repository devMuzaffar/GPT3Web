import "./possibility.css";
import possibilityImage from "../../assets/possibility.png";

const Possibility = () => {
  return (
    <div className="gpt3__possibility section__padding" id="possibility">
      <div className="gpt3__possibility-image">
        <img src={possibilityImage} alt="possibility" />
      </div>
      <div className="gpt3__possibility-content">
        <h4>Request Early Access to Get Started</h4>
        <h1 className="gradient__text">
          The Possibilities are Beyond Your Imagination
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed at neque
          sequi corrupti, labore incidunt quam saepe in quia qui vel aliquam
          deserunt obcaecati ipsam? Inventore eius voluptate error autem
          nesciunt deserunt earum iure, ab cupiditate, quas qui.
        </p>
        <h4>Request Early Access to Get Started</h4>
      </div>
    </div>
  );
};

export default Possibility;
