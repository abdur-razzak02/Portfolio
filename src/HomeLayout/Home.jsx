import AboutMe from "../components/AboutMe";
import Banner from "../components/Banner";
import HireMe from "../components/HireMe";
import Projects from "../components/Projects";
import Review from "../components/Review";
import Services from "../components/Services";
import Social from "../components/Social";

const Home = () => {
  return (
    <div className="">
      <div className="bg-hero bg-cover bg-center bg-no-repeat">
      <Banner></Banner>
      </div>
      <Services></Services>
      <div className="bg-hero bg-cover bg-center bg-no-repeat"><AboutMe></AboutMe></div>
      <Projects></Projects>
      <Review></Review>
      <HireMe></HireMe>
      <Social></Social>
    </div>
  );
};

export default Home;
