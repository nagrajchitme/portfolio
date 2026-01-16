import html from "../../public/html.png";
import css from "../../public/css.jpg";
import java from "../../public/java.png";
import javascript from "../../public/javascript.png";
import springBoot from "../../public/springBoot.jpg";
import mysql from "../../public/mysql.jpg";
import reactjs from "../../public/reactjs.png";

export default function Experience() {
  const skills = [
    { id: 1, logo: html, name: "HTML5" },
    { id: 2, logo: css, name: "CSS3" },
    { id: 3, logo: javascript, name: "JavaScript" },
    { id: 4, logo: reactjs, name: "React.js" },
    { id: 5, logo: java, name: "Java" },
    { id: 6, logo: springBoot, name: "Spring Boot" },
    { id: 7, logo: mysql, name: "MySQL" },
  ];

  return (
    <div
      name="Experience"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-20"
    >
      {/* HEADER */}
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold mb-3">Experience & Skills</h1>
        <p className="text-gray-600 max-w-2xl mx-auto text-sm md:text-base">
          I have <strong>3+ years of hands-on experience</strong> working with
          modern web and backend technologies. Since 2022, I have been actively
          involved in{" "}
          <strong>
            freelancing, academic projects, and real-world application
            development
          </strong>
          .
        </p>
      </div>

      {/* SKILLS GRID */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
        {skills.map(({ id, logo, name }) => (
          <div
            key={id}
            className="flex flex-col items-center justify-center 
                       bg-white border border-gray-200 
                       rounded-xl p-4 shadow-md
                       hover:shadow-xl hover:-translate-y-1 
                       transition-all duration-300"
          >
            <img
              src={logo}
              alt={name}
              className="w-16 h-16 md:w-20 md:h-20 object-contain"
            />
            <p className="mt-3 font-semibold text-gray-800 text-sm md:text-base">
              {name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
