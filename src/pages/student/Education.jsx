import React, { useEffect } from 'react';
import './CyberFiction.css';
import 'locomotive-scroll/dist/locomotive-scroll.css';
import LocomotiveScroll from 'locomotive-scroll';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import Navbar from '../../components/student/Navbar';

const Education = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const locoScroll = new LocomotiveScroll({
      el: document.querySelector('#main'),
      smooth: true,
    });

    locoScroll.on('scroll', ScrollTrigger.update);

    ScrollTrigger.scrollerProxy('#main', {
      scrollTop(value) {
        return arguments.length
          ? locoScroll.scrollTo(value, 0, 0)
          : locoScroll.scroll.instance.scroll.y;
      },
      getBoundingClientRect() {
        return {
          top: 0,
          left: 0,
          width: window.innerWidth,
          height: window.innerHeight,
        };
      },
      pinType: document.querySelector('#main').style.transform ? 'transform' : 'fixed',
    });

    ScrollTrigger.addEventListener('refresh', () => locoScroll.update());
    ScrollTrigger.refresh();

    return () => locoScroll.destroy();
  }, []);

  return (
    <>
      <Navbar />
      <div id="main">
        {/* ...rest of the CyberFiction content... */}
        <div id="nav">
          <h3><b>CYBER</b>FICTION*</h3>
          <button>APRIL,2023</button>
        </div>
        <div id="page">
          <div id="loop">
            {[...Array(3)].map((_, i) => (
              <h1 key={i}>
                <b>CYBER</b>FICTION IS THE <b><i>REAL</i></b> <span>STORY</span> IN THE <span><i>METAVERSE.</i></span>
              </h1>
            ))}
          </div>
          <h3>
            CYBERFICTION AIMS TO BE A DECENTRALIZED COMMUNITY THAT CAN <br />
            CREATE NEW VALUES AND PROFITS THROUGH PLAY IN THE VIRTUAL <br />
            WORLD.
          </h3>
          <h4>...SCROLL TO READ</h4>
          <canvas></canvas>
        </div>
        <div id="page1">
          <div id="right-text">
            <h3>CYBERFICTION / KEY WORD</h3>
            <h1>
              HAVE FUN
              <br />
              LET'S PLAY
              <br />
              JUST BE TOGETHER
            </h1>
          </div>
          <div id="left-text">
            <h1>
              MAKE A STORY
              <br />
              TAKE A CHANCE
              <br />
              BUILD AND OWNED
            </h1>
            <h3>..AND MAINTAIN GOOD HUMANITY</h3>
          </div>
        </div>
        <div id="page2">
          <div id="text1">
            <h3>CYBERFICTION / HAVE FUN</h3>
            <h1>
              LET'S
              <br />
              HAVE FUN
              <br />
              TOGETHER
            </h1>
          </div>
          <div id="text2">
            <p>
              LET'S HAVE A BLAST! LET'S JUST THROW AWAY AGE, GENDER, REGION, <br />
              STATUS, ETC., DON'T COMPETE, DON'T FIGHT, COOPERATE AND SHARE <br />
              WITH EACH OTHER AND ENJOY IT TOGETHER! SO THAT YOU CAN STAND <br />
              THERE IN THE NOT-TOO-DISTANT FUTURE AND DREAM OF ANOTHER NEW <br />
              FUTURE
            </p>
          </div>
        </div>
        <div id="page3">
          <div id="text3">
            <h3>CYBERFICTION / PLAYGROUND</h3>
            <h1>
              CYBERFIELD
              <br />
              IS OUR
              <br />
              PLAYGROUND
            </h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Education;