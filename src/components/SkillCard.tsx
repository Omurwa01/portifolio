import { useEffect, useRef } from 'react';

interface SkillCardProps {
  name: string;
  icon: string;
  color: string;
  level: number;
  description: string;
}

const SkillCard: React.FC<SkillCardProps> = ({ name, icon, color, level, description }) => {
  const progressRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cardElement = cardRef.current; // Cache ref value
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && progressRef.current) {
            progressRef.current.style.width = `${level}%`;
          }
        });
      },
      { threshold: 0.1 }
    );

    if (cardElement) {
      observer.observe(cardElement);
    }

    return () => {
      if (cardElement) {
        observer.unobserve(cardElement);
      }
    };
  }, [level]);

  return (
    <div 
      ref={cardRef}
      className="bg-slate-800 border border-slate-700 rounded-lg p-6 transition-all duration-300 
                hover:bg-slate-700/50 hover:-translate-y-2 hover:shadow-lg hover:shadow-cyan-500/10 group"
    >
      <div className="flex items-center mb-4">
        <div className={`text-3xl ${color} mr-3 group-hover:scale-110 transition-transform duration-300`}>
          <i className={`fab fa-${icon}`}></i>
        </div>
        <h4 className="text-xl font-semibold">{name}</h4>
      </div>
      
      <p className="text-slate-400 text-sm mb-4 h-12">
        {description}
      </p>
      
      <div className="w-full bg-slate-900 h-2 rounded-full overflow-hidden">
        <div 
          ref={progressRef}
          className="h-full bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full transition-all duration-1000 ease-out"
          style={{ width: '0%' }}
        ></div>
      </div>
      <div className="mt-1 text-right text-sm text-slate-500">
        {level}%
      </div>
    </div>
  );
};

export default SkillCard;
