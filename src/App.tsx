import { Navbar } from '@/layout/Navbar.tsx';
import Hero from '@/section/Hero';
import { About } from './section/About';
import { Projects } from './section/Projects';

function App() {
  return (
    <>
      <div className='min-h-screen overflow-x-hidden'>
        <Navbar />
        <main>
          <Hero />
          <About />
          <Projects />
        </main>
      </div>
    </>
  );
}

export default App;
