import Navbar from './components/Navbar';
import Carousel from './components/Carousel';
import About from './components/About';
import Schedule from './components/Schedule';
import Donation from './components/Donation';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { Outlet } from 'react-router';

function App() {
  return (
    <>
    <Outlet/>
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-16">
        <Carousel />
        <About />
        <Schedule />
        <Donation />
        <Contact />
      </main>
      <Footer />
    </div>
    </>
  );
}

export default App;