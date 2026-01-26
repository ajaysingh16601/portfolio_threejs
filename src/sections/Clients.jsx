import { skills } from '../constants/index.js';
import { LazyImage } from '../components/LazyLoad.jsx';

const container = ` text-gray-100 pt-6`;
const wrapper = `flex flex-col justify-center items-center py-20 md:py-16 px-10 md:py-10 gap-4`;
const title = 'text-4xl font-bold text-amber-500';
const desc = 'text-xl text-center';
const skillContainer = 'flex flex-col p-3 gap-6 md:grid grid-cols-2 grid-rows-auto';
const skillWrapper = 'flex flex-col justify-center items-center bg-gray-950 py-4 p-3 rounded-xl border border-lime-800 hover:border-lime-500 hover:shadow-lg hover:shadow-lime-600/50 hover:scale-105 duration-300 ease-in-out transition-all cursor-pointer';
const skillTitle = 'text-amber-600 text-2xl font-semibold text-center my-3 group-hover:text-amber-400 transition-colors duration-300';
const skillList = 'flex flex-wrap gap-3 justify-center items-center px-3 py-4';
const oneSkillStyle = 'flex items-center flex-wrap p-2 border-2 border-gray-700 rounded-xl gap-2 hover:border-lime-500 hover:bg-gray-900 hover:shadow-md hover:shadow-lime-600/40 hover:scale-110 transition-all duration-300 ease-in-out cursor-pointer group';
const skillImage = 'h-8 w-auto group-hover:scale-125 group-hover:drop-shadow-lg transition-transform duration-300';
const skillName = 'text-gray-300 group-hover:text-lime-400 transition-colors duration-300 font-medium';

const Clients = () => {
  return (
    <section className="c-space my-20">
      <div id='skills' className={container}>
        <div className={wrapper}>
          <div className={title}>Skills</div>
          <div className={desc}>Here are some of my skills, on which I have worked </div>
          
          <div className={skillContainer}>
            {
              skills.map((oneSection) => (
                <div className={skillWrapper} key={oneSection.id}>
                  <div className={skillTitle}>{oneSection.title}</div>
                  <div className={skillList}>
                    {
                      oneSection.skill.map((item) => (
                        <div className={oneSkillStyle} key={item.id}>
                          <LazyImage 
                            className={skillImage}
                            src={item.image} 
                            alt={item.name}
                          />
                          <span className={skillName}>{item.name}</span>
                        </div>
                      ))
                    }
                  </div>
                </div>
              ))
            }
          </div>
        </div>
      </div>

    </section>
  );
};

export default Clients;
