import Layout from "@/components/layout/Layout";
import ProjectPreview from "@/components/ProjectPreview";

const Projects = () => {
  return (
    <Layout>
      <section id="projects" className="md:pt-24 pt-12 p-4">
        <div className="container mx-auto gap-y-12 mt-24">
          <h2 className="text-fk-black-blue dark:text-fk-white text-5xl font-bold text-center">
            Projects
          </h2>
          <div className="mx-auto grid max-w-7xl grid-cols-2 gap-28 mt-20 mb-28">
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
              <ProjectPreview key={index} img={img} />
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Projects;
