import { useEffect } from "react";
import "./Home.scss";
import { gsap } from "gsap";

const Home = () => {

  const mobile = window.innerWidth <= 768;

  useEffect(() => {
    // const tl = gsap.timeline()

    gsap.to(".hero-line", {
      height: "0.20em",
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
      document.innerWidth = mobile
        ? { height: "50svh", duration: 1.5, ease: "expo.out" }
        : { height: "40svh", duration: 1.5, ease: "expo.out" }
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

    const section = document.getElementsByClassName('ball-container');

    const handleScroll = () => {
      const scrollProgress = window.scrollY / (document.body.scrollHeight - window.innerHeight);
      const color = scrollProgress >= 0.5 ? '#FFFAF0' : '#0d0d11';

      gsap.to(section, { backgroundColor: color, ease: 'linear' });
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };

  }, [mobile]);

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
             <video src="../../public/webm/abstract.webm" autoPlay loop muted 
             ></video> 
          </div>
        </div>
      </div>
      
    </>
  );
};

export default Home;
