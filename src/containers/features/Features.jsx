import { Feature } from "../../components";
import "./features.css";

const featuresData = [
  {
    title: "Improving end distrusts instantly",
    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. This will improve you readability.",
  },
  {
    title: "Become the tended active",
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam, similique.",
  },
  {
    title: "Message or am nothing",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut adipisci sunt distinctio?",
  },
  {
    title: "Really boy law county",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam eaque aperiam nihil, iste placeat natus quae?",
  },
];

const Features = () => {
  return (
    <div className="gpt3__features section__padding" id="features">
      <div className="gpt3__features-heading">
        <h1 className="gradient__text">
          The Future is Now and You Just Need To Realize It. Step into Future
          Today & Make it Happen.
        </h1>
        <p>Request Early Access to get Started</p>
      </div>

      <div className="gpt3__features-container">
        {featuresData.map(({ title, text }, index) => (
          <Feature key={title + index} title={title} text={text} />
        ))}
      </div>
    </div>
  );
};

export default Features;
