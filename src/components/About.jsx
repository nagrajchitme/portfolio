export default function About() {
  return (
    <div
      name="About"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-20 leading-relaxed"
    >
      {/* PAGE TITLE */}
      <h1 className="text-4xl font-bold mb-6 text-gray-900">About Me</h1>

      {/* INTRO */}
      <p className="text-lg text-gray-700">
        Hi 👋, I’m <strong>Nagraj Chitme</strong> — a passionate{" "}
        <strong>Full-Stack & Mobile App Developer</strong> who loves turning
        ideas into high-quality digital experiences. With a strong foundation in{" "}
        <strong>Java, Spring Boot, SQL, React, and React Native</strong>, I
        specialize in building scalable backend systems and intuitive mobile
        applications.
        <br />
        <br />I enjoy solving real-world problems, designing user-focused
        solutions, and continuously improving my craft through learning and
        experimentation.
      </p>

      {/* EDUCATION */}
      <section className="mt-10">
        <h2 className="text-green-600 font-semibold text-2xl mb-3">
          Education
        </h2>

        <ul className="text-gray-700 space-y-2">
          <li>
            <strong>MCA (Master of Computer Applications)</strong> —
            Visvesvaraya Technological University, Regional Campus, Kalaburagi
            (2024)
          </li>
          <li>
            <strong>Bachelor of Science (Life Sciences)</strong> — Gulbarga
            University (2022)
          </li>
        </ul>
      </section>

      {/* SKILLS */}
      <section className="mt-10">
        <h2 className="text-green-600 font-semibold text-2xl mb-5">
          Skills & Expertise
        </h2>

        <div className="grid md:grid-cols-2 gap-10 text-gray-700">
          {/* Development */}
          <div>
            <h3 className="font-semibold text-lg text-gray-900 mb-2">
              Full-Stack & Mobile Development
            </h3>
            <ul className="list-disc list-inside space-y-1">
              <li>React Native (Expo)</li>
              <li>React.js</li>
              <li>JavaScript (ES6+)</li>
              <li>HTML5, CSS3, Tailwind CSS</li>
              <li>Redux, Zustand</li>
            </ul>
          </div>

          {/* Backend */}
          <div>
            <h3 className="font-semibold text-lg text-gray-900 mb-2">
              Backend Development
            </h3>
            <ul className="list-disc list-inside space-y-1">
              <li>Java (J2SE & J2EE)</li>
              <li>Spring Boot (REST APIs, JPA, MVC)</li>
              <li>Hibernate, JDBC</li>
              <li>Node.js (Basics)</li>
            </ul>
          </div>

          {/* Databases */}
          <div>
            <h3 className="font-semibold text-lg text-gray-900 mb-2">
              Databases
            </h3>
            <ul className="list-disc list-inside space-y-1">
              <li>MySQL</li>
              <li>MongoDB</li>
              <li>Firebase (Firestore, Authentication)</li>
            </ul>
          </div>

          {/* Tools */}
          <div>
            <h3 className="font-semibold text-lg text-gray-900 mb-2">
              Tools & Platforms
            </h3>
            <ul className="list-disc list-inside space-y-1">
              <li>Git & GitHub</li>
              <li>VS Code, Intellij, Eclipse</li>
              <li>Android Studio</li>
              <li>Postman</li>
            </ul>
          </div>

          {/* Other */}
          <div>
            <h3 className="font-semibold text-lg text-gray-900 mb-2">
              Additional Skills
            </h3>
            <ul className="list-disc list-inside space-y-1">
              <li>Microsoft Office (Word, Excel, PowerPoint)</li>
              <li>UI/UX Fundamentals</li>
            </ul>
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}

      {/* ABOUT GOYAAH */}
      <section className="mt-16">
        <h1 className="text-4xl font-bold mb-4">Goyaah</h1>

        <p className="text-gray-700 text-lg leading-relaxed">
          <strong>Goyaah</strong> is a next-generation Indian mobility startup
          founded by
          <strong> Nagraj Chitme</strong> — who currently serves as the
          <strong> Founder, CEO, and Full-Stack Mobile Developer</strong>.
          Goyaah aims to build India’s most unified mobility ecosystem by
          bringing
          <strong>
            {" "}
            every type of vehicle and transport service into one single
            platform.
          </strong>
        </p>

        <p className="text-gray-700 text-lg leading-relaxed mt-4">
          Whether it’s{" "}
          <strong>
            self-drive vehicles, cab booking, hiring a professional driver, or
            moving goods with trucks
          </strong>{" "}
          — Goyaah connects people, vehicles, and logistics through one powerful
          app, eliminating the need for multiple fragmented services.
        </p>

        {/* What Goyaah Solves */}
        <div className="mt-10 space-y-4 text-gray-700">
          <h3 className="text-2xl font-semibold">✨ What Goyaah Solves</h3>
          <ul className="list-disc list-inside space-y-1">
            <li>Multiple apps required for cab, rental & goods transport</li>
            <li>Unverified drivers and safety concerns for users</li>
            <li>Inconsistent and non-transparent pricing</li>
            <li>Lack of real-time tracking & unified user experience</li>
            <li>
              No platform supporting both personal and commercial mobility
            </li>
          </ul>
        </div>

        {/* How Goyaah Works */}
        <div className="mt-10 space-y-4 text-gray-700">
          <h3 className="text-2xl font-semibold">⚙️ How Goyaah Works</h3>
          <ul className="list-decimal list-inside space-y-3">
            <li>
              <strong>User selects the service:</strong> Self-Drive, Cab,
              Driver, or Goods Transport.
            </li>
            <li>
              <strong>Choose vehicle / driver:</strong> View verified, rated,
              and available options.
            </li>
            <li>
              <strong>Enter pickup & drop details:</strong> Goyaah calculates
              transparent pricing.
            </li>
            <li>
              <strong>Track in real time:</strong> Live GPS tracking with safety
              monitoring.
            </li>
            <li>
              <strong>Pay securely:</strong> Multiple payment options & instant
              digital receipts.
            </li>
          </ul>
        </div>

        {/* Vision */}
        <div className="mt-10 text-gray-700">
          <h3 className="text-2xl font-semibold">🚀 Vision</h3>
          <p className="mt-2">
            To become India’s most trusted mobility super-app, empowering
            people, drivers, and businesses with seamless transportation for
            daily life, travel, and logistics.
          </p>
        </div>

        {/* Mission */}
        <div className="mt-10 text-gray-700">
          <h3 className="text-2xl font-semibold">🎯 Mission</h3>
          <p className="mt-2">
            To simplify urban and rural mobility by offering a single platform
            where users can book any type of vehicle anytime — safely,
            affordably, and quickly.
          </p>
        </div>

        {/* Company Values */}
        <div className="mt-10 text-gray-700">
          <h3 className="text-2xl font-semibold">💡 Core Values</h3>
          <ul className="list-disc list-inside space-y-1 mt-2">
            <li>Safety first — verified vehicles & drivers</li>
            <li>Reliability — transparent pricing & real-time tracking</li>
            <li>Innovation — building future-ready mobility solutions</li>
            <li>Accessibility — mobility for every person & every city</li>
          </ul>
        </div>

        {/* Your Role */}
        <div className="mt-10 text-gray-700">
          <h3 className="text-2xl font-semibold">👨‍💻 My Role at Goyaah</h3>
          <p className="mt-2 leading-relaxed">
            As the{" "}
            <strong>Founder, CEO, and Full-Stack Mobile Developer</strong> of
            Goyaah, I lead the complete product lifecycle — from idea, design,
            and engineering to backend architecture and mobile app development.
            I handle:
          </p>

          <ul className="list-disc list-inside space-y-1 mt-2">
            <li>Mobile App Development (React Native + Expo)</li>
            <li>Backend Engineering (Java Spring Boot + MySQL)</li>
            <li>UI/UX design and user experience flow</li>
            <li>Product strategy and feature planning</li>
            <li>Business operations, vision, and team building</li>
            <li>Testing, deployment, and performance optimization</li>
          </ul>
        </div>

        {/* Future Goals */}
        <div className="mt-10 text-gray-700">
          <h3 className="text-2xl font-semibold">🌟 Future Goals</h3>
          <ul className="list-disc list-inside space-y-1">
            <li>Expand to all major cities in India</li>
            <li>
              Introduce EV (Electric Vehicle) rentals & charging assistance
            </li>
            <li>Launch subscription plans for self-drive vehicles</li>
            <li>Integrate AI for smart ride suggestions & pricing</li>
            <li>
              Partner with logistics companies for nationwide goods transport
            </li>
          </ul>
        </div>
      </section>

      <section className="mt-10">
        {/* FirstCry */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold">
            FirstCry Pvt Ltd (Pune) —{" "}
            <span className="text-gray-700">Sales Associate</span>
          </h3>
          <ul className="list-disc list-inside mt-2 text-gray-700 space-y-1">
            <li>Delivered exceptional customer support and service.</li>
            <li>
              Promoted products, achieved sales targets, and guided customers.
            </li>
            <li>Maintained store organization & visual standards.</li>
            <li>Collaborated with teammates to improve store performance.</li>
          </ul>
        </div>

        {/* Priacc Innovations */}
        <div>
          <h3 className="text-xl font-semibold">
            Priacc Innovations Pvt Ltd (Hyderabad) —{" "}
            <span className="text-gray-700">Associate Software Developer</span>
          </h3>
          <ul className="list-disc list-inside mt-2 text-gray-700 space-y-1">
            <li>
              Developed full-stack applications using Spring Boot, React, and
              MySQL.
            </li>
            <li>
              Designed scalable REST APIs with secure authentication (JWT,
              OAuth2).
            </li>
            <li>Optimized apps for speed, performance, and scalability.</li>
            <li>Participated in Agile sprints and code reviews.</li>
            <li>
              Debugged complex production issues and documented solutions.
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}
