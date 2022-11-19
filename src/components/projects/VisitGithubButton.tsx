import Link from "next/link";
import { ImGithub } from "react-icons/im";

type Props = {
  link: string;
};

const VisitGithubButton = ({ link }: Props) => {
  return (
    <Link href={link} rel="noreferrer">
      <a
        target="_blank"
        rel="noreferrer"
        className="flex justify-center text-fk-white dark:text-fk-gray items-center gap-4 w-full md:w-1/2 lg:w-full xl:w-1/2 py-4 bg-fk-gray/75 dark:bg-fk-white/75 text-lg rounded-md font-medium hover:bg-fk-gray dark:hover:bg-fk-white"
      >
        <ImGithub size={24} />
        <span className="group-hover:z-30">View Code</span>
      </a>
    </Link>
  );
};

export default VisitGithubButton;
