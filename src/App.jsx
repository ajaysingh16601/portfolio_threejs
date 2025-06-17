import Hero from './sections/Hero.jsx';
import About from './sections/About.jsx';
import Footer from './sections/Footer.jsx';
import Navbar from './sections/Navbar.jsx';
import Contact from './sections/Contact.jsx';
import Clients from './sections/Clients.jsx';
import Projects from './sections/Projects.jsx';
import WorkExperience from './sections/Experience.jsx';
import { Toaster } from 'react-hot-toast';

const App = () => {
  return (
    <main className="max-w-7xl mx-auto relative">
      <Navbar />
      <Hero />
      <Clients />
      <About />
      <Projects />
      <WorkExperience />
      <Contact />
      <Footer />
      <Toaster position="top-center" reverseOrder={false} />
    </main>
  );
};

export default App;
