import { Navbar } from '@/layout/Navbar.tsx';
import Hero from '@/section/Hero'

function App() {
  return (
    <>
      <div className='min-h-screen overflow-x-hidden'>
        <Navbar />
        <main>
          <Hero />
        </main>
      </div>
    </>
  );
}

export default App;
