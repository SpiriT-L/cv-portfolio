import { Navbar } from '@/layout/Navbar.tsx';
import { Main } from '@/layout/Main';
import { Footer } from './layout/Footer'

function App() {
  return (
    <>
      <div className='min-h-screen overflow-x-hidden'>
        <Navbar />
        <Main />
        <Footer />
      </div>
    </>
  );
}

export default App;
