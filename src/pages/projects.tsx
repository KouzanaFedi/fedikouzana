import Layout from "@/components/layout/Layout";
import ProjectPreview from "@/components/projects/ProjectPreview";

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
              <ProjectPreview heading="h2" key={index} img={img} />
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Projects;
