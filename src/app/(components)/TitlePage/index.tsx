import { TitlePageProps } from './titlePage';

export const TitlePage = ({
  title,
  className,
  description,
}: TitlePageProps) => {
  return (
    <h2
      className={`${
        className ?? 'text-[#14532d]'
      } font-bold 2xl:text-3xl xl:text-3xl text-3xl text-center 2xl:mb-10 xl:mb-10 lg:mb-10 mb-4 mx-4`}
    >
      {title}
      <p className="text-slate-600 font-light mb-2 text-sm">{description}</p>
    </h2>
  );
};
