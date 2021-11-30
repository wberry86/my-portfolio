import React from "react";

export default function About() {
  return (
    <section id="about">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            Hi, I'm Will. 
            <br className="hidden lg:inline-block" /> I am looking to start a career in Web Development.
          </h1>
          <p className="mb-8 leading-relaxed">
          Driven Full Stack Web Developer with a background in customer service and a Full-Stack Certificate from Vanderbilt University Coding Bootcamp - Nashville.  During the intensive boot camp, I have participated in multiple group projects specifically utilizing  Node.js, JavaScript, React, MySQL, and Apollo.  After building the applications from start to finish my team was able to demo the projects to a group of industry professionals with positive reviews. Enjoy collaborating and working on a diverse team as well as solving problems in high-stress environments.  An articulate individual who enjoys connecting with co-workers and is passionate about building applications that assist everyday people in order to make their lives easier.  Looking to bring my knowledge, communication, and technical skills to an organization while focusing on continuous learning also while engaging in my community to give back in the field of web development. Over 100+ hours of experience building full stack applications both individually and in teams. Past academic history includes a Bachelor of Arts in Film Studies from Carson Newman University.

          </p>
          <div className="flex justify-center">
            <a
              href="#contact"
              className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
              Contact Me
            </a>
            <a
              href="#projects"
              className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
              See My Past Work
            </a>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src="./profile_pic.jpg"
          />
        </div>
      </div>
    </section>
  );
}