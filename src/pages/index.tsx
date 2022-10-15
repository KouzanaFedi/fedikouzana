import {
  FiChevronsDown,
  FiChevronsRight,
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
        <img
          src="/dark-bg-mesh2.png"
          className="absolute z-0 -top-40 right-0 overflow-hidden select-none"
        />
        <section id="greeting-block" className="pt-20 relative">
          <div className="container px-4 mx-auto overflow-x-clip flex items-center mt-14 md:mt-28 md:mb-28 relative md:overflow-visible">
            <div className="w-full space-y-6 lg:w-2/3">
              <h1 className="text-white text-2xl md:text-3xl font-bold font-header z-10">
                Greetings, I’m Fedi!
              </h1>
              <p className="text-4xl md:text-6xl font-header font-bold text-fk-white max-w-4xl z-10 lg:text-start">
                Building <span className="text-fk-green">web based</span>{" "}
                solutions and <span className="text-fk-green">mobile</span>{" "}
                applications.
              </p>
              <div className="flex flex-col space-y-4 !mt-12 justify-center items-center md:flex-row md:space-x-8 md:space-y-0 z-10 lg:justify-start">
                <MagneticButton>
                  <Link href="#projects">
                    <a className="flex items-center gap-4">
                      <span>Check my work</span>
                      <FiChevronsDown
                        className="group-hover:animate-fk-bounce-animation"
                        size={24}
                      />
                    </a>
                  </Link>
                </MagneticButton>

                <MagneticButton variant="outlined">
                  <span className="group-hover:z-30">My resume</span>
                  <FiDownload className="group-hover:z-30" size={24} />
                </MagneticButton>
              </div>
            </div>
            <div className="hidden w-1/3 justify-center lg:flex">
              <img src="/avatar.png" alt="avatar" className="select-none" />
            </div>
          </div>
          <div className="mx-auto container flex flex-col gap-y-12 items-center p-4 md:p-2 gap-x-8 lg:flex-row-reverse lg:gap-y-0 xl:gap-x-24">
            <div className="w-full lg:w-1/2 flex flex-col gap-y-8">
              <h2 className=" text-fk-white text-5xl font-bold">
                Motivated fullstack and <br />
                mobile developer
              </h2>
              <p className="text-fk-white-lighter text-2xl">
                Hello and welcome to my portfolio! My name is Fedi, and I'm a
                passionate programmer and gamer.
                <br /> For web programming, I mainly use the{" "}
                <span className="text-fk-green font-black special-element">MERN</span> stack as
                well as using frameworks like Next.js Nest.js and TailwindCSS,
                while for mobile development, I work with{" "}
                <span className="text-fk-green font-black special-element">Flutter</span>.
              </p>
            </div>
            <div className="w-full flex flex-col lg:flex-col md:flex-row lg:w-1/2 gap-6">
              <div className="special-element md:w-1/2 lg:w-full flex flex-col gap-y-4 bg-fk-darkGray rounded-[32px] px-8 py-6">
                <div className="flex justify-between items-center">
                  <div className="flex gap-x-4 items-center">
                    <div className="rounded-full text-fk-white bg-fk-green p-2">
                      <FiMonitor size={24} />
                    </div>
                    <h3 className="font-bold text-2xl text-fk-green">
                      Website development
                    </h3>
                  </div>
                </div>
                <p className="text-fk-white">
                  Created with React, Vanilla HTML and CSS or Even WordPress.
                  Landing pages? Dashboards? plateforms? You name it, the choice
                  is yours. Performance and responsive design garenteed.
                </p>
              </div>
              <div className="special-element md:w-1/2 lg:w-full flex flex-col gap-y-4 bg-fk-darkGray rounded-[32px] px-8 py-6">
                <div className="flex justify-between items-center h-[60px]">
                  <div className="flex gap-x-4 items-center">
                    <div className="rounded-full text-fk-white bg-fk-green p-2">
                      <FiSmartphone size={24} />
                    </div>
                    <h3 className="font-bold text-2xl text-fk-green">
                      Mobile development
                    </h3>
                  </div>
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
            <h2 className="text-fk-white text-5xl font-bold">
              Featured Projects
            </h2>
            <div className="mx-auto grid grid-cols-3 gap-6 mt-12 mb-20">
              {[1, 2, 3, 4, 5].map((num) => (
                <ProjectPreview key={num} />
              ))}
              <div className="flex justify-center items-center">
                <MagneticButton>
                  <Link href="/projects">
                    <a className="flex items-center gap-4 text-fk-gray">
                      <span>See more</span>
                      <FiChevronsRight size={24} className="" />
                    </a>
                  </Link>
                </MagneticButton>
              </div>
            </div>
          </div>
        </section>
        <section id="carrer" className="md:pt-24 pt-12 p-4">
          <div className="container mx-auto px-4 space-y-12">
            <h2 className="text-fk-white text-5xl font-bold">
              My carrer so far
            </h2>
            <div className="w-full rounded-lg bg-fk-darkGray p-9">
              <div className="w-fit p-2 rounded-lg bg-fk-gray flex items-center gap-2 max-w-xs font-bold text-sm">
                <button className="px-6 py-2 rounded-lg bg-fk-green text-fk-gray">
                  Professional
                </button>
                <button className="px-6 py-2 rounded-lg bg-fk-green-darker text-fk-white">
                  Academic
                </button>
              </div>
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
