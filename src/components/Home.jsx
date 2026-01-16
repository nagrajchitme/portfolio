import pic from "../../public/Raj.jpg";
import { ReactTyped } from "react-typed";

export default function Home() {
  return (
    <div
      name="Home"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-28"
    >
      <div className="flex flex-col md:flex-row items-center gap-10">
        {/* IMAGE SECTION */}
        <div className="md:w-1/2 flex justify-center order-1 md:order-1">
          <img
            src={pic}
            className="rounded-full shadow-xl border-4 border-gray-200 md:w-[380px] md:h-[380px] w-[260px] h-[260px] object-cover"
            alt="Nagraj Chitme"
          />
        </div>

        {/* TEXT SECTION */}
        <div className="md:w-1/2 order-2 md:order-2 mt-8 md:mt-0">
          <span className="text-xl text-gray-600">Welcome 👋</span>

          <div className="flex flex-wrap items-center text-3xl md:text-5xl font-bold mt-2">
            <h1 className="mr-2">Hi, I'm</h1>
            <ReactTyped
              className="text-red-600"
              strings={[
                "Nagraj Chitme",
                "a Full-Stack Developer",
                "a Mobile App Developer",
                "a React Native Engineer",
              ]}
              typeSpeed={40}
              backSpeed={50}
              loop
            />
          </div>

          <p className="text-gray-700 mt-5 text-base md:text-lg leading-relaxed text-justify">
            I'm a <strong>Full-Stack Mobile App Developer</strong> specializing
            in building fast, scalable, and user-friendly applications using
            <strong>
              {" "}
              React Native, React.js, Java, Spring Boot, and MySQL
            </strong>
            . I focus on writing clean code, creating intuitive UI/UX, and
            delivering high-quality digital solutions that solve real-world
            problems.
          </p>

          {/* CTA Buttons */}
          <div className="mt-8 flex space-x-4">
            <a
              href="#About"
              className="bg-red-600 text-white px-6 py-2 rounded-lg shadow hover:bg-red-700 transition"
            >
              About Me
            </a>

            <a
              href="mailto:nagrajchitme04@gmail.com"
              className="border px-6 py-2 rounded-lg shadow hover:bg-gray-100 transition"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
