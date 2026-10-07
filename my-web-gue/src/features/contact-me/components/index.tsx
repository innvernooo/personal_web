export default function ContactCard({
  logo,
  title,
  info,
  button,
  textButton,
  href,
}: any) {
  return (
    <>
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2 bg-brand-200 w-80 px-2 py-1 rounded-lg mt-3">
          <div className="p-1 text-4xl text-brand-300 bg-white rounded-lg">
            {logo}
          </div>
          <div className="text-black">
            <p className="font-semibold">{title}</p>
            <p className="italic">{info}</p>
          </div>
        </div>
        <div className="mt-3">
          <a href={href}>
            <button className={`p-1 flex items-center justify-center ${button} h-fit`}>{textButton}</button>
          </a>
        </div>
      </div>
    </>
  );
}
