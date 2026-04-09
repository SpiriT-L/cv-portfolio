import { Navbar } from '@/layout/Navbar.tsx';
import { Main } from '@/layout/Main';

function App() {
  return (
    <>
      <div className='min-h-screen overflow-x-hidden'>
        <Navbar />
        <Main />
      </div>
    </>
  );
}

export default App;
