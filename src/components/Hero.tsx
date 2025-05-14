import Image from 'next/image';
import { useEffect, useRef } from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Hero: React.FC = () => {
  const typedTextRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const phrases = [
      "Building digital experiences with modern technology",
      "Turning ideas into elegant code",
      "Creating responsive and scalable web applications",
      "Fullstack development with a focus on user experience"
    ];
    
    let currentPhrase = 0;
    let currentChar = 0;
    let isDeleting = false;
    let typingSpeed = 100;
    
    function typeText() {
      if (!typedTextRef.current) return;
      
      const currentText = phrases[currentPhrase];
      
      if (isDeleting) {
        typedTextRef.current.textContent = currentText.substring(0, currentChar - 1);
        currentChar--;
        typingSpeed = 50;
      } else {
        typedTextRef.current.textContent = currentText.substring(0, currentChar + 1);
        currentChar++;
        typingSpeed = 100;
      }
      
      if (!isDeleting && currentChar === currentText.length) {
        isDeleting = true;
        typingSpeed = 1500; // Pause at end
      } else if (isDeleting && currentChar === 0) {
        isDeleting = false;
        currentPhrase = (currentPhrase + 1) % phrases.length;
        typingSpeed = 500; // Pause before typing next phrase
      }
      
      setTimeout(typeText, typingSpeed);
    }
    
    typeText();
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center py-20">
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(10)].map((_, i) => (
          <div 
            key={i}
            className="absolute rounded-full bg-cyan-500/10 animate-float"
            style={{
              width: `${Math.random() * 300 + 50}px`,
              height: `${Math.random() * 300 + 50}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${Math.random() * 20 + 10}s`
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2" data-aos="fade-right">
            <h1 className="text-5xl md:text-6xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
              Emmanuel Manyara
            </h1>
            
            <div className="h-16 mb-4">
              <h2 ref={typedTextRef} className="text-2xl md:text-3xl text-cyan-300"></h2>
            </div>
            
            <p className="text-lg text-slate-300 mb-8 max-w-lg">
              Passionate Full Stack Developer with expertise in modern web technologies.
              Crafting responsive, scalable, and innovative digital solutions.
            </p>
            
            <div className="flex gap-4 mb-8">
              <a 
                href="#skills" 
                className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full font-semibold hover:translate-y-[-4px] transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/30"
              >
                Explore Skills
              </a>
              <a 
                href="#contact" 
                className="px-8 py-3 border border-cyan-500 text-cyan-400 rounded-full font-semibold hover:bg-cyan-500/10 hover:translate-y-[-4px] transition-all duration-300"
              >
                Contact Me
              </a>
            </div>
            
            <div className="flex gap-4">
              <a 
                href="https://github.com" 
                target="https://github.com/Omurwa01" 
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-cyan-400 text-2xl transition-all duration-300 hover:scale-110"
              >
                <FaGithub />
              </a>
              <a 
                href="https://linkedin.com" 
                target="www.linkedin.com/in/emmanuel-manyara-645a74295" 
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-cyan-400 text-2xl transition-all duration-300 hover:scale-110"
              >
                <FaLinkedin />
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-cyan-400 text-2xl transition-all duration-300 hover:scale-110"
              >
                <FaTwitter />
              </a>
            </div>
          </div>
          
          <div className="lg:w-1/2 flex justify-center" data-aos="fade-left">
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-cyan-500/30 shadow-xl shadow-cyan-500/20">
              {/* Replace with actual image when available */}
              {/* <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/80 to-purple-600/80 flex items-center justify-center text-5xl font-bold">
                EM
              </div> */}
              {/* Uncomment when you have an actual image */}
              <Image
                src="/portfolio.jpeg"
                alt="Emmanuel Manyara"
                layout="fill"
                objectFit="cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;