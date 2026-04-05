import { Navbar } from '@/layout/Navbar.tsx';
import Hero from '@/section/Hero';
import { About } from '@/section/About';
import { Projects } from '@/section/Projects';
import { Experience } from '@/section/Experience';
import { Testimonials } from '@/section/Testimonials';
import { Contact } from '@/section/Contact';

function App() {
  return (
    <>
      <div className='min-h-screen overflow-x-hidden'>
        <Navbar />
        <main>
          <Hero />
          <About />
          <Projects />
          <Experience />
          <Testimonials />
          <Contact />
        </main>
      </div>
    </>
  );
}

export default App;
