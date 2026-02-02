import java from "../../public/java.png";
import reactjs from "../../public/reactjs.png";
import mysql from "../../public/mysql.jpg";
import springBoot from "../../public/springBoot.jpg";

function PortFolio() {
  const cardItem = [
    {
      id: 1,
      logo: "html.png",
      name: "HTML",
      project: "Election Pamphlet",
      source: "https://github.com/nagrajchitme/Election.git",
      video: "https://comforting-croissant-fdfc80.netlify.app",
    },
    {
      id: 2,
      logo: "css.jpg",
      name: "CSS",
      project: "Login Page UI",
      source: "https://github.com/nagrajchitme/login-page.git",
      video: "https://dainty-meerkat-99ad3d.netlify.app",
    },
    {
      id: 3,
      logo: "javascript.png",
      name: "JavaScript",
      project: "Tic-Tac-Toe Game",
      source: "https://github.com/nagrajchitme/Tic-Tac-Toe-game.git",
      video: "https://effervescent-praline-caaecd.netlify.app",
    },
    {
      id: 4,
      logo: reactjs,
      name: "ReactJS",
      project: "Portfolio Website",
      source: "https://github.com/nagrajchitme/portfolio.git",
      video: "https://nagrajvchitme.netlify.app/",
    },
    {
      id: 5,
      logo: java,
      name: "Java",
      project: "Data Integrity Audit System",
      source: "https://github.com/nagrajchitme/Data-integrity.git",
      video: "",
    },
    {
      id: 8,
      logo: springBoot,
      name: "Spring Boot",
      project: "Blogging Application",
      source: "https://github.com/nagrajchitme/Blogging_Application.git",
      video: "",
    },
    {
      id: 9,
      logo: mysql,
      name: "MySQL",
      project: "Student Management System",
      source: "https://github.com/nagrajchitme/student-management_mysql.git",
      video: "",
    },
  ];

  return (
    <div
      name="Portfolio"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 mt-16"
    >
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-2">Portfolio</h1>
      </div>

      {/* Grid with extra mobile improvements */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 mt-10">
        {cardItem.map(({ id, logo, name, project, source, video }) => (
          <div
            key={id}
            className="border border-gray-200 shadow-xl rounded-xl p-5 
                       bg-white/80 backdrop-blur 
                       hover:shadow-2xl hover:-translate-y-2 
                       transition-all duration-300 
                       flex flex-col items-center"
          >
            {/* IMAGE */}
            <img
              src={logo}
              className="w-20 h-20 md:w-24 md:h-24 rounded-full shadow border object-cover"
              alt={name}
            />

            {/* TEXT */}
            <div className="text-center mt-4">
              <h2 className="text-lg md:text-xl font-bold text-gray-900">
                {name}
              </h2>
              <p className="text-gray-600 text-sm md:text-base font-medium mt-1">
                {project}
              </p>
            </div>

            {/* BUTTONS */}
            <div className="mt-6 w-full space-y-3">
              <a
                href={source}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center bg-green-600 text-white py-2 rounded-lg shadow 
                           hover:bg-green-700 transition text-sm md:text-base"
              >
                Source Code
              </a>

              {video ? (
                <a
                  href={video}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center bg-blue-600 text-white py-2 rounded-lg shadow 
                             hover:bg-blue-700 transition text-sm md:text-base"
                >
                  Live Demo
                </a>
              ) : (
                <button
                  disabled
                  className="block w-full bg-gray-400 text-white py-2 rounded-lg cursor-not-allowed text-sm md:text-base"
                >
                  No Demo
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PortFolio;
