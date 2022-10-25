import * as Settings from "@/utils/settings";
import Link from "next/link";
import { SiLinkedin } from "react-icons/si";
import { HiOutlineMail } from "react-icons/hi";
import MagneticButtonSecondary from "../MagneticButtonSecondary";

const Footer = () => {
  return (
    <footer className="w-full">
      <section id="contact-me" className="my-12 px-8">
        <div className="container px-8 bg-fk-green-darker dark:bg-fk-gray mx-auto text-fk-darkGray dark:text-white py-20 rounded-3xl overflow-hidden before:rounded-3xl text-center before:absolute before:bg-mesh2 before:bg-cover before:inset-0 before:mix-blend-soft-light before:dark:mix-blend-overlay before:opacity-100 relative before:animate-hue-rotate before:pointer-events-none">
          <div className="flex flex-col items-center justify-center gap-8 ">
            <h2 className="text-3xl lg:text-6xl font-bold max-w-2xl">
              Let's Collaborate And Work Together!
            </h2>
            <div className="flex flex-col gap-4 md:flex-row">
              <MagneticButtonSecondary>
                <Link href={Settings.LINKEDIN_URI} rel="noreferrer">
                  <a
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-4 px-10 py-4"
                  >
                    <span>Get in touch</span>
                    <SiLinkedin size={24} />
                  </a>
                </Link>
              </MagneticButtonSecondary>
              <MagneticButtonSecondary variant="outlined">
                <Link href={`mailto:${Settings.EMAIL}`}>
                  <a className="flex items-center gap-4 px-10 py-4">
                    <span>Leave me an e-mail</span>
                    <HiOutlineMail size={24} />
                  </a>
                </Link>
              </MagneticButtonSecondary>
            </div>
          </div>
        </div>
      </section>
      <div className="container mx-auto flex flex-col border-t border-fk-gray dark:border-fk-white pt-8 md:flex-row"></div>
    </footer>
  );
};

export default Footer;
