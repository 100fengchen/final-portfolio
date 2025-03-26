import React from "react";
import Portrait from "../visual/Portrait.png";
import { useEffect, useState } from "react";
import Flower from "../visual/Flower.png";

const RotatingButton = () => {
  const textsArray = [
    "📮 Hello, Pai-Feng Chen here!",
    "📮 Talk to me, please",
    "📮 Nice to meet you",
    "📮 You need a designer",
    "📮 A designeeeeeeeeer",
  ];
  const [text, SetText] = useState(textsArray[0]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      SetText((prevText) => {
        const currentIndex = textsArray.indexOf(prevText);
        const nextIndex = (currentIndex + 1) % textsArray.length;
        return textsArray[nextIndex];
      });
    }, 2000);

    return () => clearInterval(intervalId);
  }, []);
  return <button className="Contact-button">{text}</button>;
};

export default function Article({ isHovering, setIsHovering, itemClick }) {
  return (
    <>
      <div className="AllContentContainer">
        <div className="TextContentContainer">
          <h1>Based in Finland and Taiwan</h1>
          <h1>
            I possess a blend of practical and explorative thinking. My diverse
            design background, coupled with a keen interest in understanding
            human behavior, interactions, and our environment, has shaped my
            journey to where I am today. While pursuing Collaborative and
            Industrial Design at Aalto University, I honed my skills in Service
            Design, System Thinking and Interaction Design through hands-on
            experiences in digital production.
          </h1>
          <h1>
            I am an enthusiastic designer, eager to contribute to
            interdisciplinary projects aimed at developing effective and
            sustainable solutions that cater to diverse needs.
          </h1>
        </div>
        <img className="Flower" src={Flower} alt="My flower" />
        <div className="potraitContainer">
          <img
            className="Portrait"
            src={Portrait}
            alt="My handsome selfie hehe"
          />
          <div className="nameContainer">
            <button className="BigName">陳</button>
            <button className="BigName">百峰</button>
          </div>
        </div>
      </div>
    </>
  );
}
