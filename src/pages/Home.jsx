import Hero from '../components/Hero';
// import Navbar from '../components/Navbar';
// import SearchBar from '../components/SearchBar';

const Home = () => {
  console.log("Rendering Home page");
  return (
    <div>
      {/* <Navbar /> */}
      <Hero />
      {/* <SearchBar /> */}
      {/* Add other sections like Services, Testimonials, Map, Footer etc */}
    </div>
  );
};

export default Home;
