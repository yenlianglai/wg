import "./Slide_3.scss";
import "react-multi-carousel/lib/styles.css";
import { useState } from "react";

const Slide_3 = ({ device, hover, lang }) => {
  const images =
    lang === "zh-TW"
      ? [
          "/img/slide_3_1.png",
          "/img/slide_3_2.png",
          "/img/slide_3_3.png",
          "/img/slide_3_4.png",
          "/img/slide_3_5.png",
          "/img/slide_3_6.png",
          "/img/slide_3_7.png",
          "/img/slide_3_8.png",
          "/img/slide_3_9.png",
          "/img/slide_3_10.png",
          "/img/slide_3_11.png",
          "/img/slide_3_12.png",
        ]
      : lang === "eng"
      ? [
          "/img/slide_3_1_en.png",
          "/img/slide_3_2_en.png",
          "/img/slide_3_3_en.png",
          "/img/slide_3_4_en.png",
          "/img/slide_3_5_en.png",
          "/img/slide_3_6_en.png",
          "/img/slide_3_7_en.png",
          "/img/slide_3_8_en.png",
          "/img/slide_3_9_en.png",
          "/img/slide_3_10_en.png",
          "/img/slide_3_11_en.png",
          "/img/slide_3_12_en.png",
        ]
      : [
          "/img/slide_3_1_sim.png",
          "/img/slide_3_2_sim.png",
          "/img/slide_3_3_sim.png",
          "/img/slide_3_4_sim.png",
          "/img/slide_3_5_sim.png",
          "/img/slide_3_6_sim.png",
          "/img/slide_3_7_sim.png",
          "/img/slide_3_8_sim.png",
          "/img/slide_3_9_sim.png",
          "/img/slide_3_10_sim.png",
          "/img/slide_3_11_sim.png",
          "/img/slide_3_12_sim.png",
        ];
  const [slide, setSlide] = useState(0);
  const CustomRightArrow = ({ onClick }) => {
    function handleClick() {
      onClick();
    }
    return (
      <button
        onClick={handleClick}
        className="react-multiple-carousel__arrow react-multiple-carousel__arrow--right"
        id="react-multiple-carousel__arrow--right"
        style={
          hover
            ? {}
            : device === "desktop"
            ? { display: "none" }
            : {
                width: "10vw",
                height: "10vw",
                borderRadius: "50%",
              }
        }
      />
    );
  };
  const CustomLeftArrow = ({ onClick }) => {
    function handleClick() {
      onClick();
    }
    return (
      <button
        onClick={handleClick}
        className="react-multiple-carousel__arrow react-multiple-carousel__arrow--left"
        style={
          hover
            ? {}
            : device === "desktop"
            ? { display: "none" }
            : {
                width: "10vw",
                height: "10vw",
                borderRadius: "50%",
              }
        }
      />
    );
  };

  return (
    <div className="slide_3">
      <div className="container-3">
        <CustomLeftArrow
          className="react-multiple-carousel__arrow react-multiple-carousel__arrow--left"
          onClick={
            slide === 0
              ? () => {}
              : () => {
                  setSlide((slide) => slide - 1);
                }
          }
        />
        <div
          className="carousel-3"
          style={
            device === "desktop"
              ? { transform: `translateX(-${slide * 13}vw)` }
              : {
                  transform: `translateX(-${slide * 74}vw)`,
                  fontSize: "3vw",
                  background: "none",
                  gap: "4vw",
                  padding: "0 15vw",
                }
          }
        >
          {images.map((image, i) => (
            <div className="carousel-item" key={i}>
              <img
                src={image}
                id={`slide_${i}`}
                style={
                  device === "desktop"
                    ? { width: "11vw" }
                    : {
                        width: "70vw",
                      }
                }
              />
            </div>
          ))}
        </div>
        <CustomRightArrow
          className="react-multiple-carousel__arrow--right"
          onClick={
            device === "desktop"
              ? slide === images.length - 5
                ? () => {}
                : () => {
                    setSlide((slide) => slide + 1);
                  }
              : slide === images.length - 1
              ? () => {}
              : () => {
                  setSlide((slide) => slide + 1);
                }
          }
        />
      </div>
      <div
        className="progress"
        style={
          device === "desktop"
            ? {
                display: "none",
              }
            : {}
        }
      >
        {images.map((i, id) => (
          <div
            className="dot"
            key={id}
            style={
              id === slide
                ? {
                    backgroundColor: "#0d65ea",
                    width: "3.5vw",
                    borderRadius: "15px",
                  }
                : {}
            }
          ></div>
        ))}
      </div>
    </div>
  );
};
export default Slide_3;
