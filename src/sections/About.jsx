import { useState } from 'react';


import Button from '../components/Button.jsx';
import { LazySection } from '../components/LazyLoad.jsx';
import MyGlobe from '../components/MyGlobe.jsx';

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
                I am a Full Stack Developer with 3 years of expertise designing, building, and deploying scalable, high-performance web applications. I specialize in frontend architecture and backend API development for real-time systems, AI-powered chatbots, and payment gateway integrations. I’m driven by a curiosity to solve real-world challenges through elegant code and leverage modern CI/CD or Cloud tools for impactful production solutions.
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
  Proficient in modern technologies including React.js, Angular,Next.js, Node.js, Express.js, and Databases like MongoDB, PostgreSQL, and MySQL. I design systems using Microservices architecture, WebSockets, JWT/OAuth, Redis, RabbitMQ, and GraphQL. I integrate tools like Docker, NGINX, and CI/CD pipelines alongside AWS infrastructure (EC2, S3, CloudWatch) to establish highly resilient environments. Whether optimizing database queries or creating seamless payment flows, I’m always looking to innovate. 
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
                <MyGlobe />
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
