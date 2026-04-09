import { About } from '@/section/About'
import { Contact } from '@/section/Contact'
import { Experience } from '@/section/Experience'
import Hero from '@/section/Hero'
import { Projects } from '@/section/Projects'
import { Testimonials } from '@/section/Testimonials'

export const Main = () => {
  return (
    <>
      <main>
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Testimonials />
        <Contact />
      </main>
    </>
  );
};
