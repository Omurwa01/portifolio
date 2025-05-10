// components/Skills.tsx
import SkillCard from './SkillCard';

// Define skill data interfaces
interface Skill {
  name: string;
  icon: string;
  color: string;
  level: number;
  description: string;
}

interface SkillCategory {
  title: string;
  skills: Skill[];
}

const Skills: React.FC = () => {
  const skillCategories: SkillCategory[] = [
    {
      title: "Frontend Development",
      skills: [
        {
          name: "HTML5",
          icon: "html5",
          color: "text-orange-500",
          level: 95,
          description: "Semantic markup, accessibility best practices, and modern HTML features."
        },
        {
          name: "CSS3",
          icon: "css3-alt",
          color: "text-blue-500",
          level: 90,
          description: "Modern layouts with Flexbox & Grid, animations, and responsive design."
        },
        {
          name: "JavaScript",
          icon: "js",
          color: "text-yellow-400",
          level: 88,
          description: "ES6+, DOM manipulation, asynchronous programming, and modern patterns."
        },
        {
          name: "React",
          icon: "react",
          color: "text-cyan-400",
          level: 85,
          description: "Component architecture, hooks, context API, and state management."
        }
      ]
    },
    {
      title: "CSS & UI Frameworks",
      skills: [
        {
          name: "Tailwind CSS",
          icon: "paint-brush",
          color: "text-cyan-500",
          level: 92,
          description: "Utility-first CSS framework for rapid UI development."
        },
        {
          name: "Sass/SCSS",
          icon: "sass",
          color: "text-pink-500",
          level: 80,
          description: "Variables, mixins, functions, and modular CSS architecture."
        },
        {
          name: "Bootstrap",
          icon: "bootstrap",
          color: "text-purple-500",
          level: 85,
          description: "Responsive grid system, components, and utility classes."
        }
      ]
    },
    {
      title: "JavaScript Frameworks & Libraries",
      skills: [
        {
          name: "Next.js",
          icon: "react",
          color: "text-white",
          level: 80,
          description: "Server-side rendering, static site generation, and API routes."
        },
        {
          name: "TypeScript",
          icon: "code",
          color: "text-blue-400",
          level: 75,
          description: "Static typing, interfaces, and advanced type patterns."
        },
        {
          name: "Redux",
          icon: "retweet",
          color: "text-purple-400",
          level: 78,
          description: "State management for complex applications."
        }
      ]
    },
    {
      title: "Backend Development",
      skills: [
        {
          name: "Node.js",
          icon: "node-js",
          color: "text-green-500",
          level: 82,
          description: "Server-side JavaScript runtime for building scalable network applications."
        },
        {
          name: "Express.js",
          icon: "server",
          color: "text-white",
          level: 80,
          description: "Web application framework for Node.js, creating robust APIs."
        },
        {
          name: "Python",
          icon: "python",
          color: "text-yellow-300",
          level: 75,
          description: "Data analysis, automation, and general-purpose programming."
        }
      ]
    },
    {
      title: "Databases & ORM",
      skills: [
        {
          name: "MongoDB",
          icon: "database",
          color: "text-green-500",
          level: 75,
          description: "NoSQL database for modern applications."
        },
        {
          name: "PostgreSQL",
          icon: "database",
          color: "text-blue-400",
          level: 70,
          description: "Advanced open source relational database."
        },
        {
          name: "Prisma",
          icon: "project-diagram",
          color: "text-indigo-400",
          level: 78,
          description: "Next-generation ORM for Node.js and TypeScript."
        }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16 relative">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
            Technical Skills
          </span>
          <span className="block h-1 w-24 bg-gradient-to-r from-cyan-500 to-purple-500 mx-auto mt-4"></span>
        </h2>

        {skillCategories.map((category, index) => (
          <div key={index} className="mb-12 last:mb-0" data-aos="fade-up" data-aos-delay={index * 100}>
            <h3 className="text-2xl font-bold mb-8 border-l-4 border-cyan-500 pl-4 text-cyan-300">
              {category.title}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {category.skills.map((skill, skillIndex) => (
                <SkillCard 
                  key={skillIndex}
                  name={skill.name}
                  icon={skill.icon}
                  color={skill.color}
                  level={skill.level}
                  description={skill.description}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;