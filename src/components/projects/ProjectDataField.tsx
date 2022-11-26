type Props = {
  label: string;
  value: string;
};

const ProjectDataField = ({ label, value }: Props) => {
  return (
    value && (
      <div className="text-fk-gray dark:text-fk-white">
        <div className="text-fk-white-lighter">{label}</div>
        <div className="text-xl font-medium lg:text-xl">{value}</div>
      </div>
    )
  );
};

export default ProjectDataField;
