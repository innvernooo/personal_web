import { Fragment } from 'react';
import { PiSealCheckLight } from 'react-icons/pi';
import { GiJourney, GiTalk } from 'react-icons/gi';
import {
  MdOutlineAccessTime,
  MdOutlineMailOutline,
  MdSend,
} from 'react-icons/md';
import { RiStarSLine, RiTeamLine } from 'react-icons/ri';
import { FaArrowsTurnRight, FaXTwitter } from 'react-icons/fa6';
import {
  FaGithub,
  FaCity,
  FaLinkedin,
  FaInstagram,
  FaWhatsapp,
} from 'react-icons/fa';
import AboutMeCard from '../../features/about-me/components';
import ExperienceCard from '../../features/my-exp/components';
import {
  TestimonialCard,
  testimonials,
} from '../../features/testimonial/components';
import ContactCard from '../../features/contact-me/components';
import { useForm } from 'react-hook-form';
import {
  ContactSchema,
  type ContactRequest,
} from '../../features/contact-me/validation/ContactSchema';
import { zodResolver } from '@hookform/resolvers/zod';
import { contactApi } from '../../Api/contactApi/ContactApi';
import { toast } from 'react-toastify';
import {
  companies,
  techStack,
} from '../../features/hero-section/components/heroComponents';
import {
  cases,
  skillCards,
} from '../../features/my-skills/components/mySkillsComponents';

const metricColors = ['text-brand-300', 'text-[#006A69]', '', ''];

