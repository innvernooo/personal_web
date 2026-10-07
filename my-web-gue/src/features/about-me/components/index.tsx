export default function AboutMeCard({ title, desc, textColor, logo }: any) {
  return (
    <>
      <div className="bg-brand-200 border-l-6 border-l-brand-100 rounded-2xl">
        <div className="p-3 font-montserrat text-base text-black sm:text-lg">
          <div className="mb-3 flex items-center gap-1 text-xl font-bold font-cinzel text-[#006A69] sm:text-2xl xl:text-3xl">
            <div className={`shrink-0 ${textColor}`}>{logo}</div>
            <h2 className={textColor}>{title}</h2>
          </div>
          <p>{desc}</p>
        </div>
      </div>
    </>
  );
}
