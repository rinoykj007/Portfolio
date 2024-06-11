import { useRef, useEffect } from "react";
import gsap from "gsap";
import { personalDetails } from "../Details";

function Home() {
  const { name, tagline, img } = personalDetails;
  const h11 = useRef();
  const h12 = useRef();
  const h13 = useRef();
  const myimageref = useRef();

  useEffect(() => {
    const tl = gsap.timeline();
    tl.from(h11.current, {
      delay: 0.5,
      opacity: 1,
      y: 20,
      // duration: 1.5,
      ease: "Power3.easeIn",
    })
      .from(
        h12.current,
        {
          opacity: 1,
          y: 20,
          // duration: 1.5,
          ease: "Power3.easeIn",
        },
        "-=1.2"
      )
      .from(
        h13.current,
        {
          opacity: 1,
          y: 20,
          duration: 1.5,
          ease: "Power3.easeIn",
        },
        "-=1.2"
      )
      .from(
        myimageref.current,
        {
          opacity: 1,
          scale: 0.8,
          duration: 1.5,
          ease: "Power3.easeIn",
        },
        "-=1"
      );
  }, []);

  return (
    <main className="container mx-auto max-width section md:flex justify-between items-center">
      <div>
        <h1
          ref={h11}
          className="text-2xl text-dark-heading dark:text-light-heading md:text-4xl xl:text-4xl xl:leading-tight font-bold"
        >
          Hi,👋
          <br />
          My Name is
          <br />
        </h1>
        <h1
          ref={h12}
          className="text-2xl bg-clip-text bg-gradient text-transparent md:text-4xl xl:text-4xl xl:leading-tight font-bold"
        >
          {name}
        </h1>
        <h2
          ref={h13}
          className="text-2xl text-dark-heading dark:text-light-heading md:text-4xl xl:text-4xl xl:leading-tight font-bold"
        >
          {tagline}
        </h2>
      </div>
      <div className="mt-5 md:mt-0">
        <img
          ref={myimageref}
          className="w-1/2 md:ml-auto"
          src={img}
          alt="Rinoy K Joseph"
        />
      </div>
    </main>
  );
}

export default Home;
