import { FaRegCheckCircle } from 'react-icons/fa';

interface ExpType {
  year: string;
  position: string;
  company: string;
  desc: string;
  check1: string;
  check2: string;
  check3?: string;
}
export default function ExperienceCard({
  year,
  position,
  company,
  desc,
  check1,
  check2,
  check3,
}: ExpType) {
  return (
    <>
      <div className="h-fit w-full rounded-3xl bg-brand-300 p-4 shadow-xl/25 sm:p-6">
        <div className="flex items-center justify-end">
          <p className="rounded-lg bg-white px-2 font-jetbrains-mono text-sm text-black sm:text-base">
            {year}
          </p>
        </div>
        <div className="mt-4">
          <h1 className="text-2xl font-bold font-cinzel text-brand-200 sm:text-3xl">
            {position}
          </h1>
          <p className="text-lg font-semibold text-[#F3E6D5] sm:text-xl">
            {company}
          </p>
        </div>
        <p className="mt-4 text-base font-montserrat sm:text-lg">{desc}</p>
        <div className="mt-3 p-2 bg-brand-200 rounded-lg text-black">
          <FaRegCheckCircle />
          <p>{check1}</p>
        </div>
        <div className="mt-3 p-2 bg-brand-200 rounded-lg text-black">
          <FaRegCheckCircle />
          <p>{check2}</p>
        </div>
        <div className="mt-3 p-2 bg-brand-200 rounded-lg text-black">
          <FaRegCheckCircle />
          <p>{check3}</p>
        </div>
      </div>
    </>
  );
}
