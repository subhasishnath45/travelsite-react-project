import Hero from '../components/Hero';
import Navbar from '../components/Navbar';
import SearchBar from '../components/SearchBar';
import Services from '../components/Services';
import Testimonials from '../components/Testimonials';
import Map from '../components/Map';
import Footer from '../components/Footer';
const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <SearchBar />
      <Services />
      <Testimonials />
      <Map />
      <Footer />
    </div>
  );
};

export default Home;
