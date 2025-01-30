import java from "../../public/java.png";
import python from "../../public/python.webp";
import mongoDB from "../../public/mongodb.jpg";
import reactjs from "../../public/reactjs.png";
import mysql from "../../public/mysql.jpg";
import springBoot from "../../public/springBoot.jpg";

function PortFolio() {
  const cardItem = [
    {
      id: 1,
      logo: "html.png",
      name: "HTML",
      project: "Election Pomplet",
      source: "https://github.com/nagrajchitme/Election.git",
      video: "https://comforting-croissant-fdfc80.netlify.app",
    },
    {
      id: 2,
      logo: "css.jpg",
      name: "CSS",
      project: "Login-page",
      source: "https://github.com/nagrajchitme/login-page.git",
      video: "https://dainty-meerkat-99ad3d.netlify.app",
    },
    {
      id: 3,
      logo: "javascript.png",
      name: "JavaScript",
      project: "Tik-Tax-Toe-Game",
      source: "https://github.com/nagrajchitme/Tic-Tac-Toe-game.git",
      video: "https://effervescent-praline-caaecd.netlify.app",
    },
    {
      id: 4,
      logo: reactjs,
      name: "ReactJS",
      project: "PORTFOLIO WEBSITE",
      source: "",
      video: "https://cheerful-sable-71e1ba.netlify.app",
    },

    {
      id: 5,
      logo: java,
      name: "Java",
      project: "DATA INTEGRITY AUDIT SCHEME BASED ON QUAD MERKLE AND TREE",
      source: ": https://monumental-dolphin-8e3999.netlify.app",
      video: "https://coruscating-fudge-710307.netlify.app",
    },
    {
      id: 6,
      logo: springBoot,
      name: "Spring Boot",
      project: "BANKING MANGEMENT SYSTEM",
      source: "https://github.com/nagrajchitme/BankManagementSystem.git",
      video: "https://imaginative-salmiakki-2a2114.netlify.app",
    },
    {
      id: 7,
      logo: python,
      name: "Python",
      project: "WHAT’S APP CHAT ANALYSIS",
      source: "https://github.com/nagrajchitme/whatsapp-chat-analysis.git",
      video: "https://monumental-dolphin-8e3999.netlify.app",
    },
    {
      id: 8,
      logo: mongoDB,
      name: "MongoDB",
      project: "Employee MANGEMENT SYSTEM",
      source: "https://github.com/nagrajchitme/hospital-management-system.git",
      video: "https://cerulean-scone-de7f05.netlify.app",
    },
    {
      id: 9,
      logo: mysql,
      name: "MYSQL",
      project: "STUDENT MANGEMENT_MYSQL",
      source: "https://github.com/nagrajchitme/student-management_mysql.git",
      video: ": https://melodic-stroopwafel-8565de.netlify.app",
    },
  ];
  return (
    <div
      name="Portfolio"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 mt-10"
    >
      <div>
        <h1 className="text-3xl font-bold mb-5">PortFolio</h1>
        <span className=" underline font-semibold">Project works</span>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-3 my-5">
          {cardItem.map(({ id, logo, name, project, source, video }) => (
            <div
              className="md:w-[300px] md:h-[300px] border-[2px] rounded-lg shadow-lg p-1 cursor-pointer hover:scale-110 duration-300"
              key={id}
            >
              <img
                src={logo}
                className="w-[120px] h-[120px] p-1 rounded-full border-[2px]"
                alt=""
              />
              <div>
                <div className="px-2 font-bold text-xl mb-2">{name}</div>
                <p className="px-2 text-gray-900 font-bold">{project}</p>
                <p className="px-2 text-gray-700"></p>
              </div>
              <div className=" px-6 py-4 space-x-3 justify-around">
                <button className="bg-green-500 hover:bg-green-700 text-white font-bold px-4 py-2 rounded-2xl">
                  <a href={source}>Source code</a>
                </button>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold px-4 py-2 rounded-2xl">
                  <a href={video}>Video</a>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PortFolio;
