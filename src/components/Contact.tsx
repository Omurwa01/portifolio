
// components/Contact.tsx
import { useState } from 'react';
import { FaEnvelope, FaGithub, FaInstagram, FaLinkedin, FaMapMarkerAlt, FaPhone, FaTwitter } from 'react-icons/fa';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };


  return (
    <section id="contact" className="py-20 bg-slate-900">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16 relative">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
            Get In Touch
          </span>
          <span className="block h-1 w-24 bg-gradient-to-r from-cyan-500 to-purple-500 mx-auto mt-4"></span>
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          <div data-aos="fade-right">
            <h3 className="text-2xl font-bold mb-6 text-cyan-300">Contact Information</h3>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-center">
                <div className="text-purple-500 text-xl mr-4">
                  <FaEnvelope />
                </div>
                <div>
                  <p className="text-slate-400">Email</p>
                  <a href="mailto:emmanuel.manyara@example.com" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                    emmanuel.manyara@example.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="text-purple-500 text-xl mr-4">
                  <FaPhone />
                </div>
                <div>
                  <p className="text-slate-400">Phone</p>
                  <a href="tel:+254769714986" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                    +254769714986
                  </a>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="text-purple-500 text-xl mr-4">
                  <FaMapMarkerAlt />
                </div>
                <div>
                  <p className="text-slate-400">Location</p>
                  <p className="text-white">Nairobi, Kenya</p>
                </div>
              </div>
            </div>
            
            <h3 className="text-xl font-bold mb-4 text-cyan-300">Connect With Me</h3>
            <div className="flex gap-4">
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center
                         text-slate-400 hover:text-cyan-400 hover:bg-slate-700 transition-all duration-300"
              >
                <FaGithub />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center
                         text-slate-400 hover:text-cyan-400 hover:bg-slate-700 transition-all duration-300"
              >
                <FaLinkedin />
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center
                         text-slate-400 hover:text-cyan-400 hover:bg-slate-700 transition-all duration-300"
              >
                <FaTwitter />
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center
                         text-slate-400 hover:text-cyan-400 hover:bg-slate-700 transition-all duration-300"
              >
                <FaInstagram />
              </a>
            </div>
          </div>
          
          <div className="bg-slate-800 rounded-2xl p-8 border border-slate-700 shadow-xl" data-aos="fade-left">
            <h3 className="text-2xl font-bold mb-6 text-cyan-300">Send Me a Message</h3>
            
            <form method='POST'  action="https://formspree.io/f/xyzwpvjn"
>
              <div className="mb-4">
                <label htmlFor="name" className="block text-slate-300 mb-2">Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-2 text-white
                           focus:outline-none focus:border-cyan-500 transition-colors"
                  required
                />
              </div>
              
              <div className="mb-4">
                <label htmlFor="email" className="block text-slate-300 mb-2">Your Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-2 text-white
                           focus:outline-none focus:border-cyan-500 transition-colors"
                  required
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-slate-300 mb-2">Your Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white
                           focus:outline-none focus:border-cyan-500 transition-colors resize-none"
                  required
                />
              </div>
              
              <button
                type="submit"
                className="w-full py-3 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg font-semibold
                          hover:shadow-lg hover:shadow-cyan-500/30 transition-all duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
