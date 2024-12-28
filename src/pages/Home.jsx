import { FaGithub } from "react-icons/fa";
import bgImage from "../assets/bg.svg";
import Logo from "../assets/logo.png";
import { FaLinkedin } from "react-icons/fa6";
import Lottie from "lottie-web";
import HandWaving from "../statiic/Animation - 1735389841095.json";
import React from "react";

const Home = () => {
  React.useEffect(() => {
    Lottie.loadAnimation({
      container: document.querySelector("#hand-waving"),
      animationData: HandWaving,
    });
  }, []);
  return (
    <div
      className='h-screen pb-14 bg-right bg-cover'
      style={{ backgroundImage: `url($bgImage)` }}>
      {/* <!--Nav--> */}
      <div className='w-full container mx-auto p-6'>
        <div className='w-full flex items-center justify-between'>
          <a href='#'>
            <img src={Logo} className='h-6 w-auto' />
          </a>

          <div className='flex w-1/2 justify-end content-center'>
            <a
              className='inline-block text-blue-300 no-underline hover:text-indigo-800 hover:text-underline text-center h-10 p-2 md:h-auto md:p-4'
              data-tippy-content='@twitter_handle'
              href='https://twitter.com/intent/tweet?url=#'>
              <FaGithub className='h-8 w-auto' />
            </a>
            <a
              className='inline-block text-blue-300 no-underline hover:text-indigo-800 hover:text-underline text-center h-10 p-2 md:h-auto md:p-4 '
              data-tippy-content='#facebook_id'
              href='https://www.facebook.com/sharer/sharer.php?u=#'>
              <FaLinkedin className='h-8 w-auto' />
            </a>
          </div>
        </div>
      </div>

      {/* <!--Main--> */}
      <div className='container pt-24 md:pt-48 px-6 mx-auto flex flex-wrap flex-col md:flex-row items-center'>
        {/* <!--Left Col--> */}
        <div className='flex flex-col w-full xl:w-2/5 justify-center lg:items-start overflow-y-hidden'>
          <h1 className='my-4 text-3xl md:text-5xl text-purple-800 font-bold leading-tight text-center md:text-left slide-in-bottom-h1'>
            Hi!
            <div className='h-16 w-auto inline-block' id='hand-waving'>
              <span id='hand-waving'></span>
            </div>
            I'm Blessing
          </h1>
          <p className='leading-normal text-base md:text-2xl mb-8 text-center md:text-left slide-in-bottom-subtitle'>
            {/* Sub-hero message, not too long and not too short. Make it just
            right! */}
          </p>

          <p className='text-blue-400 font-bold pb-8 lg:pb-6 text-center md:text-left fade-in'>
            Download our app:
          </p>
          <div className='flex w-full justify-center md:justify-start pb-24 lg:pb-0 fade-in'>
            <img src='App Store.svg' className='h-12 pr-4 bounce-top-icons' />
            <img src='Play Store.svg' className='h-12 bounce-top-icons' />
          </div>
        </div>

        {/* <!--Right Col--> */}
        <div className='w-full xl:w-3/5 py-6 overflow-y-hidden'>
          <img
            className='w-5/6 mx-auto lg:mr-0 slide-in-bottom'
            src={bgImage}
          />
        </div>

        {/* <!--Footer--> */}
        <div className='w-full pt-16 pb-6 text-sm text-center md:text-left fade-in'>
          <a className='text-gray-500 no-underline hover:no-underline' href='#'>
            &copy; App 2019
          </a>
        </div>
      </div>
    </div>
  );
};
export default Home;
