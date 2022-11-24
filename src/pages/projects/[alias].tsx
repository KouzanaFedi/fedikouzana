import { getAllProjectsAlias, getProjectDetail } from "@/cms";
import { Project } from "@/cms/types";
import ReactMarkdown from "react-markdown";
import Header from "@/components/layout/Header";
import TechnologyIcon from "@/components/projects/TechnologyIcon";
import { motion } from "framer-motion";
import Image from "next/image";
import ProjectDataField from "@/components/projects/ProjectDataField";
import Link from "next/link";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import ViewWebSiteButton from "@/components/projects/ViewWebsiteButton";
import VisitGithubButton from "@/components/projects/VisitGithubButton";
import { NextSeo } from "next-seo";
import { useRouter } from "next/router";
import DefaultSeo, { defaultValues } from "@/utils/defaultSeo";

type Props = {
  projectData: Project;
  nextProject: string;
  prevProject: string;
};

const Project = ({ projectData, nextProject, prevProject }: Props) => {
  const router = useRouter();

  return (
    <>
      <NextSeo
        {...DefaultSeo}
        canonical={`${defaultValues.url}${router.asPath}`}
        title={`${defaultValues.templateTitle} ${projectData.title}`}
      />
      <Header />
      <div className="relative pt-20 flex flex-col lg:flex-row-reverse lg:overflow-hidden">
        <motion.div
          initial={{ right: 0, x: 0 }}
          animate={{ x: "100%" }}
          transition={{
            duration: 1.5,
            ease: "easeOut",
          }}
          className="flex absolute z-50"
        >
          <div className="w-screen h-[calc(100vh-80px)] bg-fk-white dark:bg-fk-darkGray" />
          <div className="w-screen h-[calc(100vh-80px)] bg-fk-green dark:bg-fk-green-darker" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 75 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 1,
            stiffness: 40,
            type: "spring",
            bounce: 0.3,
            delay: 1,
          }}
          className="lg:max-h-[calc(100vh-80px)] min-h-[calc(100vh-80px)] h-full w-full lg:w-4/12 bg-fk-white dark:bg-fk-darkGray lg:overflow-y-auto px-8 md:px-14 lg:px-8 xl:px-14 py-10"
        >
          <div className="flex items-center text-fk-green-darker mb-4 justify-end gap-2 -mt-4 -mr-8">
            <Link href={`/projects/${prevProject}`}>
              <a>
                <FiChevronLeft size={40} />
              </a>
            </Link>
            <Link href={`/projects/${nextProject}`}>
              <a>
                <FiChevronRight size={40} />
              </a>
            </Link>
          </div>
          <h1 className="font-black text-fk-gray dark:text-fk-white text-3xl lg:text-4xl uppercase leading-tight after:h-1 after:w-1/2 after:bg-fk-green after:block after:my-6">
            {projectData.title}
          </h1>
          {projectData.wip && (
            <div className="text-lg mb-4 dark:text-fk-gray text-fk-white bg-fk-gray dark:bg-fk-white w-fit px-4 py-1 rounded-md">
              Work in progress
            </div>
          )}
          <div className="grid grid-cols-2 gap-4 pt-2">
            <ProjectDataField
              label="Project type"
              value={projectData.subtitle}
            />
            <ProjectDataField label="Role" value={projectData.role} />
            <ProjectDataField
              label="Product Type"
              value={projectData.projecttype}
            />
            <ProjectDataField label="Year" value={projectData.periode} />
            <ProjectDataField label="Client" value={projectData.client} />
          </div>
          <p className="text-fk-gray dark:text-fk-white text-xl lg:text-2xl mt-8">
            <ReactMarkdown>{projectData.description}</ReactMarkdown>
          </p>
          <div className="flex items-center flex-wrap gap-x-4 mt-6">
            {[
              projectData.technologies.map((tech, i) => (
                <TechnologyIcon
                  key={tech.id}
                  label={tech.label}
                  logo={tech.logo}
                />
              )),
            ]}
          </div>
          <div className="mt-8 w-full flex flex-wrap md:flex-nowrap lg:flex-wrap xl:flex-nowrap items-center gap-4">
            {projectData.link && (
              <ViewWebSiteButton
                link={projectData.link}
                favicon={projectData.linkFavicon}
              />
            )}
            {projectData.githubLink && (
              <VisitGithubButton link={projectData.githubLink} />
            )}
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.6, y: 100 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{
            duration: 1,
            type: "spring",
            bounce: 0.3,
            stiffness: 40,
            delay: 1.5,
          }}
          className="w-full lg:w-8/12 lg:min-h-[calc(100vh-80px)] lg:max-h-[calc(100vh-80px)] h-full flex flex-col gap-y-2 bg-fk-white dark:bg-fk-black-blue lg:overflow-y-auto"
        >
          {projectData.screenshots.map((sc, index) => (
            <div key={index} className="w-full h-full">
              <Image src={sc.url} width={sc.width} height={sc.height} />
            </div>
          ))}
        </motion.div>
      </div>
    </>
  );
};

export async function getStaticPaths() {
  const alias = await getAllProjectsAlias();
  const paths = alias.map((al) => ({
    params: al,
  }));
  return { paths, fallback: "blocking" };
}

export async function getStaticProps({ params: { alias } }) {
  const { project, allProjects } = await getProjectDetail(alias);
  const currentProjectIndex = allProjects.findIndex((al) => al.alias === alias);

  if (!project) {
    return { notFound: true };
  }

  const nextProject =
    allProjects[(currentProjectIndex + 1) % allProjects.length].alias;

  const prevProjectIndex = currentProjectIndex - 1;
  const prevProject =
    allProjects[
      prevProjectIndex < 0 ? allProjects.length - 1 : prevProjectIndex
    ].alias;

  return {
    props: {
      projectData: project,
      nextProject,
      prevProject,
    },
    revalidate: 10,
  };
}

export default Project;
