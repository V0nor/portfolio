import { Navigation } from '../../components/Navbar';
import { Header } from '../../components/Header';
import { About } from '../../components/About';
import { Contact } from '../../components/Contact';
import { Projects } from '../../components/Projects';
import { Footer } from '../../components/Footer';

export const homePage = () => {
  return (
    <>
      <Navigation />
      <Header />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
};

export default homePage;
