import React, { useRef } from "react";
import { motion, animate } from "framer-motion";
import Typewriter from "typewriter-effect";
import { BsArrowUpRight, BsChevronDown } from "react-icons/bs";
import me from "../assets/logo.png";

const Home = () => {
  const clientCount = useRef(null);
  const projectsCount = useRef(null);
  const animationClientsCount = () => {
    animate(0, 350, {
      duration: 1,
      onUpdate: (v) => (clientCount.current.textContent = v.toFixed()),
    });
  };
  const animationProjectsCount = () => {
    animate(0, 30, {
      duration: 1,
      onUpdate: (v) => (projectsCount.current.textContent = v.toFixed()),
    });
  };
  const animations = {
    h1: {
      initial: {
        x: "-100%",
        opacity: 0,
      },
      whileInView: {
        x: 0,
        opacity: 1,
      },
    },
    button: {
      initial: {
        y: "-100%",
        opacity: 0,
      },
      whileInView: {
        y: 0,
        opacity: 1,
      },
    },
  };
  return (
    <div id="home">
      <section>
        <div>
          <motion.h1 {...animations.h1}>
            Hi, I Am <br /> Shashank Kumar
          </motion.h1>

          <Typewriter
            options={{
              strings: [
                "A Frontend Developer",
                "A Backend Developer",
                "A Fullstack Developer",
              ],
              autoStart: true,
              loop: true,
              cursor: "",
              wrapperClassName: "typewriterpara",
            }}
          />
          <div>
            <a href="mailto:mr.shashankkumar.alld57@gmail.com">Hire Me</a>
            <a href="#work">
              Projects <BsArrowUpRight />
            </a>
          </div>
          <article>
            <p>
              <motion.span
                whileInView={animationClientsCount}
                ref={clientCount}
              ></motion.span>
              +
            </p>
            <span>Problem solved</span>
          </article>
          <aside>
            <article>
              <p>
                <motion.span
                  whileInView={animationProjectsCount}
                  ref={projectsCount}
                ></motion.span>
                +
              </p>
              <span>Projects Made</span>
            </article>
            <article data-special>
              <p>Contact</p>
              <span>mr.shashankkumar.alld57@gmail.com</span>
            </article>
          </aside>
        </div>
      </section>
      <section>
        <img src={me} alt="Shashank" />
      </section>
      <BsChevronDown />
    </div>
  );
};

export default Home;
