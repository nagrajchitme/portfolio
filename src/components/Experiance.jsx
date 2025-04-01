import html from "../../public/html.png";
import css from "../../public/css.jpg";
import java from "../../public/java.png";
import javascript from "../../public/javascript.png";
import springBoot from "../../public/springBoot.jpg";
import MYSQL from "../../public/mysql.jpg";
import reactjs from "../../public/reactjs.png";

function Experiance() {
  const cardItem = [
    {
      id: 1,
      logo: html,
      name: "HTML",
    },
    {
      id: 2,
      logo: css,
      name: "CSS",
    },
    {
      id: 3,
      logo: javascript,
      name: "JavaScript",
    },
    {
      id: 4,
      logo: reactjs,
      name: "reactjs",
    },
    {
      id: 5,
      logo: java,
      name: "Java",
    },
    {
      id: 6,
      logo: springBoot,
      name: "Spring Boot",
    },
    {
      id: 7,
      logo: MYSQL,
      name: "MYSQL",
    },
  ];
  return (
    <div
      name="Experiance"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-16"
    >
      <div>
        <h1 className="text-3xl font-bold mb-5">Experiance</h1>
        <p className="  ">Accademic year Experiance</p>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-7 my-3">
          {cardItem.map(({ id, logo, name }) => (
            <div
              className=" flex flex-col items-center justify-center border-[2px] rounded-full md:w-[150px] md:h-[150px] shadow-md p-1 cursor-pointer hover:scale-110 duration-300"
              key={id}
            >
              <img src={logo} className="w-[100px] rounded-full" alt="" />
              <div>
                <div className="">{name}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Experiance;