export default function LandingPage() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactRequest>({
    resolver: zodResolver(ContactSchema),
  });

  const handleContact = async (data: ContactRequest) => {
    try {
      contactApi(data);
      reset();
      toast.success('Thank you! Please wait for the response');
    } catch (error: unknown) {
      console.log(error);
      toast.error('Maaf, data gagal terkirim. Silahkan coba lagi');
    }
  };

  return (
    <>
      <section id="main" className="scroll-mt-24">
        <div className="flex justify-center px-4 sm:px-8 xl:px-0">
          <div className="relative mt-28 flex w-full min-w-0 flex-col items-center gap-6 rounded-4xl bg-brand-300 p-6 shadow-xl/25 sm:p-10 xl:mt-30 xl:mr-20 xl:ml-20 xl:h-100 xl:w-fit xl:flex-row xl:justify-around xl:gap-0">
            <div className="relative flex items-center xl:h-80">
              <div className="text-center xl:ml-5 xl:text-left">
                <p className="text-xl font-medium font-montserrat sm:text-2xl xl:text-3xl text-white">
                  Hello, I am
                </p>
                <h1 className="mt-1 wrap-break-word text-4xl text-yellow-400 font-playfair sm:text-5xl md:text-6xl xl:mt-0 xl:text-7xl">
                  Ariviano Sumantri
                </h1>
                <br className="hidden xl:block" />
                <p className="mt-4 text-base font-montserrat sm:text-xl md:text-2xl xl:mt-0 xl:text-3xl text-white">
                  I am a <b className="text-brand-200">Full-Stack Developer</b>{' '}
                  focused on building modern, functional, and user-friendly
                  digital experiences.
                </p>
              </div>
            </div>
            <div className="order-first xl:order-last">
              <div className="h-64 w-56 bg-[url(assets/foto-personal-2.svg)] bg-cover bg-bottom border-3 border-white rounded-2xl sm:h-80 sm:w-70"></div>
            </div>
          </div>
        </div>

        <div className="flex justify-center">
          <div className="relative mx-4 flex h-16 w-full items-center sm:mx-8 xl:mr-20 xl:ml-20 xl:h-20">
            <h1 className="text-black text-lg font-montserrat font-semibold">
              I have contributed with:
            </h1>
          </div>
        </div>

        <div className="flex items-center">
          <div className="mx-4 grid w-full grid-cols-3 gap-x-5 gap-y-6 sm:mx-8 sm:grid-cols-5 xl:mr-20 xl:ml-20 xl:h-30">
            {companies.map((company) => (
              <div
                key={company.name}
                className="flex h-24 flex-col items-center xl:h-30"
              >
                <div
                  className={`w-full flex-1 ${company.logo} bg-contain bg-center bg-no-repeat`}
                ></div>
                <div className="mt-1 flex items-center justify-center text-sm font-semibold text-black font-fraunces sm:text-base">
                  {company.name}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center">
          <div className="relative mx-4 mt-8 flex h-auto w-full max-w-300 flex-col items-center justify-center gap-4 rounded-xl bg-[#EDF4FD] p-4 sm:mx-8 xl:mt-10 xl:mr-20 xl:ml-20 xl:h-15 xl:flex-row xl:gap-10 xl:p-0">
            <div className="flex items-center gap-1">
              <PiSealCheckLight className="shrink-0 text-black" />
              <p className="text-sm text-black font-montserrat sm:text-base">
                Trusted by fast-growing startups & creative engineering teams:
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-3">
              {techStack.map((tech) => (
                <div
                  key={tech}
                  className="flex h-7 w-fit items-center justify-center rounded-full bg-white"
                >
                  <p className="p-3 text-sm font-semibold text-black">{tech}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section id="about-me" className="scroll-mt-24">
        <div className="flex justify-center">
          <div className="mx-4 mt-28 h-fit w-full sm:mx-8 xl:mx-20 xl:mt-30">
            <h1 className="text-3xl text-black font-playfair font-bold sm:text-4xl xl:text-5xl">
              Bridging Architectural Rigor & Humane Usability
            </h1>
            <p className="mt-4 text-base text-black font-montserrat sm:text-lg xl:mt-5 xl:text-xl">
              A developer who treats documentation, latency, and layout
              aesthetics with equal care.
            </p>
          </div>
        </div>

        <div className="flex flex-col justify-between gap-6 xl:flex-row xl:gap-10">
          <div className="mx-4 mt-2 h-fit rounded-2xl bg-brand-300 shadow-xl/25 sm:mx-8 xl:mt-7 xl:mr-0 xl:ml-20 xl:w-[60%]">
            <div className="p-4 font-montserrat sm:p-6 xl:p-4">
              <div className="mb-5 flex gap-2 text-xl sm:text-2xl xl:text-3xl">
                <GiJourney className="shrink-0 text-white" />
                <h1 className="font-cinzel font-bold text-yellow-400">
                  JOURNEY TO BECOME A FULL-STACK DEV.
                </h1>
              </div>
              <p className="text-white">
                My journey into software development began with a simple
                curiosity: <br className="hidden xl:block" />
                <b className="text-brand-200">
                  {' '}
                  how can technology turn an idea into something useful,
                  accessible, and easy to use?
                </b>{' '}
                <br className="hidden xl:block" />
                That curiosity led me to explore web development and gradually
                understand how the different parts of a digital product work
                together.
              </p>
              <p className="mt-4">
                Over the past six years, I have architected and maintained
                full-stack production systems across early-stage B2B SaaS
                platforms and high- throughput transactional hubs. I view modern
                web development as an integrated discipline: database schemas
                should reflect realistic human workflows, and visual design
                should never be treated as superficial varnish on an unwieldy
                backend.
              </p>
              <p className="mt-4">
                As a <b>Full-Stack Developer</b>, I am interested in both sides
                of the development process. On the frontend, I focus on creating
                interfaces that are clean, responsive, intuitive, and
                comfortable to use. On the backend, I work with application
                logic, APIs, databases, and the systems that allow applications
                to function reliably behind the scenes.
              </p>
              <p className="mt-4">
                My approach to development combines{' '}
                <b className="text-brand-200">
                  problem solving, structured thinking, clean code, and
                  continuous learning.
                </b>{' '}
                I enjoy breaking complex problems into smaller, manageable
                parts, finding practical solutions, and turning those solutions
                into functional digital experiences.
              </p>
              <p className="mt-4">
                As I continue developing my skills, I am exploring different
                technologies, development practices, and ways to build better
                applications. I am particularly interested in creating projects
                that are not only functional, but also{' '}
                <b className="text-brand-200">
                  scalable, maintainable, and meaningful to their users.
                </b>
              </p>
              <p className="mt-4">
                For me, software development is a continuous learning process.
                Every project is an opportunity to understand something new,
                improve my way of thinking, and create something better than
                before.
              </p>
            </div>
          </div>

          <div className="mx-4 grid h-fit grid-cols-1 gap-5 sm:mx-8 sm:grid-cols-2 xl:mt-7 xl:mr-20 xl:ml-0 xl:w-[30%] xl:grid-cols-1">
            <div className="rounded-2xl border-l-6 border-l-brand-100 bg-brand-200">
              <div className="p-3 font-montserrat text-base text-black sm:text-lg">
                <div className="mb-3 flex items-center gap-1 text-xl font-bold font-cinzel text-[#006A69] sm:text-2xl xl:text-3xl">
                  <MdOutlineAccessTime className="shrink-0" />
                  <h2>Timeliness & Reliability</h2>
                </div>
                <p>
                  Delivering on commitments with predictable sprint execution.
                  No unannounced bottlenecks, no last-minute fire drills.
                </p>
              </div>
            </div>
            <AboutMeCard
              logo={<RiStarSLine />}
              textColor="text-[#9F3F3C]"
              title="Attention to Detail"
              desc="Pixel-perfect layouts, deliberate typographic scales, accessible contrast ratios, and thoughtful micro-interactions."
            />
            <AboutMeCard
              logo={<GiTalk />}
              textColor="text-[#241A00]"
              title="Clear & Honest Dialogue"
              desc="Detailed async PR summaries, transparent tradeoff discussions, and collaborative root-cause resolutions."
            />
            <AboutMeCard
              logo={<RiTeamLine />}
              textColor="text-[#22396F]"
              title="Collaboration"
              desc="Working effectively with designers, developers, and stakeholders to turn ideas into practical and reliable solutions."
            />
          </div>
        </div>
      </section>
      <section id="skills" className="scroll-mt-24">
        <div className="flex justify-center">
          <div className="mx-4 mt-28 h-fit w-full sm:mx-8 xl:mx-20 xl:mt-30">
            <h1 className="text-3xl text-black font-playfair font-bold sm:text-4xl xl:text-5xl">
              Structured Technical Expertise
            </h1>
            <p className="mt-4 text-base text-black font-montserrat sm:text-lg xl:mt-5 xl:text-xl">
              Organized into three core operational disciplines, tuned for high
              uptime and developer velocity.
            </p>
          </div>
        </div>
        <div className="mx-4 mt-8 grid grid-cols-1 gap-6 sm:mx-8 md:grid-cols-2 xl:mx-20 xl:mt-10 xl:grid-cols-3 xl:gap-10">
          {skillCards.map((card) => (
            <div
              key={card.title}
              className={`h-fit rounded-3xl p-4 shadow-xl/25 md:last:col-span-2 xl:last:col-span-1 ${card.cardBg}`}
            >
              <div className="flex items-center justify-between">
                <div className="rounded-xl bg-white p-2 text-4xl text-black">
                  {card.icon}
                </div>
                <p className="rounded-full bg-white px-2 font-montserrat font-semibold text-black">
                  {card.tier}
                </p>
              </div>

              <h1
                className={`mt-5 text-2xl font-semibold sm:text-3xl ${card.titleColor}`}
              >
                {card.title}
              </h1>
              <p
                className={`mt-3 text-base font-montserrat sm:text-lg ${card.textColor}`}
              >
                {card.desc}
              </p>

              <div className="mt-7 flex flex-col gap-2">
                {card.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex items-center justify-between gap-2">
                      <h2
                        className={`text-base font-semibold font-montserrat sm:text-lg ${card.textColor}`}
                      >
                        {skill.name}
                      </h2>
                      <h2
                        className={`shrink-0 text-base font-montserrat whitespace-nowrap sm:text-lg ${card.textColor}`}
                      >
                        {skill.level}
                      </h2>
                    </div>
                    <progress
                      className={`progress w-full ${card.progressColor}`}
                      value={skill.value}
                      max="100"
                    ></progress>
                  </div>
                ))}
              </div>

              <div className="mt-7 rounded-2xl bg-white p-3">
                <h2 className="text-base font-semibold text-black sm:text-lg">
                  PRODUCTION FOCUS:
                </h2>
                <p className="text-base text-black sm:text-lg">{card.focus}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section id="portfolio" className="scroll-mt-24">
        <div className="flex justify-center">
          <div className="mx-4 mt-28 h-fit w-full sm:mx-8 xl:mx-20 xl:mt-30">
            <h1 className="text-3xl text-black font-playfair font-bold sm:text-4xl xl:text-5xl">
              Featured Engineering Case Studies
            </h1>
            <p className="mt-4 text-base text-black font-montserrat sm:text-lg xl:mt-5 xl:text-xl">
              Each deep dive breaks down real client constraints, structural
              actions, and verified numerical results.
            </p>
          </div>
        </div>

        {cases.map((item, index) => {
          const star = [
            { label: '01. SITUATION', text: item.star.situation },
            { label: '02. TASK', text: item.star.task },
            { label: '03. ACTION', text: item.star.action },
            { label: '04. RESULT', text: item.star.result },
          ];

          return (
            <div
              key={item.category}
              className="mx-4 mt-8 h-fit rounded-3xl border-x-5 border-x-brand-100 bg-brand-200 p-4 shadow-xl/25 sm:mx-8 sm:p-6 xl:mx-20 xl:mt-10"
            >
              <div className="flex flex-wrap items-center gap-x-3 gap-y-2 font-jetbrains-mono text-sm font-semibold sm:text-lg">
                <p className="w-fit rounded-lg bg-brand-100 px-2 text-white">
                  {item.category}
                </p>
                <p className="text-black">
                  Case #{String(index + 1).padStart(2, '0')}
                </p>
              </div>
              <div className="mt-4 flex flex-col items-start gap-4 xl:flex-row xl:items-center xl:justify-between">
                <h1 className="text-2xl font-bold font-cinzel text-brand-300 sm:text-3xl xl:text-[40px]">
                  {item.title.map((line, i) => (
                    <Fragment key={line}>
                      {i > 0 && (
                        <>
                          <br className="hidden xl:block" />{' '}
                        </>
                      )}
                      {line}
                    </Fragment>
                  ))}
                </h1>
                <div className="flex shrink-0 flex-wrap gap-3">
                  <button className="btn bg-brand-100">
                    <FaArrowsTurnRight className="text-white" />
                    Live Demo
                  </button>
                  <button className="btn bg-[#3E0F8D]">
                    <FaGithub className="text-white" />
                    GitHub
                  </button>
                </div>
              </div>
              <div className="mt-7 grid grid-cols-2 gap-4 rounded-2xl bg-[#EDF4FD] p-4 font-semibold text-black md:grid-cols-4 xl:flex xl:h-20 xl:items-center xl:justify-around xl:p-0">
                {item.metrics.map((metric, i) => (
                  <div key={metric.label} className={metricColors[i]}>
                    <p className="text-sm italic sm:text-base">
                      {metric.label}
                    </p>
                    <h2 className="text-lg sm:text-xl xl:text-2xl">
                      {metric.value}
                    </h2>
                  </div>
                ))}
              </div>
              <div className="mt-8 grid grid-cols-1 gap-6 rounded-2xl font-montserrat text-black md:grid-cols-2 xl:mt-10 xl:flex xl:h-20 xl:items-center xl:justify-around xl:gap-0">
                {star.map((s) => (
                  <div
                    key={s.label}
                    className="rounded-l-lg border-l-3 border-l-brand-100 px-2"
                  >
                    <h2 className="font-semibold text-brand-300">{s.label}</h2>
                    <p className="text-sm sm:text-base">{s.text}</p>
                  </div>
                ))}
              </div>
              <div className="mt-8 flex flex-col items-start gap-4 font-jetbrains-mono xl:mt-15 xl:flex-row xl:items-center xl:justify-between">
                <div className="flex flex-col gap-2 sm:flex-row sm:gap-4">
                  <p className="text-black">Stack:</p>
                  <div className="flex flex-wrap gap-2 text-sm text-white sm:gap-3 xl:text-base">
                    {item.stack.map((tech) => (
                      <p key={tech} className="rounded-full bg-brand-100 px-2">
                        {tech}
                      </p>
                    ))}
                  </div>
                </div>
                <p className="text-sm text-brand-300 sm:text-base">
                  {item.note}
                </p>
              </div>
            </div>
          );
        })}
      </section>
      <section id="experience" className="scroll-mt-24">
        <div className="flex justify-center">
          <div className="mx-4 mt-28 h-fit w-full sm:mx-8 xl:mx-20 xl:mt-30">
            <h1 className="text-3xl text-black font-playfair font-bold sm:text-4xl xl:text-5xl">
              Engineering Leadership & Growth
            </h1>
            <p className="mt-4 text-base text-black font-montserrat sm:text-lg xl:mt-5 xl:text-xl">
              A chronological record of hands-on responsibilities, team
              mentorship, and production impact.
            </p>
          </div>
        </div>

        <div className="mx-4 mt-8 grid grid-cols-1 gap-6 sm:mx-8 md:grid-cols-2 md:[&>*:last-child]:col-span-2 xl:mx-10 xl:mt-15 xl:grid-cols-3 xl:gap-3 xl:[&>*:last-child]:col-span-1 text-white">
          <ExperienceCard
            year="2022 - Present"
            position="Senior Full-Stack Engineer"
            company="TechFlow Innovations"
            desc="Directing front-end architecture and API service decoupling for a
              suite of enterprise productivity tools. Guiding 7 junior and mid-
              level engineers through structured code reviews, sprint
              ceremonies, and testing standards."
            check1="Spearheaded transition from a legacy monolithic SPA to a
                Vite-powered micro-frontend system, cutting initial load times
                by 42%."
            check2="Constructed an internal component system paired with automated
                Storybook visual regression checks, reducing design QA cycles by
                50%."
            check3="Maintained 99.98% platform uptime across high-traffic quarterly
                launch dates."
          />
          <ExperienceCard
            year="2020 - 2022"
            position="Full-Stack Web Developer"
            company="Horizon Labs"
            desc="Engineered secure, responsive client-facing portals and RESTful APIs for digital healthcare and telemetry startups. Built out CI/CD
deployment pipelines on GitHub Actions."
            check1="Optimized PostgreSQL query schemas and added Redis query-caching, shrinking dashboard response intervals from 3.2s to 210ms."
            check2="Authored automated end-to-end testing suites via Cypress, capturing regressions prior to production releases."
            check3="Developed reusable React components and streamlined API integrations, improving maintainability across multiple client-facing applications."
          />
          <ExperienceCard
            year="2018 - 2020"
            position="Junior Frontend Developer & Consultant"
            company="Freelance & Agency Engagements"
            desc="Created bespoke web applications, interactive marketing pages, and responsive UI components for over 20 global independent
clients."
            check1="Delivered 20+ responsive web projects on time with high client satisfaction and repeat engagements."
            check2="Pioneered modern responsive CSS grid and flexbox methodologies across regional small business sites."
            check3="Collaborated with clients and design teams to translate business requirements into intuitive, high-quality web experiences."
          />
        </div>
      </section>
      <section id="testimonials" className="scroll-mt-24">
        <div className="flex justify-center">
          <div className="mx-4 mt-28 h-fit w-full sm:mx-8 xl:mx-20 xl:mt-30">
            <h1 className="text-3xl text-black font-playfair font-bold sm:text-4xl xl:text-5xl">
              Kind Words from Teammates & Customers
            </h1>
            <p className="mt-4 text-base text-black font-montserrat sm:text-lg xl:mt-5 xl:text-xl">
              Feedback from technical founders, VP product leaders, beloved
              customers, and engineering colleagues.
            </p>
          </div>
        </div>

        <div className="mx-4 mt-8 grid grid-cols-1 gap-4 sm:mx-8 md:grid-cols-2 xl:mx-7 xl:mt-7 xl:grid-cols-5 xl:gap-3">
          {testimonials.map((item) => (
            <TestimonialCard key={item.name} {...item} />
          ))}
        </div>
      </section>
      <section id="contact" className="scroll-mt-24">
        <div className="flex justify-center">
          <div className="mx-4 mt-28 h-fit w-full sm:mx-8 xl:mx-20 xl:mt-30">
            <h1 className="text-3xl text-black font-playfair font-bold sm:text-4xl xl:text-5xl">
              Let’s Build Something Resilient Together
            </h1>
            <p className="mt-4 text-base text-black font-montserrat sm:text-lg xl:mt-5 xl:text-xl">
              Whether you have an upcoming product launch, require a full-stack
              code audit, or want to <br className="hidden xl:block" />
              consult on system architecture, my inbox is open.
            </p>
          </div>
        </div>

        <div className="mx-4 mt-6 grid h-fit grid-cols-1 gap-3 rounded-2xl bg-white shadow-xl/25 sm:mx-8 xl:mx-20 xl:mt-7 xl:grid-cols-2 2xl:mx-40">
          <div className="p-3">
            <div className="flex w-full items-center gap-2 rounded-lg bg-brand-200 px-2 py-1 sm:w-80">
              <MdOutlineMailOutline className="shrink-0 rounded-lg bg-white p-1 text-4xl text-brand-300" />
              <div className="min-w-0 text-black">
                <p className="font-semibold">Direct Email</p>
                <p className="break-all italic">arivianosumantri25@gmail.com</p>
              </div>
            </div>
            <ContactCard
              logo={<FaInstagram className="text-3xl" />}
              title="DM on Instagram"
              info="@innvernooo_"
              button="btn btn-neutral bg-[#833ab4] text-white"
              textButton="Go to Instagram"
              href="https://www.instagram.com/innvernooo_?stkn=MTc1Y3YxZHY4Z3JxcA=="
            />
            <ContactCard
              logo={<FaWhatsapp className="text-3xl" />}
              title="Text Me on WhatsApp"
              info="+62 852 8000 6440"
              button="btn btn-neutral bg-[#25D366] text-white"
              textButton="Text me on WhatsApp"
              href="https://web.whatsapp.com/"
            />
            <ContactCard
              logo={<FaLinkedin className="text-3xl" />}
              title="Hire Me on LinkedIn"
              info="Ariviano Sumantri"
              button="btn btn-neutral bg-[#0A66C2] text-white"
              textButton="Hire me on LinkedIn"
              href="https://www.linkedin.com/in/ariviano-sumantri-a02a54434?utm_source=share_via&utm_content=profile&utm_medium=member_ios"
            />
            <ContactCard
              logo={<FaXTwitter className="text-3xl" />}
              title="Find Me on X / Twitter"
              info="Ariviano Sumantri"
              button="btn btn-neutral text-white"
              textButton="Find my X / Twitter acc."
              href="https://x.com/?lang=id"
            />
            <ContactCard
              logo={<FaCity className="text-3xl" />}
              title="Current Location & Reach"
              info="West Jakarta, Indonesia"
            />
          </div>

          <div className="p-3">
            <form
              onSubmit={handleSubmit(handleContact)}
              className="h-full w-full rounded-xl bg-brand-200 px-4 py-5 sm:px-7"
            >
              <div className="flex flex-col md:flex-row md:justify-between md:gap-3 xl:flex-col xl:gap-0 2xl:flex-row 2xl:gap-3">
                <fieldset className="fieldset min-w-0 flex-1">
                  <label
                    className="label text-black text-sm font-semibold"
                    htmlFor="name"
                  >
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="input input-info w-full bg-white text-gray-600"
                    placeholder="e.g. Alex Rivera"
                    {...register('name')}
                  />
                  <div className="label text-red-500">
                    {errors?.name?.message}
                  </div>
                </fieldset>
                <fieldset className="fieldset min-w-0 flex-1">
                  <label
                    className="label text-black text-sm font-semibold"
                    htmlFor="email"
                  >
                    Your Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="input input-info w-full bg-white text-gray-600"
                    placeholder="alex@company.com"
                    {...register('email')}
                  />
                  <div className="label text-red-500">
                    {errors?.email?.message}
                  </div>
                </fieldset>
              </div>
              <fieldset className="fieldset mt-3">
                <label
                  className="label text-black text-sm font-semibold"
                  htmlFor="subject"
                >
                  Subject or Project Scope
                </label>
                <input
                  type="text"
                  id="subject"
                  className="input input-info bg-white w-full text-gray-600"
                  placeholder="e.g. Full-Stack SaaS Architecture / Freelance Inquiry"
                />
              </fieldset>
              <fieldset className="fieldset">
                <legend className="fieldset-legend text-black text-sm font-semibold">
                  Project Details & Timeline *
                </legend>
                <textarea
                  className="textarea textarea-info h-25 w-full bg-white text-gray-600"
                  placeholder="Tell me a bit about your tech stack, goals, and anticipated timelines..."
                  {...register('projectDetails')}
                ></textarea>
                <div className="label text-red-500">
                  {errors?.projectDetails?.message}
                </div>
              </fieldset>
              <div className="flex justify-end">
                <button className="btn btn-success w-full sm:w-auto">
                  Send the Message
                  <MdSend />
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
