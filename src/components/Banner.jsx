const Banner = () => {
  return (
    <div className="flex flex-col sm:flex-row justify-between items-center px-5 lg:px-0 lg:w-3/4 mx-auto gap-5 sm:gap-10 py-5 lg:py-10">
      <div className="flex-1 space-y-2">
        <h1 className="text-xl font-semibold"> ____ Hello</h1>
        <h2 className="text-4xl font-bold">
          {`I'm Abdur`} <span className="text-main">Razzak</span>
        </h2>
        <h3 className="text-2xl font-semibold font-montserrat">
          Web Developer
        </h3>
        <p className=" text-gray-400">
          Innovative web development tailored for your needs.
        </p>
      </div>
      <div className="flex-1 sm:justify-end flex justify-center">
              <img src={'https://i.ibb.co.com/ZYFdrLP/portfolio-image.png'} alt="author" className="h-[400px] lg:h-[500px] w-auto"/>
      </div>
    </div>
  );
};

export default Banner;
