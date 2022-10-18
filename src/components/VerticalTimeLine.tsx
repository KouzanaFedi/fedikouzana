import TimeLineItem from "./TimeLineItem";

const VerticaleTimeLine = () => {
  return (
    <div className="w-full relative flex flex-col gap-y-8 justify-center py-12">
      <div className="absolute w-0.5 top-0 bottom-0 left-1/2 bg-fk-gray dark:bg-fk-white">
        <div className="absolute -left-[3px] -top-1 w-2 h-2 rounded-full bg-fk-green-darker" />
        <div className="absolute -left-[3px] -bottom-1 w-2 h-2 rounded-full bg-fk-green-darker" />
      </div>
      <TimeLineItem />
      <TimeLineItem />
      <TimeLineItem />
      <TimeLineItem />
    </div>
  );
};

export default VerticaleTimeLine;
