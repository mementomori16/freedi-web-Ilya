"use client";
import Image from "next/image";
import { useState } from "react";
import PlusIcon from "@/assets/svg/plus.svg";
import MinusIcon from "@/assets/svg/minus.svg";
import "./FeatureSectionStyle.scss";
import fifthFeature from "@/assets/Images/feature05.png";

const FeatureSection = () => {
  const [isOpen, setIsOpen] = useState<boolean[]>(new Array(6).fill(false));

  const handleToggle = (index: number) => {
    console.log(`Toggling feature ${index}`);
    setIsOpen((prevIsOpen) => {
      const updatedIsOpen = [...prevIsOpen];
      updatedIsOpen[index] =!updatedIsOpen[index];
      return updatedIsOpen;
    });
  };

  return (
    <div className="hero-section">
      <div className="grid-container">
        <div className="accordion-container">
          <h1 className="heading">Our Features</h1>
          <div className="features">
            {[
              "— Visualizations of data and viewpoints",
              "— Real-time conversation and discussion",
              "— Real-time problem solving",
              "— Real-time conversation and discussion",
              "— Voting and rating options",
              "— Embraces diverse perspectives",
            ].map((feature, index) => (
              <div
                key={index}
                className={`feature ${isOpen[index]? "open" : ""}`}
                onClick={() => handleToggle(index)}
              >
                <div className="headline">
                  <span className="number">
                    {index + 1 < 10? `0${index + 1}` : `${index + 1}`}
                  </span>
                  <span className="visualizations-data">{feature}</span>
                </div>
                {isOpen[index] && (
                  <div
                    className={`accordion-content ${
                      isOpen[index]? "accordion-content-open" : ""
                    }`}
                  >
                    <p>
                      We aim to nurture an environment where every voice is heard
                      and valued through respectful discourse and active
                      listening. Together, we can engage in deliberative
                      democracy, weighing ideas and insights to reach
                      well-informed agreements.
                    </p>
                  </div>
                )}
                {isOpen[index]? (
                  <Image
                    src={MinusIcon}
                    alt="Minus icon"
                    width={25.69}
                    height={24}
                    className="icons-minus"
                  />
                ) : (
                  <Image
                    src={PlusIcon}
                    alt="Plus icon"
                    width={25.69}
                    height={24}
                    className="icons-plus"
                  />
                )}
              </div>
            ))}
          </div>
        </div>
        <div className="frame">
          <Image
            src={fifthFeature}
            alt="frame"
            className="fifth-feature-image"
            width={390}
            height={844}
          />
        </div>
      </div>
    </div>
  );
};

export default FeatureSection;