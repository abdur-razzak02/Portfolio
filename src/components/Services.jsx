import { FaCode, FaMobileAlt, FaPaintBrush } from "react-icons/fa";

const Services = () => {
  return (
    <div className="px-5 lg:px-0 lg:w-3/4 mx-auto py-10 lg:py-20 bg-white">
      <div className="text-center pb-5 sm:pb-10">
        <h1 className="text-4xl mb-2 font-semibold text-main">My Services</h1>
        <p className="text-lg text-gray-500">
          Empowering Your Ideas with Modern Web Solutions.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
        <div className="border p-5 shadow hover:shadow-2xl rounded-lg">
          <FaCode className="text-white bg-blue-300 text-6xl p-2 rounded-md"></FaCode>
          <h2 className="text-2xl text-main font-semibold py-4">
            Web Development
          </h2>
          <p>
            Building responsive, fast, and secure websites tailored to your
            needs using modern technologies.
          </p>
          <button className="border-2 border-blue-500 text-blue-500 font-bold py-1 px-4 mt-3 rounded hover:bg-blue-500 hover:text-white  transition-all duration-300">
            Read More
          </button>
        </div>

        <div className="border p-5 shadow hover:shadow-2xl rounded-lg">
          <FaMobileAlt className="text-white bg-teal-400 text-6xl p-2 rounded-md"></FaMobileAlt>
          <h2 className="text-2xl text-main font-semibold py-4">
            Responsive Design
          </h2>
          <p>
            Crafting designs that look great and function flawlessly on all
            devices, from desktops to smartphones.
          </p>
          <button className="border-2 border-teal-500 text-teal-500 font-bold py-1 px-4 mt-3 rounded hover:bg-teal-500 hover:text-white  transition-all duration-300">
            Read More
          </button>
        </div>
        <div className="border p-5 shadow hover:shadow-2xl rounded-lg">
          <FaPaintBrush className="text-white bg-pink-300 text-6xl p-2 rounded-md"></FaPaintBrush>
          <h2 className="text-2xl text-main font-semibold py-4">
            UI/UX Design
          </h2>
          <p>
            Designing user-friendly interfaces and experiences that enhance
            usability and drive engagement.
          </p>
          <button className="border-2 border-pink-500 text-pink-500 font-bold py-1 px-4 mt-3 rounded hover:bg-pink-500 hover:text-white  transition-all duration-300">
            Read More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Services;
