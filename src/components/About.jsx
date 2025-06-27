import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";

const About = () => {
  useGSAP(() => {
    const titleSplit = SplitText.create("#about h2", {
      type: "words",
    });
    const scrollTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: "#about",
        start: "top center",
      },
    });
    scrollTimeline
      .from(titleSplit.words, {
        opacity: 0,
        duration: 1,
        yPercent: 100,
        ease: "expo.out",
        stagger: 0.02,
      })
      .from(
        ".top-grid div, .bottom-grid div",
        {
          opacity: 0,
          duration: 1,
          ease: "power1.inOut",
          stagger: 0.04,
        },
        "-=0.5",
      );
  });
  return (
    <div id="about">
      <div className="mb-16 px-5 md:px-0">
        <div className="content">
          <div className="md:col-span-8">
            <p className="badge">Best Whiskeys</p>
            <h2>
              Where every detail matters
              <span className="text-white">-</span>from barrel to your
              glass{" "}
            </h2>
          </div>
          <div className="sub-content">
            <p>
              From the first barrel to the final bottle, every whiskey we serve
              carries our obsession with detail — turning a simple drink into a
              lasting memory.
            </p>
            <div className="flex flex-row">
              <div>
                <p className="text-xl font-bold md:text-3xl">
                  <span>4.5</span>/5
                </p>
              </div>
              <div className="flex flex-row items-start justify-between">
                <img src="/images/profile1.png" alt="" />
                <img src="/images/profile2.png" alt="" />
                <img src="/images/profile3.png" alt="" />
                <img src="/images/profile4.png" alt="" />
              </div>
            </div>
            <p className="text-white-100 text-sm">
              More than +150000 customers
            </p>
          </div>
        </div>
      </div>
      <div className="top-grid">
        <div className="md:col-span-3">
          <div />
          <img
            className="grayscale-25 sepia-25"
            src="/images/abt1.jpg"
            alt="grid-image-1"
          />
        </div>
        <div className="md:col-span-6">
          <div />
          <img
            className="grayscale-25 sepia-25"
            src="/images/abt2.png"
            alt="grid-image-2"
          />
        </div>
        <div className="md:col-span-3">
          <div />
          <img
            className="grayscale-25 sepia-25"
            src="/images/abt5.jpg"
            alt="grid-image-5"
          />
        </div>
      </div>{" "}
      <div className="bottom-grid">
        <div className="md:col-span-8">
          <div />
          <img
            className="grayscale-25 sepia-25"
            src="/images/abt3.jpg"
            alt="grid-image-3"
          />
        </div>
        <div className="md:col-span-4">
          <div />
          <img
            className="grayscale-25 sepia-25"
            src="/images/abt4.jpg"
            alt="grid-image-4"
          />
        </div>
      </div>{" "}
    </div>
  );
};

export default About;
