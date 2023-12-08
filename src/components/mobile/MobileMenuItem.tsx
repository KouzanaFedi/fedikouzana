import Link from "next/link";

type Props = {
  label: string;
  link: string;
  closeMenu: () => void;
};

const MobileMenuItem = ({ label, link, closeMenu }: Props) => {
  return (
    <li>
      <Link
        onClick={closeMenu}
        className="text-5xl font-semibold text-fk-gray dark:text-fk-white"
        href={link}
      >
        {label}
      </Link>
    </li>
  );
};

export default MobileMenuItem;
