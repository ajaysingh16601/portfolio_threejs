import { useState } from 'react';


import Button from '../components/Button.jsx';
import { LazySection } from '../components/LazyLoad.jsx';
import TechStackSphere from '../components/TechStackSphere.jsx';

const About = () => {
  const [hasCopied, setHasCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText('ajaysingh16601@gmail.com');
    setHasCopied(true);

    setTimeout(() => {
      setHasCopied(false);
    }, 2000);
  };

  return (
    <section className="c-space my-20" id="about">
      <div className="grid xl:grid-cols-3 xl:grid-rows-2 md:grid-cols-2 grid-cols-1 gap-5 h-full">
        <div className="col-span-1 xl:row-span-2">
          <div className="grid-container">
            <img src="assets/grid1.png" alt="grid-1" className="w-full sm:h-[276px] h-fit object-contain" />

            <div>
              <p className="grid-headtext">Hi, I’m Ajay Solanki</p>
              <p className="grid-subtext">
                I’m a passionate Fullstack Developer with over 3 years of professional experience in building scalable, high-performance web applications. I specialize in crafting intuitive user interfaces and delivering seamless end-to-end user experiences. I’m always eager to explore new technologies and embrace challenges that push me to grow. Coding is not just my career—it&apos;s what I love. I’m driven by a curiosity to solve real-world problems through elegant code.
              </p>
            </div>
          </div>
        </div>

        <div className="col-span-1 xl:row-span-2">
          <div className="grid-container">
            <img src="assets/file2.png" alt="Tech" className="w-full sm:h-[276px] h-fit object-contain" />

            <div>
<p className="grid-headtext">Tech Stack</p>
<p className="grid-subtext">
  Proficient in modern JavaScript frameworks including React.js, Angular (v7–v18), and Node.js. Skilled in building RESTful APIs, component-based architectures, and maintaining clean, efficient codebases. Experienced with version control systems like GitHub, GitLab, and Bitbucket. I bring strong project ownership, collaborative team spirit, and sharp problem-solving abilities to every project. Whether it’s optimizing a complex algorithm or experimenting with the latest web tech, I’m always looking to improve and innovate.
</p>
            </div>
          </div>
        </div>

        <div className="col-span-1 xl:row-span-2">
          <div className="grid-container">
            <div className="rounded-3xl w-full sm:h-[326px] h-[326px] flex justify-center items-center">
              <LazySection 
                fallback={
                  <div className="w-full h-[326px] flex items-center justify-center">
                    <div className="animate-pulse text-white-600">Loading Globe...</div>
                  </div>
                }
              >
                <TechStackSphere />
              </LazySection>
            </div>
            <div>
              <p className="grid-headtext">Global Collaboration Ready</p>
              <p className="grid-subtext">
                Based in Indore, India - I’m highly flexible with time zones and thrive in remote-first environments. I’m open to global opportunities and committed to clear and consistent communication across borders.
              </p>
              <a href="#contact" className="w-fit">
                <Button name="Let's Connect" isBeam containerClass="w-full mt-10" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
