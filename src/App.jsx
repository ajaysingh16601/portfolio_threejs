import { Suspense, lazy } from 'react';
import Navbar from './sections/Navbar.jsx';
import { Toaster } from 'react-hot-toast';

// Lazy load heavy sections with Three.js
const Hero = lazy(() => import('./sections/Hero.jsx'));
const Clients = lazy(() => import('./sections/Clients.jsx'));
const About = lazy(() => import('./sections/About.jsx'));
const Projects = lazy(() => import('./sections/Projects.jsx'));
const WorkExperience = lazy(() => import('./sections/Experience.jsx'));
const Contact = lazy(() => import('./sections/Contact.jsx'));
const Footer = lazy(() => import('./sections/Footer.jsx'));

const LoadingFallback = () => (
  <div className="flex items-center justify-center min-h-screen text-white">
    <div className="animate-pulse">Loading...</div>
  </div>
);

const App = () => {
  return (
    <main className="max-w-7xl mx-auto relative">
      <Navbar />
      <Suspense fallback={<LoadingFallback />}>
        <Hero />
      </Suspense>
      <Suspense fallback={null}>
        <Clients />
        <About />
        <Projects />
        <WorkExperience />
        <Contact />
        <Footer />
      </Suspense>
      <Toaster position="top-center" reverseOrder={false} />
    </main>
  );
};

export default App;
