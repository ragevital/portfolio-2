import React from 'react'
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";


const ContactLeft = () => {
  return (
    <div className="w-full lgl:w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-4 lgl:p-8 rounded-lg shadow-shadowOne flex flex-col gap-8 justify-center">
      <img
        className="w-full h-64 object-cover rounded-lg mb-2"
        src="../../assets/images/contactImg.jpg"
        alt="contactImg"
      />
      <div className="flex flex-col gap-4">
        <h3 className="text-3xl font-bold text-white">Patrick Kamgaing</h3>
        <p className="text-lg font-normal text-gray-400">
          Full Stack Developer
        </p>
        <p className="text-base text-gray-400 tracking-wide">
        Que vous ayez une question, un projet en tête ou simplement l'envie de discuter de vos idées, 
        je suis à votre disposition. N'hésitez pas à me contacter pour planifier une consultation gratuite et sans engagement.
        Ensemble, nous pouvons réaliser des projets qui feront la différence.
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Phone: <span className="text-lightText">+1 343-575-7592</span>
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Email: <span className="text-lightText">patrickloickamgaing@gmail.com</span>
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <h2 className="text-base uppercase font-titleFont mb-4">Find me in</h2>
        <div className="flex gap-4">
          <span className="bannerIcon">
            <a href='https://www.facebook.com/patrickloic.tebu'  target="_blank">
            <FaFacebookF />
            </a>
          </span>
          <span className="bannerIcon">
            <a href='https://twitter.com/loic_kamgaing'  target="_blank">
            <FaTwitter />
            </a>
          </span>
          <span className="bannerIcon">
            <a href='https://www.linkedin.com/in/patrick-lo%C3%AFc-kamgaing-362639258/'  target="_blank">
            <FaLinkedinIn />
            </a>
          </span>
        </div>
      </div>
    </div>
  );
}

export default ContactLeft