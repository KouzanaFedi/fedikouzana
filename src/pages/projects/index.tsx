import { getAllProjects } from "@/cms";
import { ProjectPreviewData } from "@/cms/types";
import Layout from "@/components/layout/Layout";
import ProjectPreview from "@/components/projects/ProjectPreview";
import { motion } from "framer-motion";
import { GetStaticProps } from "next";

type Props = {
  projects: ProjectPreviewData[];
};

const Projects = ({ projects }: Props) => {
  return (
    <Layout>
      <section id="projects" className="md:pt-24 pt-12 p-4">
        <div className="container relative mx-auto gap-y-12 mt-24">
          <h1 className="text-fk-black-blue dark:text-fk-white text-4xl md:text-5xl font-bold text-center">
            Projects
          </h1>
          <div className="mx-auto grid max-w-7xl grid-cols-1 gap-28 mt-20 mb-28 md:grid-cols-2 px-8">
            {projects.map((project, index) => (
              <motion.div
                initial={{
                  opacity: 0,
                  x: index % 2 === 0 ? -75 : 75,
                  y: 75,
                }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 1,
                  type: "spring",
                  bounce: 0.3,
                }}
                key={project.id}
              >
                <ProjectPreview
                  heading="h2"
                  alias={project.alias}
                  img={project.thumbnail}
                  title={project.title}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Projects;

export const getStaticProps: GetStaticProps = async (ctx) => {
  const projects = await getAllProjects();
  return {
    props: { projects },
    revalidate: 10,
  };
};