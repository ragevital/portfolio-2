'use client'
import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";

import Link from 'next/link';

const Footer = () => {
  return (
    <div className="w-full py-20 h-auto bg-bodyColor border-b-[1px] border-b-black grid grid-cols-1 md:grid-cols-2 lgl:grid-cols-4 gap-8 px-8">
      <div className="w-full h-full flex flex-col gap-8">
        <img className="w-32" src="./assets/images/logo.jpg" alt="logo" />
        <div className="flex gap-4">
          <span className="bannerIcon">
            <a href="https://www.facebook.com/patrickloic.tebu" target="_blank">
              <FaFacebookF />
            </a>
          </span>
          <span className="bannerIcon">
            <a href="https://twitter.com/loic_kamgaing" target="_blank">
              <FaTwitter />
            </a>
          </span>
          <span className="bannerIcon">
            <a
              href="https://www.linkedin.com/in/patrick-lo%C3%AFc-kamgaing-362639258/"
              target="_blank"
            >
              <FaLinkedinIn />
            </a>
          </span>
        </div>
      </div>
      <div className="w-full h-full">
        <h3 className="text-xl uppercase text-designColor tracking-wider">
          Quick Link
        </h3>
        <ul className="flex flex-col gap-4 font-titleFont font-medium py-6 overflow-hidden">
          <li>
            <Link href="/">
              <span className="w-full text-lg relative hover:text-designColor duration-300 group cursor-pointer">
                About
                <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
              </span>
            </Link>
          </li>
          <li>
            <Link href="/features">
              <span className="w-full text-lg relative hover:text-designColor duration-300 group cursor-pointer">
                Features
                <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
              </span>
            </Link>
          </li>
          <li>
            <Link href="/projects">
              <span className="w-full text-lg relative hover:text-designColor duration-300 group cursor-pointer">
                Projects
                <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
              </span>
            </Link>
          </li>
          <li>
            <Link href="/resume">
              <span className="w-full text-lg relative hover:text-designColor duration-300 group cursor-pointer">
                Resume
                <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
              </span>
            </Link>
          </li>
          <li>
            <Link href="/testimonial-list">
              <span className="w-full text-lg relative hover:text-designColor duration-300 group cursor-pointer">
                Testimonials
                <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
              </span>
            </Link>
          </li>
          <li>
            <Link href="/contact">
              <span className="w-full text-lg relative hover:text-designColor duration-300 group cursor-pointer">
                Contact
                <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
              </span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
