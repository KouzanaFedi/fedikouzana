import MagneticButton from "@/components/buttons/MagneticButton";
import Header from "@/components/layout/Header";
import TechnologyIcon from "@/components/projects/TechnologyIcon";

const Project = () => {
  const screenShots = [
    "/captivate1.png",
    "/captivate2.png",
    "/captivate2.png",
    "/captivate2.png",
  ];
  return (
    <>
      <Header />
      <div className="min-h-screen pt-20 flex flex-col lg:flex-row-reverse lg:overflow-hidden">
        <div className="lg:max-h-[calc(100vh-80px)] min-h-[calc(100vh-80px)] h-full w-full lg:w-4/12 bg-fk-white dark:bg-fk-darkGray lg:overflow-y-auto px-14 py-10">
          <h1 className="font-black text-fk-gray dark:text-fk-white text-5xl uppercase leading-tight after:h-1 after:w-1/2 after:bg-fk-green after:block after:my-6">
            Fintech dashboard
          </h1>
          <div className="grid grid-cols-2 gap-4 pt-2">
            <div className="text-fk-gray dark:text-fk-white">
              <div className="text-fk-white-lighter">Year</div>
              <div className="text-2xl">2022</div>
            </div>
            <div className="text-fk-gray dark:text-fk-white">
              <div className="text-fk-white-lighter">Role</div>
              <div className="text-2xl">Front-end develpment</div>
            </div>
            <div className="text-fk-gray dark:text-fk-white">
              <div className="text-fk-white-lighter">Product Type</div>
              <div className="text-2xl">E-commerce website</div>
            </div>
            <div className="text-fk-gray dark:text-fk-white">
              <div className="text-fk-white-lighter">Client</div>
              <div className="text-2xl">Graiet Tunisia</div>
            </div>
          </div>
          <p className="text-fk-gray dark:text-fk-white text-2xl mt-8">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab quis sit
            deserunt iste quasi. Esse error, nostrum pariatur vitae aliquid
            provident velit in maiores consequatur. Excepturi aliquam aliquid
            expedita iure.
          </p>
          <div className="flex items-center gap-x-4 mt-6">
            {[
              Array.from({ length: 5 }).map((_, i) => (
                <TechnologyIcon key={i} />
              )),
            ]}
          </div>
          <div className="mt-8 w-fit">
            <MagneticButton>
              <div className="flex justify-center items-center gap-4 px-10 py-4">
                <span className="group-hover:z-30">View site</span>
              </div>
            </MagneticButton>
          </div>
        </div>
        <div className="w-full lg:w-8/12 min-h-[calc(100vh-80px)] lg:min-h-full lg:max-h-[calc(100vh-80px)] h-full flex flex-col gap-y-2 bg-fk-white dark:bg-fk-black-blue lg:overflow-y-auto">
          {screenShots.map((sc, index) => (
            <img key={index} src={sc} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Project;
