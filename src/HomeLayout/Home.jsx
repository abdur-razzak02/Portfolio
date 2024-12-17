import AboutMe from "../components/AboutMe";
import Banner from "../components/Banner";
import Projects from "../components/Projects";
import Services from "../components/Services";

const Home = () => {
  return (
    <div className="">
      <div className="bg-hero bg-cover bg-center bg-no-repeat">
      <Banner></Banner>
      </div>
      <Services></Services>
      <AboutMe></AboutMe>
      <div  className="bg-hero bg-cover bg-center bg-no-repeat"><Projects></Projects></div>
    </div>
  );
};

export default Home;
