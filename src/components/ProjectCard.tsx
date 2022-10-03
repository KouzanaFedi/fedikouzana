function ProjectCard() {
  return (
    <div className="w-full mb-8 xl:odd:pr-4 xl:even:pl-4">
      <div className="w-full h-full bg-fk-darkGray shadow-md rounded-[32px] flex flex-col overflow-hidden xl:flex-row">
        <div className="w-full h-full p-10 pr-5 xl:w-1/2">
          <p className="text-white mb-3">Personal project</p>
          <h3 className="text-xl font-semibold text-white mb-4">
            Fedi Kouzana - Personal Portfollio
          </h3>
          <p className="text-sm text-white">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
        <div className="relative w-full h-full xl:w-1/2">
          <img src="/personal-website.png" />
          <div className="w-full h-full absolute top-0 bottom-0 right-0 left-0 bg-fk-darkGray/40" />
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
