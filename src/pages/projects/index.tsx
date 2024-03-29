import { getAllProjects } from "@/cms";
import { ProjectPreviewData } from "@/cms/types";
import Layout from "@/components/layout/Layout";
import ProjectList from "@/components/projects/ProjectList";
import DefaultSeo, { defaultValues } from "@/utils/defaultSeo";
import { GetStaticProps } from "next";
import { NextSeo } from "next-seo";
import { useRouter } from "next/router";

type Props = {
  projects: ProjectPreviewData[];
};

const Projects = ({ projects }: Props) => {
  const router = useRouter();

  return (
    <>
      <NextSeo
        {...DefaultSeo}
        canonical={`${defaultValues.url}${router.asPath}`}
        title={`${defaultValues.templateTitle} Projects`}
        description="Welcome to my Projects page, where I proudly showcase a comprehensive collection of my past work. Explore this curated portfolio featuring a diverse range of projects, including a cinema management software, an e-commerce website, an archive app for doctors, and more. Each project reflects my expertise as a full-stack engineer, utilizing cutting-edge technologies like React, Next.js, Node.js, and WordPress. From captivating user interfaces to seamless functionalities, these projects highlight my commitment to delivering exceptional web solutions. Immerse yourself in this showcase of my innovative work and witness the transformative power of technology in action."
      />
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
    </>
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
