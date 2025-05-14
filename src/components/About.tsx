

// components/About.tsx
import { FaCode, FaGraduationCap, FaLaptopCode } from 'react-icons/fa';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-slate-800/50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16 relative">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
            About Me
          </span>
          <span className="block h-1 w-24 bg-gradient-to-r from-cyan-500 to-purple-500 mx-auto mt-4"></span>
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div data-aos="fade-right">
            <h3 className="text-2xl font-bold mb-6 text-cyan-300">Background</h3>
            <p className="text-slate-300 mb-6 leading-relaxed">
              I&apos;m Emmanuel Manyara, a passionate Full Stack Developer with a focus on creating beautiful, 
              functional, and user-centered digital experiences. I enjoy tackling complex problems and 
              transforming ideas into elegant solutions through clean code.
            </p>
            <p className="text-slate-300 leading-relaxed">
              With a strong foundation in both frontend and backend technologies, I strive to build
              applications that are not only visually appealing but also performant and scalable.
            </p>
          </div>

          <div className="bg-slate-900/80 rounded-2xl p-8 shadow-xl border border-slate-700" data-aos="fade-left">
            <h3 className="text-2xl font-bold mb-6 text-cyan-300">Education & Experience</h3>
            
            <div className="mb-6">
              <div className="flex items-center gap-4 mb-2">
                <div className="text-purple-500 text-xl">
                  <FaGraduationCap />
                </div>
                <h4 className="text-xl font-semibold">University Of Eastern Africa, Baraton</h4>
              </div>
              <p className="text-slate-400 ml-9">BSc in Software Engineering, 2022-2026</p>
            </div>
            
            <div className="mb-6">
              <div className="flex items-center gap-4 mb-2">
                <div className="text-cyan-500 text-xl">
                  <FaCode />
                </div>
                <h4 className="text-xl font-semibold">Software Development Experience</h4>
              </div>
              <p className="text-slate-400 ml-9">3+ years of  development experience</p>
            </div>
            
            <div>
              <div className="flex items-center gap-4 mb-2">
                <div className="text-emerald-500 text-xl">
                  <FaLaptopCode />
                </div>
                <h4 className="text-xl font-semibold">Freelance Projects</h4>
              </div>
              <p className="text-slate-400 ml-9">Completed 10+ client projects across various industries</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
