import * as Settings from "@/utils/settings";
import Link from "next/link";
import {
  SiDatocms,
  SiFramer,
  SiLinkedin,
  SiNextdotjs,
  SiReact,
  SiTailwindcss,
  SiTypescript,
  SiGreensock,
  SiUpwork,
} from "react-icons/si";
import { HiOutlineMail } from "react-icons/hi";
import { ImGithub, ImLinkedin2 } from "react-icons/im";
import MagneticButtonSecondary from "../buttons/MagneticButtonSecondary";
import { motion } from "framer-motion";
import FooterIcon from "../FooterIcon";

const Footer = () => {
  return (
    <footer className="w-full">
      <section id="contact-me" className="my-12 md:px-8">
        <motion.div
          initial={{
            opacity: 0,
            y: 200,
          }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.6,
            type: "spring",
            bounce: 0.3,
          }}
          className="container px-8 bg-fk-green dark:bg-fk-gray mx-auto text-fk-darkGray dark:text-white py-20 md:rounded-3xl overflow-hidden before:rounded-3xl text-center before:absolute before:dark:bg-mesh2 before:bg-cover before:inset-0 before:dark:mix-blend-overlay before:opacity-100 relative before:animate-hue-rotate before:pointer-events-none"
        >
          <div className="flex flex-col items-center justify-center gap-8 ">
            <h2 className="text-3xl lg:text-6xl font-bold max-w-2xl">
              Let's build something cool together!
            </h2>
            <div className="flex flex-col gap-4 md:flex-row">
              <MagneticButtonSecondary>
                <Link
                  href={Settings.LINKEDIN_URI}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-4 px-10 w-full py-4"
                >
                  <span>Get in touch</span>
                  <SiLinkedin size={24} />
                </Link>
              </MagneticButtonSecondary>
              <MagneticButtonSecondary variant="outlined">
                <Link
                  className="flex items-center gap-4 px-10 py-4"
                  href={`mailto:${Settings.EMAIL}`}
                >
                  <span>Leave me an e-mail</span>
                  <HiOutlineMail size={24} />
                </Link>
              </MagneticButtonSecondary>
            </div>
          </div>
        </motion.div>
      </section>
      <div className="container mx-auto flex flex-col justify-between items-center gap-4 border-t border-fk-gray text-center text-fk-darkGray dark:border-fk-white dark:text-fk-white p-4 md:flex-row">
        <div>
          Fedi Kouzana © <span>{new Date().getFullYear()}</span>{" "}
          <span className="hidden md:inline">-</span>
          <br className="md:hidden mb-4" /> Made with{" "}
          <FooterIcon icon={SiNextdotjs} label={"Next v12"} />
          |<FooterIcon icon={SiReact} label={"React v18"} />|
          <FooterIcon icon={SiTailwindcss} label={"Tailwind v3"} />|
          <FooterIcon icon={SiFramer} label={"Framer-motion v7"} />|
          <FooterIcon icon={SiGreensock} label={"GSAP3"} />|
          <FooterIcon icon={SiTypescript} label={"Typescript"} />|
          <FooterIcon icon={SiDatocms} label={"DatoCMS"} />
        </div>
        <div className="flex items-center gap-x-1">
          <Link
            target="_blank"
            className="underline underline-offset-4"
            href={Settings.PORTFOLIO_SOURCE_CODE}
            rel="noreferrer"
          >
            View Source
          </Link>
          <span> - </span>
          <Link
            target="_blank"
            title="LinkedIn"
            aria-label="LinkedIn"
            className="text-xl hover:text-blue-700"
            href={Settings.LINKEDIN_URI}
            rel="noreferrer"
          >
            <ImLinkedin2 />
          </Link>
          <span> | </span>
          <Link
            target="_blank"
            title="Github"
            aria-label="Github"
            className="text-xl hover:text-gray-800"
            rel="noreferrer"
            href={Settings.GITHUB_URI}
          >
            <ImGithub />
          </Link>
          <span> | </span>
          <Link
            target="_blank"
            title="Upwork"
            aria-label="Upwork"
            className="text-xl hover:text-green-500"
            href={Settings.UPWORK_URI}
            rel="noreferrer"
          >
            <SiUpwork />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
