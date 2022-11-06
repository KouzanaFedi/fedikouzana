import Layout from "@/components/layout/Layout";
import ProjectPreview from "@/components/projects/ProjectPreview";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <Layout>
      <section id="projects" className="md:pt-24 pt-12 p-4">
        <div className="container relative mx-auto gap-y-12 mt-24">
          <h1 className="text-fk-black-blue dark:text-fk-white text-4xl md:text-5xl font-bold text-center">
            Projects
          </h1>
          <div className="mx-auto grid max-w-7xl grid-cols-1 gap-28 mt-20 mb-28 md:grid-cols-2 px-8">
            {[
              "/project-1.png",
              "/project-2.png",
              "/project-3.png",
              "/project-4.png",
              "/project-1.png",
              "/project-2.png",
              "/project-3.png",
              "/project-4.png",
              "/project-1.png",
              "/project-2.png",
              "/project-3.png",
              "/project-4.png",
            ].map((img, index) => (
              <motion.div
                initial={{
                  opacity: 0,
                  x: index % 2 === 0 ? -100 : 100,
                  y: 100,
                }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  type: "spring",
                  bounce: 0.3,
                }}
                key={index}
              >
                <ProjectPreview heading="h2" img={img} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Projects;
