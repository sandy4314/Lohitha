import React, { useEffect } from 'react';
import myimage from '/src/assets/lohi.png'; // Ensure this path is correct
//import resume from '/src/assets/resume.pdf'; // Ensure the resume file exists in the correct path
import Button from './Button';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles

const Home = () => {
  // Initialize AOS when the component mounts
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  // Function to open resume in a new tab
  const handleResumeClick = () => {
    window.open(resume, '_blank');
  };

  const handleConnectClick = () => {
    const email = 'chittemlohitha@gmail.com';
    const subject = encodeURIComponent("Let's Connect");
    const body = encodeURIComponent("Hello Lohitha,\n\nI would like to connect with you.");
    
    window.open(`mailto:${email}?subject=${subject}&body=${body}`, '_self');
  };
  

  return (
    <div id="home" className="mt-24  ml-7 flex flex-col-reverse md:flex-row items-center md:items-start px-6 lg:px-28">
      
      {/* Text Section */}
      <div className="md:mt-14 mt-10 text-center md:text-left md:w-1/2" data-aos="fade-up" data-aos-duration="1000">
        <h1 className="text-2xl  md:text-3xl flex flex-col gap-2">
          <span className='text-pink-400 '>Hello ,I'm</span>
          <span className='font-bold text-[45px] '>Lohitha</span>
        </h1>
        <h1 className="mt-5 font-extrabold font-[Poppins] text-2xl md:text-3xl">
          Full Stack Web Developer<br/>
          AI & ML Enthusiast
        </h1>
        <p className="mt-5 text-gray-600 text-lg md:text-xl leading-relaxed">
          Passionate about creating intelligent solutions and building innovative applications
          that make a difference
        </p>
        <div className="mt-11 flex justify-center md:justify-start space-x-2 ">
          <Button onClick={handleResumeClick}>VIEW RESUME</Button>
          <Button onClick={handleConnectClick}>LET'S CONNECT</Button>
        </div>
      </div>

      {/* Image Section */}
      <div className="md:mt-10 xl:mt-0 lg:mt-10 md:w-1/2 flex justify-center md:justify-end" data-aos="zoom-in" data-aos-duration="1000">
        <img
          src={myimage}
          alt="Profile"
          className="mt-10 w-[80%] md:w-[80%] lg:w-[80%] max-w-[400px] h-auto rounded-full hover:-translate-y-3 duration-500 hover:-translate-x-3 hover:shadow-[5px_5px_0_0_rgba(255,126,220)] cursor-pointer"
        />
      </div>
    </div>
  );
};

export default Home;
