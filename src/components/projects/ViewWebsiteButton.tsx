import { ImageData } from "@/cms/types";
import Image from "next/image";
import Link from "next/link";

type Props = {
  link: string;
  favicon: ImageData;
};

const ViewWebSiteButton = ({ link, favicon }: Props) => {
  return (
    <Link href={link} rel="noreferrer">
      <a
        target="_blank"
        rel="noreferrer"
        className="flex justify-center text-fk-white dark:text-fk-gray items-center gap-4 w-full md:w-1/2 lg:w-full xl:w-1/2 py-4 bg-fk-gray dark:bg-fk-white text-lg rounded-md font-medium hover:bg-fk-gray/80 dark:hover:bg-fk-white/80"
      >
        {favicon && (
          <div className="w-6 h-w-6 grid place-items-center">
            <Image
              src={favicon.url}
              alt={favicon.basename}
              height={favicon.height}
              width={favicon.width}
            />
          </div>
        )}
        <span className="group-hover:z-30">View Website</span>
      </a>
    </Link>
  );
};

export default ViewWebSiteButton;
