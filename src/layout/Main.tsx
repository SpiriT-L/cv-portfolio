import { About } from '@/section/About'
import { Contact } from '@/section/Contact'
import { Experience } from '@/section/Experience'
import { Projects } from '@/section/Projects'
import { Testimonials } from '@/section/Testimonials'

export const Main = () => {
  return (
    <>
      <main>
        <About />
        <Projects />
        <Experience />
        <Testimonials />
        <Contact />
      </main>
    </>
  );
};
