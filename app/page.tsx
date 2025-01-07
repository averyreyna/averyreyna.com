import React from 'react';
import Footer from "./components/footer";
import Publications from "./components/publications";
import Connections from "./components/connections";

export default function Home() {
  return (
    <div className="absolute inset-0 w-screen overflow-x-hidden font-sans bg-white">
      {/* Hero Section */}
      <header className="h-1/2 bg-white flex p-16 space-x-16 phone:flex-col phone:w-full phone:p-4 phone:space-x-0 phone:h-auto">
        <div className="w-1/3 phone:w-full text-gray-500 text-2xl phone:text-lg">
          <h1 className="text-gray-900 font-semibold tracking-tighter mb-4">
            Hello! I'm Avery Reyna.
          </h1>
          I'm a Software Engineer working on data quality management at Capital One.
          <div className="phone:mt-2 phone:mb-4 my-4">
            <a
              href="/about"
              className="bg-gray-100 p-2 rounded-md px-3 py-2 text-base hover:bg-gray-200 phone:text-sm"
            >
              About
            </a>
            <a
              href="/blog"
              className="bg-gray-100 p-2 rounded-md px-3 py-2 text-base hover:bg-gray-200 phone:text-sm"
            >
              Blog
            </a>
          </div>
        </div>
        <div className="w-2/3 phone:w-full bg-gray-100 rounded-md h-full flex justify-end items-end phone:mt-4 phone:h-64">
          {/* You can add a hero image or component here */}
        </div>
      </header>

      <main className="bg-white w-screen p-16 phone:p-4">
        {/* Publications Section */}
        <section className="mb-16">
          <div className="flex space-x-16 phone:flex-col phone:space-x-0">
            <div className="w-1/3 phone:w-full">
              <div className="sticky top-24 phone:static">
                <h2 className="text-2xl text-gray-900 phone:text-lg">
                  Capital One
                </h2>
                <p className="mt-1 mb-0 text-gray-500 text-lg phone:text-base">
                  {/* Research work in computational social science and HCI. */}
                </p>
              </div>
            </div>
            <div className="w-2/3 phone:w-full phone:mt-4">
              <Publications />
            </div>
          </div>
        </section>

        {/* Concept Mesh Section */}
        <section className="mb-16">
          <div className="flex space-x-16 phone:flex-col phone:space-x-0">
            <div className="w-1/3 phone:w-full">
              <div className="sticky top-24 phone:static">
                <h2 className="text-2xl text-gray-900 phone:text-lg">
                  Undergradute Research
                </h2>
                <p className="mt-1 mb-0 text-gray-500 text-lg phone:text-base">
                  Exploring interconnected ideas and concepts.
                </p>
              </div>
            </div>
            <div className="w-2/3 phone:w-full phone:mt-4">
              <Publications />
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="mb-16">
          <div className="flex space-x-16 phone:flex-col phone:space-x-0">
            <div className="w-1/3 phone:w-full">
              <div className="sticky top-24 phone:static">
                <h2 className="text-2xl text-gray-900 phone:text-lg">
                  Project Archive
                </h2>
                <p className="mt-1 mb-0 text-gray-500 text-lg phone:text-base">
                  All projects, big and small.
                </p>
              </div>
            </div>
            <div className="w-2/3 phone:w-full phone:mt-4">
              {/* <Footer /> */}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}