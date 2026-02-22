import { Navbar } from '@/layout/Navbar.tsx';
import Hero from '@/section/Hero';
import { About } from './section/About';

function App() {
  return (
    <>
      <div className='min-h-screen overflow-x-hidden'>
        <Navbar />
        <main>
          <Hero />
          <About />
        </main>
      </div>
    </>
  );
}

export default App;
