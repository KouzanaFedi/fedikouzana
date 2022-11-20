import { getAllProjects } from "@/cms";
import { ProjectPreviewData } from "@/cms/types";
import Layout from "@/components/layout/Layout";
import ProjectList from "@/components/projects/ProjectList";
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
          <ProjectList list={projects} />
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
