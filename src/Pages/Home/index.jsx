import { Navigation } from '../../components/Navbar';
import { Header } from '../../components/Header';
import { About } from '../../components/About';
import { Contact } from '../../components/Contact';
import Project from '../../components/Project';
import { Footer } from '../../components/Footer';


export const homePage = () => {
  return (
    <>
      <Navigation />
      <Header />
      <About />
      <Project />
      <Contact />
      <Footer />
    </>
  );
};

export default homePage;
