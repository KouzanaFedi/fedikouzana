import { ProjectPreviewData } from "@/cms/types";
import { motion } from "framer-motion";
import ProjectPreview from "./ProjectPreview";

type Props = {
  list: ProjectPreviewData[];
};

const ProjectList = ({ list }: Props) => {
  return (
    <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 lg:gap-28 mt-20 mb-28 md:grid-cols-2 min-h-[500px] px-4 md:px-8">
      {list.map((project, index) => (
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
          key={index}
        >
          <ProjectPreview
            img={project.thumbnail}
            alias={project.alias}
            title={project.title}
          />
        </motion.div>
      ))}
    </div>
  );
};

export default ProjectList;
