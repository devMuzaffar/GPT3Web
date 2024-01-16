import { Feature } from "../../components";
import "./whatGPT3.css";

const WhatGPT3 = () => {
  return (
    <div className="gpt3__whatgpt3 section__margin" id="wgpt3">
      <div className="gpt3__whatgpt3-feature">
        <Feature
          title={"What is GPT-3"}
          text={
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore obcaecati suscipit veniam itaque amet adipisci nesciunt possimus corporis est non consequatur fugiat mollitia velit accusantium, magnam id optio numquam sunt, quidem repellat aliquid laboriosam in ullam! Harum, libero'
          }
        />
      </div>

      <div className="gpt3__whatgpt3-heading">
        <h1 className="gradient__text">
          The possibilites are beyong your imagination
        </h1>
        <p>Explore the library</p>
      </div>

      <div className="gpt3__whatgpt3-container">
        <div>
        <Feature
          title={"Chatbots"}
          isVertical={true}
          text={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat est commodi excepturi?"
          }
        />
        </div>
        <div>
        <Feature
          title={"Knowledgebase"}
          isVertical={true}
          text={
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis optio reiciendis mollitia nisi. Soluta, voluptate voluptatem!"
          }
        />
        </div>
        <div>
        <Feature
          title={"Education"}
          isVertical={true}
          text={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut iste accusamus in expedita omnis repellendus cum esse perferendis."
          }
        />
        </div>
      </div>
    </div>
  );
};

export default WhatGPT3;
