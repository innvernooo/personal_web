import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { ToastContainer, toast } from 'react-toastify';
import { RiRobot3Line } from 'react-icons/ri';
import { FaCircleDot, FaXTwitter } from 'react-icons/fa6';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { MdOutlineMailOutline } from 'react-icons/md';
import {
  FooterSchema,
  type FooterRequest,
} from './features/footer/validation/FooterSchema';
import { zodResolver } from '@hookform/resolvers/zod';
import { footerApi } from './Api/footerApi/FooterApi';
import LandingPage from './page/main';

// id di sini = id <section> yang ada di LandingPage
const tabs = [
  { label: 'Main', id: 'main' },
  { label: 'About Me', id: 'about-me' },
  { label: 'My Skills', id: 'skills' },
  { label: 'Porto', id: 'portfolio' },
  { label: 'My Exp', id: 'experience' },
  { label: 'What They say?', id: 'testimonials' },
  { label: 'Contact Me', id: 'contact' },
];

const scrollToSection = (id: string) => {
  document.getElementById(id)?.scrollIntoView({
    behavior: 'smooth',
    block: 'start',
  });
};

export default function Layout() {
  const [menuOpen, setMenuOpen] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FooterRequest>({
    resolver: zodResolver(FooterSchema),
  });

  const handleFooter = async (email: FooterRequest) => {
    try {
      footerApi(email);
      reset();
      toast.success('Thanks! Email berhasil terkirim');
    } catch (error: unknown) {
      console.log(error);
      toast.error('Maaf, Email gagal terkirim. Silahkan coba lagi');
    }
  };

  return (
    <>
      <header className="fixed top-0 z-50 h-17 w-full flex justify-center items-center bg-brand-400 px-4 2xl:px-0">
        <RiRobot3Line className="mr-2 shrink-0 text-4xl sm:text-5xl" />
        <div className="relative flex min-w-0 flex-1 items-center justify-between gap-4 h-18 2xl:flex-none 2xl:w-350 2xl:gap-7">
          <div className="min-w-0">
            <div className="truncate text-lg font-bold font-sans sm:text-2xl">
              Ariviano Sumantri
            </div>
            <div className="truncate text-xs font-semibold text-brand-200 sm:text-base xl:hidden 2xl:block">
              Software Engineer | Full-Stack Dev.
            </div>
          </div>

          <div className="hidden font-playfair text-4xl tracking-wider italic 2xl:block">
            MY PERSONAL WEB
          </div>
        </div>

        <div
          role="tablist"
          className="absolute top-1/2 left-1/2 hidden -translate-x-1/2 -translate-y-1/2 w-fit h-auto tabs tabs-box bg-white rounded-full xl:block"
        >
          <nav className="flex items-center gap-1 rounded-full bg-white px-1 py-1">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => scrollToSection(tab.id)}
                className="cursor-pointer rounded-full px-3 py-2 text-sm font-medium whitespace-nowrap text-gray-800 transition-colors duration-200 hover:bg-gray-100 2xl:px-4"
              >
                {tab.label}
              </button>
            ))}
          </nav>
        </div>

        {menuOpen && (
          <nav className="absolute top-full left-0 flex w-full flex-col gap-1 bg-brand-400 px-4 pt-2 pb-4 shadow-lg xl:hidden">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => {
                  scrollToSection(tab.id);
                  setMenuOpen(false);
                }}
                className="rounded-full bg-white px-5 py-3 text-left text-base font-medium text-gray-800 transition-colors duration-200 hover:bg-gray-100"
              >
                {tab.label}
              </button>
            ))}
          </nav>
        )}
      </header>

      <div className="min-h-screen">
        <LandingPage />
      </div>

      <footer className="relative flex w-full items-center justify-center bg-brand-400 mt-16 py-10 xl:mt-25 xl:h-70 xl:py-0">
        <div className="flex w-full flex-col items-center gap-8 px-5 md:px-10 xl:m-10 xl:h-60 xl:flex-row xl:justify-around xl:px-0">
          <div className="w-full max-w-2xl xl:w-auto xl:max-w-none">
            <div className="flex items-center gap-1.5">
              <FaCircleDot className="text-xl text-brand-200" />
              <h1 className="text-xl font-semibold font-cinzel md:text-2xl">
                Ariviano Sumantri
              </h1>
            </div>
            <p className="mt-3 text-base font-montserrat md:text-lg">
              Crafting disciplined full-stack digital architectures with{' '}
              <br className="hidden xl:block" />
              editorial warmth, precise systems engineering, and humane{' '}
              <br className="hidden xl:block" />
              design empathy.
            </p>
            <div className="mt-3 flex flex-wrap gap-x-5 gap-y-2 font-semibold xl:gap-7">
              <div className="flex items-center gap-1">
                <FaGithub className="text-lg" />
                <p className="text-base md:text-lg">GitHub</p>
              </div>
              <div className="flex items-center gap-1">
                <FaLinkedin className="text-lg" />
                <p className="text-base md:text-lg">LinkedIn</p>
              </div>
              <div className="flex items-center gap-1">
                <FaXTwitter className="text-lg" />
                <p className="text-base md:text-lg">X / Twitter</p>
              </div>
              <div className="flex items-center gap-1">
                <FaInstagram className="text-lg" />
                <p className="text-base md:text-lg">Instagram</p>
              </div>
              <div className="flex items-center gap-1">
                <MdOutlineMailOutline className="text-lg" />
                <p className="text-base md:text-lg">Email</p>
              </div>
            </div>
          </div>

          <form
            onSubmit={handleSubmit(handleFooter)}
            className="flex h-auto w-full max-w-2xl items-center justify-center rounded-2xl bg-brand-200 py-6 xl:h-55 xl:w-fit xl:max-w-none xl:py-0"
          >
            <div className="w-full px-5 text-black sm:px-8 xl:w-auto">
              <h1 className="text-xl font-bold font-montserrat md:text-2xl">
                Send a Quick Ping
              </h1>
              <p className="mt-1 font-montserrat text-sm md:text-base">
                Have a compelling technical challenge or product architecture{' '}
                <br className="hidden xl:block" />
                you would like to explore together?
              </p>
              <fieldset className="mt-2 fieldset">
                <legend className="fieldset-legend text-base text-black">
                  Type your Email in this box
                </legend>
                <div className="flex flex-col gap-3 sm:flex-row">
                  <input
                    type="email"
                    className="input w-full bg-white text-black border border-black sm:flex-1 xl:w-auto xl:flex-none"
                    placeholder="Type here..."
                    {...register('email')}
                  />
                  <button className="btn btn-success">Send</button>
                </div>
                <div className="label text-red-500">
                  {errors?.email?.message}
                </div>
              </fieldset>
            </div>
          </form>
        </div>
      </footer>
      <ToastContainer />
    </>
  );
}
