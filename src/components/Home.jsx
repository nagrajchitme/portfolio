import pic from "../../public/Raj.jpg";
import { ReactTyped } from "react-typed";
import { FaJava } from "react-icons/fa";
import { SiSpringboot } from "react-icons/si";
import { SiMysql } from "react-icons/si";
import { FaReact } from "react-icons/fa";
function Home() {
  return (
    <>
      <div
        name="Home"
        className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-28"
      >
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2 mt-12 md:mt-24 space-y-2 order-2 md:order-1">
            <span className="text-xl">Welcome In My Page</span>
            <div className="flex space-x-1 text-2xl md:text-4xl">
              <h1>Hello, I'm A </h1>
              {/* <span >Developer</span> */}
              <ReactTyped
                className="text-red-700 font-bold"
                strings={["Developer", "Programmer", "Coder"]}
                typeSpeed={40}
                backSpeed={50}
                loop={true}
              />
            </div>
            <br />
            <p className="text-sm md:text-md text-justify">
              As a Full-Stack Mobile App Developer, I bring hands-on academic and project-based experience
in building scalable mobile and web applications. I am proficient in frontend and backend
development, RESTful API design, state management using Redux and Zustand,
and working with both relational and NoSQL databases.

            </p>
            <br />
            
          <div className="md:w-1/2 md:ml-48 md:mt-20 mt-8 order-1">
            <img
              src={pic}
              className="rounded-full md:w-[450px] md:h-[600px]"
              alt=""
            />
          </div>
        </div>
      </div>

    </>
  );
}

export default Home;
