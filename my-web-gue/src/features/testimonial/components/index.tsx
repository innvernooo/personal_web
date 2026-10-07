import { IoStarSharp } from 'react-icons/io5';

interface TestiType {
  backgroundColor?: string;
  desc: string;
  imageUrl: string;
  name: string;
  position: string;
  textColor?: string;
}

export function TestimonialCard({
  backgroundColor,
  desc,
  imageUrl,
  name,
  position,
  textColor,
}: TestiType) {
  return (
    <>
      <div className="aura aura-rainbow">
        <div className={`card h-100 ${backgroundColor}`}>
          <div className="card-body text-black">
            <div className="flex gap-1 text-yellow-500 text-lg">
              <IoStarSharp />
              <IoStarSharp />
              <IoStarSharp />
              <IoStarSharp />
              <IoStarSharp />
            </div>
            <p
              className={`mt-2 text-lg ${textColor} font-montserrat border-b italic`}
            >
              {desc}
            </p>
            <div className="flex gap-3">
              <div className="avatar">
                <div className="w-13 rounded-full">
                  <img alt="Tailwind-CSS-Avatar-component" src={imageUrl} />
                </div>
              </div>
              <div className={`${textColor}`}>
                <p className="text-lg font-semibold font-fraunces">{name}</p>
                <p>{position}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export const testimonials = [
  {
    backgroundColor: 'bg-brand-200',
    textColor: 'text-black',
    desc: '“Ariviano delivered beyond our expectations. His code quality and speed in React and Node are second to none.”',
    imageUrl: 'src/assets/PP-2.jpg',
    name: 'Sarah Lin',
    position: 'VP of Product • NovaScale',
  },
  {
    backgroundColor: 'bg-brand-300',
    textColor: 'text-white',
    desc: '“Working with Ariviano was seamless. His communication was crystal clear and the project delivered ahead of schedule.”',
    imageUrl: 'src/assets/PP-2.jpg',
    name: 'Marcus Vance',
    position: 'CTO • CloudCraft Systems',
  },
  {
    backgroundColor: 'bg-brand-200',
    desc: '“Not only a talented engineer, but someone with genuine product intuition and care for UX that users immediately feel.”',
    imageUrl: 'https://d23.com/app/uploads/2019/08/2019-disneylegend-rdj.jpg',
    name: 'Tony Stark',
    position: 'CEO of Stark Industries',
  },
  {
    backgroundColor: 'bg-brand-300',
    textColor: 'text-white',
    desc: '“Ariviano has a strong understanding of both frontend and backend development. He consistently delivered clean, reliable solutions while keeping the user experience in mind.”',
    imageUrl:
      'https://img.magnific.com/free-photo/portrait-happy-male-with-broad-smile_176532-8175.jpg?semt=ais_hybrid&w=740&q=80',
    name: 'Marcus Vance',
    position: 'CTO • CloudCraft Systems',
  },
  {
    backgroundColor: 'bg-brand-200',
    desc: '“What stood out most was ability of Ariviano to break down complex technical problems into simple, practical solutions. He was always thoughtful about the decisions behind his code.”',
    imageUrl:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlkc8N7xjcPFDO714poCcpULrgPafZ93jH6OYK3qf1QLuG5YkOLGuYkd0&s=10',
    name: 'Bruce Wayne',
    position: 'CEO of Wayne Enterprise',
  },
  {
    backgroundColor: 'bg-brand-300',
    textColor: 'text-white',
    desc: '“Ariviano brought a great balance of technical skill and attention to detail. From API development to responsive interfaces, every part of the project was handled with care.”',
    imageUrl: 'src/assets/PP-2.jpg',
    name: 'Elena Rostova',
    position: 'Founder • Apex Design Studio',
  },
  {
    backgroundColor: 'bg-brand-200',
    desc: '“Working with Ariviano was a smooth experience from start to finish. He understood our requirements quickly, communicated clearly, and delivered a solution that exceeded our expectations.”',
    imageUrl: 'src/assets/PP-2.jpg',
    name: 'Daniel Carter',
    position: 'Engineering Manager • BrightLayer Technologies',
  },
  {
    backgroundColor: 'bg-brand-300',
    textColor: 'text-white',
    desc: '“Ariviano is the kind of developer who looks beyond simply making things work. He thinks about performance, maintainability, and how the final product will be experienced by real users.”',
    imageUrl: 'src/assets/PP-2.jpg',
    name: 'Sophia Bennett',
    position: 'Product Director • Vertex Labs',
  },
  {
    backgroundColor: 'bg-brand-200',
    desc: '“His ability to work across the entire stack made a significant difference to our project. He could combine them without losing sight of the bigger picture.”',
    imageUrl: 'src/assets/PP-2.jpg',
    name: 'Ryan Mitchell',
    position: 'Senior Software Engineer • CodeFoundry',
  },
  {
    backgroundColor: 'bg-brand-300',
    textColor: 'text-white',
    desc: '“Ariviano was reliable, collaborative, and highly solution-oriented. He handled technical challenges calmly and always looked for ways to improve both the product and the development process.”',
    imageUrl: 'src/assets/PP-2.jpg',
    name: 'Emily Rodriguez',
    position: 'Head of Product • PixelCraft Studio',
  },
];
