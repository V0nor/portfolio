import { Navbar } from '../../components/Navbar';
import { Header } from '../../components/Header';
import { About } from '../../components/About';
import { Contact } from '../../components/Contact';
import { Projects } from '../../components/Projects';
import { Footer } from '../../components/Footer';
export const Home = () => {
  return (
    <>
      <Navbar />
      <Header />
      <About />
      {/* <Experience /> */}
      <Projects />
      <Contact />
      <Footer />
    </>
  );
};
