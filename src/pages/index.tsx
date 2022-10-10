import {
  FiChevronsDown,
  FiDownload,
  FiMonitor,
  FiPlus,
  FiSmartphone,
} from "react-icons/fi";
import Layout from "@/components/layout/Layout";
import ProjectPreview from "@/components/ProjectPreview";
import Link from "next/link";
import VerticaleTimeLine from "@/components/VerticalTimeLine";
import MagneticButton from "@/components/MagneticButton";

export default function Home() {
  return (
    <>
      <Layout>
        <section id="greeting-block" className="pt-20">
          <div className="container mx-auto overflow-x-clip flex items-center mt-14 md:mt-28 md:mb-28 text-center relative md:overflow-visible">
            <div className="w-full space-y-6 lg:w-1/2">
              <h1 className="text-white text-2xl md:text-3xl font-bold font-header z-10">
                Greetings, 🖖 I’m Fedi,
              </h1>
              <p className="text-4xl md:text-5xl font-header font-bold text-fk-white max-w-4xl z-10 lg:text-start">
                Building{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-fk-pink to-fk-orange animate-hue-rotate">
                  web based
                </span>{" "}
                solutions and{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-fk-orange to-fk-pink animate-hue-rotate-middle">
                  mobile
                </span>{" "}
                applications
              </p>
              <div className="flex flex-col space-y-4 !mt-12 justify-center items-center md:flex-row md:space-x-8 md:space-y-0 z-10 lg:justify-start">
                <Link href="#projects">
                  <a className="group flex items-center space-x-4 font-bold bg-gradient-to-l from-fk-pink to-fk-orange px-10 py-4 text-fk-gray text-lg rounded-lg duration-700 transition-all">
                    <span>Check my work</span>
                    <FiChevronsDown
                      className="group-hover:animate-fk-bounce-animation"
                      size={24}
                    />
                  </a>
                </Link>
                <MagneticButton />
                <button className="bg-gradient-to-l from-fk-pink to-fk-orange group relative overflow-hidden font-bold text-lg p-[2px] text-white rounded-lg transition-colors before:transition-transform before:content-[''] before:h-full before:w-full before:bg-gradient-to-l before:from-fk-pink before:to-fk-orange before:absolute before:bottom-full before:left-0 hover:before:translate-y-full before:duration-500 hover:text-fk-gray">
                  <div className="flex items-center space-x-4 w-full h-full px-10 py-4 rounded-lg bg-fk-gray z-10 group-hover:transparent">
                    <span className="group-hover:z-30">My resume</span>
                    <FiDownload className="group-hover:z-30" size={24} />
                  </div>
                </button>
              </div>
            </div>
            <div className="hidden w-1/2 h-full gap-y-8 justify-center lg:flex">
              <div className="flex gap-x-2 items-center">
                <img
                  className="opacity-80 "
                  src="/bg-shapes/left-purple.svg"
                  alt="left-purple"
                />
                <img
                  className="opacity-80 animate-bounce animate-hue-rotate-middle"
                  src="/bg-shapes/middle.svg"
                  alt="middle"
                />
                <img
                  className="opacity-80"
                  src="/bg-shapes/right-pink.svg"
                  alt="right-pink"
                />
              </div>
            </div>
          </div>
        </section>
        <section id="about-me" className="md:pt-24 pt-12">
          <div className="mx-auto container flex flex-col gap-y-12 items-center p-4 md:p-2 gap-x-8 lg:flex-row-reverse lg:gap-y-0 xl:gap-x-36">
            <div className="w-full lg:w-1/2 flex flex-col gap-y-8">
              <h2 className=" text-fk-white text-4xl font-bold">
                Motivated fullstack and <br />
                mobile developer
              </h2>
              <p className="text-fk-white-lighter text-2xl">
                Hello and welcome to my portfolio! My name is Fedi, and I'm a
                passionate programmer and gamer.
                <br /> For web programming, I mainly use the{" "}
                <span className="text-fk-pink">MERN</span> stack as well as
                using frameworks like Next.js Nest.js and TailwindCSS, while for
                mobile development, I work with{" "}
                <span className="text-fk-orange">Flutter</span>.
              </p>
            </div>
            <div className="w-full flex flex-col lg:flex-col md:flex-row lg:w-1/2 gap-6">
              <div className="md:w-1/2 lg:w-full flex flex-col gap-y-4 bg-fk-darkGray drop-shadow-lg rounded-[32px] p-6">
                <div className="flex justify-between items-center">
                  <div className="flex gap-x-4 items-center">
                    <div className="rounded-lg text-fk-white bg-fk-pink p-2">
                      <FiMonitor size={24} />
                    </div>
                    <h3 className="font-bold text-2xl text-fk-pink">
                      Website development
                    </h3>
                  </div>
                  <img src="/web-arrow.png" alt="web-arrow" />
                </div>
                <p className="text-fk-white">
                  Created with React, Vanilla HTML and CSS or Even WordPress.
                  Landing pages? Dashboards? plateforms? You name it, the choice
                  is yours. Performance and responsive design garenteed.
                </p>
              </div>
              <div className="md:w-1/2 lg:w-full flex flex-col gap-y-4 bg-fk-darkGray drop-shadow-lg rounded-[32px] p-6">
                <div className="flex justify-between items-center h-[60px]">
                  <div className="flex gap-x-4 items-center">
                    <div className="rounded-lg text-fk-white bg-fk-orange p-2">
                      <FiSmartphone size={24} />
                    </div>
                    <h3 className="font-bold text-2xl text-fk-orange">
                      Mobile development
                    </h3>
                  </div>
                  <img src="/mobile-arrow.png" alt="mobile-arrow" />
                </div>
                <p className="text-fk-white">
                  Mobile application created with Flutter. Performance and
                  smooth running apps garenteed. Currently building only on
                  Android; untill I get my MacBook Pro 🤞.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section id="projects" className="md:pt-24 pt-12 p-4">
          <div className="container mx-auto space-y-12">
            <h2 className="text-fk-white text-4xl font-bold">
              Featured Projects
            </h2>
            <div className="mx-auto flex flex-col gap-12 mt-12 mb-20">
              {[1, 2, 3, 4].map((num) => (
                <ProjectPreview key={num} />
              ))}
            </div>
            <div className="flex justify-center">
              <Link href="/projects">
                <a className="flex items-center text-xl space-x-4 font-medium bg-fk-orange/90 px-10 py-4 text-white rounded-lg hover:bg-fk-orange/80">
                  <span>See more</span>
                  <FiPlus size={24} className="text-white" />
                </a>
              </Link>
            </div>
          </div>
        </section>
        <section id="carrer" className="md:pt-24 pt-12 p-4">
          <div className="container mx-auto px-4 space-y-12">
            <h2 className="text-fk-white text-4xl font-bold">
              My carrer so far
            </h2>
            <div className="flex flex-col gap-4 lg:flex-row">
              <div className="w-full lg:w-1/2">
                <h3 className="text-fk-white text-3xl font-bold mb-8">
                  Academic
                </h3>
                <VerticaleTimeLine />
              </div>
              <div className="w-full lg:w-1/2">
                <h3 className="text-fk-white text-3xl font-bold mb-8">
                  Professional
                </h3>
                <VerticaleTimeLine />
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}
