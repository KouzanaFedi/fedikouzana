import Link from "next/link";

type Props = {
  label: string;
  link: string;
  closeMenu: () => void;
};

const MobileMenuItem = ({ label, link, closeMenu }: Props) => {
  return (
    <li>
      <Link href={link}>
        <a
          onClick={closeMenu}
          className="text-5xl font-semibold text-fk-gray dark:text-fk-white"
        >
          {label}
        </a>
      </Link>
    </li>
  );
};

export default MobileMenuItem;
