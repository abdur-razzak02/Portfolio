import { Link } from "react-router-dom";

const HireMe = () => {
  return (
    <div className="px-5 lg:px-0 lg:w-3/4 mx-auto">
      <div className="bg-multiColor bg-cover bg-center bg-no-repeat p-5 lg:p-10 rounded-lg flex flex-col sm:flex-row gap-5 sm:justify-between sm:items-center mb-10 lg:mb-16">
        <div>
          <h1 className="text-base lg:text-xl font-semibold">
            <span className="text-main">_____</span> Portfolio
          </h1>
          <h2 className="text-2xl lg:text-3xl font-semibold text-main py-2">
            Have Any Project In Mind
          </h2>
          <p className="text-gray-500 text-lg">
            Let&apos;s Bring Your Ideas to Life! <br />
            Turn your vision into reality with innovative solutions.
          </p>
        </div>

        <div className="py-2">
          <Link
            to="/"
            className="px-7 py-3 rounded-md border border-main text-main hover:bg-[#520000] hover:text-white transition duration-500 ease-in-out font-semibold"
          >
            Hire Me
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HireMe;
