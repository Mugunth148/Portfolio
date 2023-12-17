import { useEffect } from "react";
import "./Home.scss";
import { gsap } from "gsap";

const Home = () => {
  useEffect(() => {
    // const tl = gsap.timeline();

    gsap.to(".hero-line", {
      height: "0.3em",
      width: "30%",
      duration: 1.5,
      ease: "expo.inOut",
    });
    gsap.to(
      ".hero-text",
      { color: "black", duration: 1, ease: "expo.out" },
      "<25%"
    );
    gsap.fromTo(
      ".ball-container-overlay",
      { height: "7svh" },
      { height: "40svh", duration: 1.5, ease: "expo.out" }
    );
    gsap.to(".ball-container", {
      y: 0,
      duration: 2,
      delay: 0.8,
      ease: "expo.out",
    });
    gsap.to(".ball-container-overlay", {
      opacity: 0,
      duration: 2,
      delay: 2.5,
    });
  }, []);

  return (
    <>
      <div className="home-container">
        <div className="hero">
          <div className="hero-text-wrapper">
            <h1 className="hero-text">Design</h1>
            <span className="hero-line"></span>
            <h1 className="hero-text">Develop</h1>
          </div>
          <div className="ball-container-overlay"></div>
          <div className="ball-container">
            <div className="pink-ball"></div>
            <div className="blue-ball"></div>
            <div className="yellow-ball"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
