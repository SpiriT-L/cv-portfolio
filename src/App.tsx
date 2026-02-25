import { Navbar } from '@/layout/Navbar.tsx';
import Hero from '@/section/Hero';
import { About } from '@/section/About';
import { Projects } from '@/section/Projects';
import { Experience } from '@/section/Experience';

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
        </main>
      </div>
    </>
  );
}

export default App;
