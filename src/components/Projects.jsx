import { Link } from "react-router-dom";

const Projects = () => {
  const projects = [
    {
      title: "CineVerse Movie Portal",
      category: "Web Development",
      image: "https://i.ibb.co.com/tcCrMvK/Cine-Verse.png",
      github: "https://github.com/abdur-razzak02/CineVerse-client",
      liveLink: "https://cineverse-9ca24.web.app/"
    },
    {
      title: "Online Course Web",
      category: "UI/UX Design",
      image: "https://via.placeholder.com/300x400",
      github: "",
    },
    {
      title: "Digital Agency Web",
      category: "Web Design",
      image: "https://via.placeholder.com/300x400",
      github: "",
    },
    // {
    //   title: "E-Commerce Web",
    //   category: "UI/UX Design",
    //   image: "https://via.placeholder.com/300x400",
    //   github: "",
    // },
    // {
    //   title: "Construction Web",
    //   category: "Web Design",
    //   image: "https://via.placeholder.com/300x400",
    //   github: "",
    // },
    // {
    //   title: "E-Commerce",
    //   category: "Web Design",
    //   image: "https://via.placeholder.com/300x400",
    //   github: "",
    // },
  ];
  return (
    <section className="py-10 lg:py-16 px-5 lg:px-0 lg:w-3/4 mx-auto">
        <div className="flex justify-between items-center col-span-3 gap-5 mb-5">
          <div>
            <h1 className="text-base lg:text-xl font-semibold">
              <span className="text-main">_____</span> Portfolio
            </h1>
            <h2 className="text-2xl lg:text-3xl font-semibold text-main py-2">
              My Latest Project
            </h2>
            <p className="text-gray-500">{` "A Collection of My Latest Creative and Development Work" `}</p>
          </div>
          <button className="hover:text-white border border-main px-5 py-3 rounded-md font-semibold hover:bg-main transition duration-500 ease-in-out w-32 lg:w-28">
            View All
          </button>
      </div>
      
      <div className="grid gap-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
      {projects.map((project, index) => (
          <div
            key={index}
            className="rounded-lg shadow hover:shadow-2xl transition duration-500 ease-in-out"
          >
            <figure>
              <Link to={project?.liveLink}>
                <img
                  src={project.image}
                  alt={project.title}
                  className="object-cover h-72 lg:h-96 w-full rounded-t-lg"
                />
              </Link>
            </figure>
            <div className="flex justify-between items-center p-3">
              <div>
                <Link to={project?.liveLink}>
                  <h3 className="card-title text-lg text-main">
                    {project?.title}
                  </h3>
                </Link>
                <Link to={project?.liveLink}>
                  <p className="text-indigo-500 text-sm">Live Link</p>
                </Link>
              </div>
              <div>
                <Link to={project?.github}>
                  <img
                    src={"https://i.ibb.co.com/vhvQwFr/github-icon.png"}
                    alt="github"
                    className="w-10"
                  />
                </Link>
              </div>
            </div>
          </div>
        ))}
        </div>
    </section>
  );
};

export default Projects;
