import React from 'react';
export default function About() {
  return (
    <section id="about">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            Hi, I'm Developer.
            <br className="hidden lg:inline-block" />I love to build amazing
            web apps.
          </h1>
          <p className="mb-8 leading-relaxed">
            A dedicated web and Android developer passionate about creating innovative and user-friendly digital experiences. I stay updated with the latest trends to ensure my work meets current standards and enhances user experience. Let's connect and bring your ideas to life!
          </p>
          <div className="flex justify-center">
            <a
              href="#contact"
              className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
              Work With Me
            </a>
            {/* <a
              href="#projects"
              className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
              See My Past Work
            </a> */}
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src="data:image/jpeg;base64,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"
          />
        </div>
      </div>
    </section>
  );
}
