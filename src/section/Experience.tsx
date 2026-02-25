const experiences = [
  {
    period: '2021 - Present',
    role: 'Frontend Developer',
    company: 'Freelance',
    description:
      'I have been working as a freelance frontend developer, creating responsive and user-friendly websites and applications for various clients. My work involves using modern technologies such as React, Next.js, and Tailwind CSS to build high-quality digital products.',
    technologies: ['React', 'Next.js', 'Tailwind CSS', 'TypeScript'],
    current: true,
  },
  {
    period: '2010 - 2021',
    role: 'Administrator of the website and online store',
    company: 'World of High Technology',
    description:
      'I worked on the World of High Technology website, a resource for computer news and software. I wrote news articles and reviews, made sure the site was working properly, and did everything I could to make it user-friendly.',
    technologies: [
      'Bitrix CMS',
      'PHP',
      'HTML',
      'CSS',
      'JavaScript',
      'MySQL',
      'SEO',
      'Google Analytics',
      'Yandex Metrica',
      'CentOS',
      'Apache',
      'Nginx',
    ],
    current: false,
  },
];

export const Experience = () => {
  return (
    <>
      <section id='experience' className='py-32 relative overflow-hidden'>
        <div></div>
      </section>
    </>
  );
};
