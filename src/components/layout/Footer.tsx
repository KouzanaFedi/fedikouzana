import * as Settings from "@/utils/settings";
import Link from "next/link";
import { SiLinkedin } from "react-icons/si";
import { HiOutlineMail } from "react-icons/hi";

const Footer = () => {
  return (
    <footer className="w-full">
      <section id="contact-me" className="my-12 p-4">
        <div className="container mx-auto text-white py-20 rounded-3xl overflow-hidden before:rounded-3xl text-center bg-gradient-to-br from-fk-orange to-fk-pink before:absolute before:bg-mesh2 before:bg-cover before:inset-0 before:mix-blend-overlay before:opacity-100 relative before:animate-hue-rotate before:pointer-events-none">
          <div className="flex flex-col items-center justify-center gap-8">
            <h2 className="text-3xl lg:text-6xl font-bold max-w-2xl">
              Let's Collaborate And Work Together!
            </h2>
            <div className="flex flex-col gap-4 md:flex-row">
              <Link href={Settings.LINKEDIN_URI} rel="noreferrer">
                <a
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center font-bold text-lg lg:text-xl space-x-4 bg-fk-darkGray px-10 py-4 text-white rounded-lg "
                >
                  <span className="text-fk-white font-medium">
                    Get in touch
                  </span>
                  <SiLinkedin size={24} className="text-fk-white" />
                </a>
              </Link>
              <Link href={`mailto:${Settings.EMAIL}`}>
                <a className="flex items-center font-bold text-lg lg:text-xl space-x-4 bg-fk-gray/80 px-10 py-4 text-white rounded-lg ">
                  <span className="text-fk-white font-medium">
                    Leave me an e-mail
                  </span>
                  <HiOutlineMail size={24} className="text-fk-white" />
                </a>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <div className="container mx-auto flex flex-col border-t border-fk-orange pt-8 md:flex-row"></div>
    </footer>
  );
};

export default Footer;
