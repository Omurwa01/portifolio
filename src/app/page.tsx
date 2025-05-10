"use client"


import Head from 'next/head';
import About from '../components/About';
import Contact from '../components/Contact';
import Hero from '../components/Hero';
import Skills from '../components/Skills';

const Home= () => {


  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800 text-white">
      <Head>
        <title>Emmanuel Manyara | Portfolio</title>
        <meta name="description" content="Full Stack Developer Portfolio - Emmanuel Manyara" />
        <link rel="icon" href="/favicon.ico" />
        <link href="https://cdnjs.cloudflare.com/ajax/libs/aos/2.3.4/aos.css" rel="stylesheet" />
      </Head>

      <main className="overflow-hidden">
        <Hero />
        <About />
        <Skills />
        <Contact />
      </main>

      <footer className="text-center py-6 text-slate-400 border-t border-slate-700">
        <p>© {new Date().getFullYear()} Emmanuel Manyara. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
