import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";
import React, { useRef } from "react";
import { useMediaQuery } from "react-responsive";

const Hero = () => {
  const videoRef = useRef();
  const isMobile = useMediaQuery({ maxWidth: 767 });

  useGSAP(() => {
    const heroSplit = new SplitText(".title", { type: "chars, words" });
    const paraSplit = new SplitText(".subtitle", { type: "lines" });

    heroSplit.chars.forEach((char) => char.classList.add("text-gradient"));
    gsap.from(heroSplit.chars, {
      yPercent: 100,
      duration: 1.8,
      ease: "expo.out",
      stagger: 0.06,
    });
    gsap.from(paraSplit.lines, {
      opacity: 0,
      yPercent: 1,
      duration: 1.8,
      ease: "expo.out",
      stagger: 0.06,
      delay: 1,
    });
    gsap
      .timeline({
        scrollTrigger: {
          trigger: "#hero",
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      })
      .to(".right-leaf", { y: 300 }, 0)
      .to(".left-leaf", { y: -300 }, 0);

    const startValue = isMobile ? "top 50%" : "center 50%";
    const endValue = isMobile ? "120% 50%" : "bottom 7%";

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "video",
        start: startValue,
        end: endValue,
        scrub: true,
        pin: true,
      },
    });
    videoRef.current.onloadedmetadata = () => {
      tl.to(videoRef.current, {
        currentTime: videoRef.current.duration,
      });
    };
  }, []);
  return (
    <>
      <section id="hero" className="noisy">
        <h1 className="title">WHISKEY</h1>
        <img
          src="/images/hero-left-leaf.png"
          alt="left leaf"
          className="left-leaf"
        />
        <img
          src="/images/hero-right-leaf.png"
          alt="right leaf"
          className="right-leaf"
        />

        <div className="body">
          <div className="content">
            <div className="hidden space-y-5 md:block">
              <p>Smoke. Spirit. Strength.</p>
              <p className="subtitle">
                Sip the Spirit
                <br />
                Feel the Fire
              </p>
            </div>
            <div className="view-cocktails">
              <p className="subtitle">
                Crafted with care, each whiskey combines fine ingredients,
                innovation, and timeless recipes <br />— made to awaken your
                senses.
              </p>
              <a href="#cocktails">View Whiskeys</a>
            </div>
          </div>
        </div>
      </section>
      <div className="video absolute inset-0">
        <video
          src="/videos/output.mp4"
          muted
          playsInline
          preload="auto"
          ref={videoRef}
        />
      </div>
    </>
  );
};

export default Hero;
