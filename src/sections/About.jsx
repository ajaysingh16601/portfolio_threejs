import { useState } from 'react';
import Globe from 'react-globe.gl';

import Button from '../components/Button.jsx';

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
                I’m a passionate Fullstack Developer with over 2 years of professional experience in building scalable, high-performance web applications. I specialize in crafting intuitive user interfaces and delivering seamless end-to-end user experiences. I’m always eager to explore new technologies and embrace challenges that push me to grow.
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
  Proficient in modern JavaScript frameworks including Angular (v7–v18), React.js, and Node.js. Skilled in building RESTful APIs, component-based architectures, and maintaining clean, efficient codebases. Experienced with version control systems like GitHub, GitLab, and Bitbucket. I bring strong project ownership, collaborative team spirit, and sharp problem-solving abilities to every project.
</p>
            </div>
          </div>
        </div>

        <div className="col-span-1 xl:row-span-2">
          <div className="grid-container">
            <div className="rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center">
              <Globe
                height={326}
                width={326}
                backgroundColor="rgba(0, 0, 0, 0)"
                backgroundImageOpacity={0.5}
                showAtmosphere
                showGraticules
                globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
                bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                labelsData={[{ lat: 40, lng: -100, text: 'Indore, India', color: 'white', size: 15 }]}
              />
            </div>
            <div>
              <p className="grid-headtext">Global Collaboration Ready</p>
              <p className="grid-subtext">
                Based in Indore, India — I’m highly flexible with time zones and thrive in remote-first environments. I’m open to global opportunities and committed to clear and consistent communication across borders.
              </p>
              <Button name="Contact Me" isBeam containerClass="w-full mt-10" />
            </div>
          </div>
        </div>

        <div className="xl:col-span-2 xl:row-span-1">
          <div className="grid-container">
            <img src="assets/grid3.png" alt="grid-3" className="w-full sm:h-[266px] h-fit object-contain" />

            <div>
<p className="grid-headtext">My Passion for Coding</p>
<p className="grid-subtext">
  Coding is not just my career—its what I love. I’m driven by a curiosity to solve real-world problems through elegant code. Whether it’s optimizing a complex algorithm or experimenting with the latest web tech, I’m always looking to improve and innovate.
</p>
            </div>
          </div>
        </div>

        <div className="xl:col-span-1 xl:row-span-1">
          <div className="grid-container">
            <img
              src="assets/grid4.png"
              alt="grid-4"
              className="w-full md:h-[126px] sm:h-[276px] h-fit object-cover sm:object-top"
            />

            <div className="space-y-2">
              <p className="grid-subtext text-center">Contact me</p>
              <div className="copy-container" onClick={handleCopy}>
                <img src={hasCopied ? 'assets/tick.svg' : 'assets/copy.svg'} alt="copy" />
                <p className="lg:text-2xl md:text-xl font-medium text-gray_gradient text-white">ajaysingh16601@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
