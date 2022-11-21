import ReactMarkdown from "react-markdown";

type Props = {
  title: string;
  periode: string;
  description: string;
};

const TimeLineItem = ({ title, periode, description }: Props) => {
  return (
    <div className="timeline-item group flex even:flex-row-reverse items-start gap-x-16 lg:gap-x-28">
      <div className="text-fk-green-darker flex-1 text-end group-even:text-start">
        {periode}
      </div>
      <div className="flex flex-col gap-y-4 flex-1 group-even:items-end">
        <div className="relative font-bold text-lg text-fk-black-blue dark:text-fk-white">
          <span>{title}</span>
          <div className="absolute right-[-41px] lg:right-[-65px] group-odd:-left-[39px] lg:group-odd:-left-[63px] top-1 w-4 h-4 rounded-full bg-fk-green-darker border-2 border-fk-green" />
        </div>
        <div className="text-sm text-fk-black-blue dark:text-fk-white-lighter">
          <ReactMarkdown>{description}</ReactMarkdown>
        </div>
      </div>
    </div>
  );
};

export default TimeLineItem;
