const TimeLineItem = () => {
  return (
    <div className="group flex even:flex-row-reverse items-start gap-x-28 ">
      <div className="text-fk-green flex-1 text-end group-even:text-start">
        2019 - Present
      </div>
      <div className="flex flex-col gap-y-4 flex-1 group-even:items-end">
        <div className="relative font-bold text-lg text-fk-black-blue dark:text-fk-white">
          <span>Academic Degree</span>
          <div className="absolute right-[-65px] group-odd:-left-[63px] top-1 w-4 h-4 rounded-full bg-fk-green-darker border-2 border-fk-green" />
        </div>
        <div className="text-sm text-fk-black-blue dark:text-fk-white-lighter group-even:text-end">
          Lorem ipsum dolor sit amet consectetuer adipiscing elit aenean commodo
          ligula eget dolor aenean massa.
        </div>
      </div>
    </div>
  );
};

export default TimeLineItem;
