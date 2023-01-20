import { Navigation } from '../../components/Navbar';
import { Header } from '../../components/Header';
import { About } from '../../components/About';
import { Contact } from '../../components/Contact';
import { Projects } from '../../components/Projects';
import { Footer } from '../../components/Footer';
export const Home = () => {
  return (
    <>
      <Navigation />
      <Header />
      <About />
      {/* <Experience /> */}
      <Projects />
      <Contact />
      <Footer />
    </>
  );
};
