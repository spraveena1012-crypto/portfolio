export default function ResumePage() {
  return (
    <div className="min-h-screen bg-gray-950 text-white p-6">
      <div className="max-w-6xl mx-auto">

        {/* HEADER */}
        <div className="bg-gray-900 rounded-3xl p-10 shadow-lg border border-gray-800">
          <h1 className="text-5xl font-bold">Praveena S</h1>
          <h2 className="text-2xl text-blue-400 mt-2">Web App Developer</h2>

          <p className="text-gray-300 mt-5 max-w-3xl leading-relaxed">
            Passionate Web Developer skilled in building modern, responsive,
            and high-performance web applications using HTML, CSS, JavaScript.
          </p>

          <div className="mt-6 flex flex-wrap gap-6 text-gray-300">
            <p>📍 Gobichettipalayam, Erode, Tamil Nadu</p>
            <p>📧 s.praveena1012@gmail.com</p>
          </div>
        </div>

        {/* MAIN GRID */}
        <div className="grid lg:grid-cols-3 gap-8 mt-8">

          {/* LEFT */}
          <div className="space-y-8">

            <div className="bg-gray-900 p-6 rounded-3xl border border-gray-800">
              <h3 className="text-2xl font-bold text-blue-400 mb-4">Skills</h3>
              <ul className="space-y-2 text-gray-300">
                <li>HTML</li>
                <li>JavaScript</li>
                <li>CSS</li>
                <li>c,c++,python</li>
              </ul>
            </div>

            <div className="bg-gray-900 p-6 rounded-3xl border border-gray-800">
              <h3 className="text-2xl font-bold text-blue-400 mb-4">Education</h3>
              <p className="font-semibold">B.E Computer Science Engineering</p>
              <p className="text-gray-400">
                KPR Institute of Engineering and Technology,Coimbatore.
              </p>
            </div>

            <div className="bg-gray-900 p-6 rounded-3xl border border-gray-800">
              <h3 className="text-2xl font-bold text-blue-400 mb-4">Languages</h3>
              <p className="text-gray-300">English, Tamil</p>
            </div>

          </div>

          {/* RIGHT */}
          <div className="lg:col-span-2 space-y-8">

            {/* ABOUT */}
            <div className="bg-gray-900 p-8 rounded-3xl border border-gray-800">
              <h3 className="text-2xl font-bold text-blue-400 mb-4">About Me</h3>
              <p className="text-gray-300 leading-relaxed">
                I am a passionate Web Developer skilled in HTML, CSS, and JavaScript, focused on building responsive, modern, and user-friendly websites. I enjoy creating clean and structured web pages with good design and functionality. I am continuously improving my skills in frontend development and aiming to build real-world projects that provide a smooth user experience.
              </p>
            </div>

            {/* PROJECTS */}
            <div className="bg-gray-900 p-8 rounded-3xl border border-gray-800">
              <h3 className="text-2xl font-bold text-blue-400 mb-6">Projects</h3>

              <div className="space-y-4 text-gray-300">
                <div>
                  <h4 className="text-white font-bold">Portfolio Website</h4>
                  <p>Built using HTML,CSS and JAVASCRIPT.
                    Developed a responsive personal portfolio website using HTML, CSS, and JavaScript to showcase skills, projects, and achievements. Designed a clean and user-friendly interface with responsive layouts to ensure a seamless experience across different devices.
                  </p>
                </div>

                <div>
                  <h4 className="text-white font-bold">To-Do App</h4>
                  <p>CRUD functionality with local storage.
                    Built an interactive To-Do List application using HTML, CSS, and JavaScript that allows users to add, edit, delete, and manage tasks efficiently. Implemented Local Storage to save tasks and provide a smooth user experience across browser sessions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* FULL WIDTH CONTACT SECTION */}
        <div className="mt-10 bg-gradient-to-r from-blue-700 to-indigo-700 p-10 rounded-3xl text-center">

          <h3 className="text-3xl font-bold">Contact Me</h3>

          <div className="mt-6 space-y-4 text-lg">

            <p>📧 s.praveena1012@gmail.com</p>

            {/* LinkedIn */}
            <p>
              🔗 LinkedIn:{" "}
              <a
                href="https://www.linkedin.com/in/praveena-s-selva-kumar-m-673896382?utm_source=share_via&utm_content=profile&utm_medium=member_android"
                target="_blank"
                className="text-white underline hover:text-gray-200"
              >
                linkedin.com/in/praveena
              </a>
            </p>

            {/* GitHub */}
            <p>
              💻 GitHub:{" "}
              <a
                href="https://github.com/spraveena1012-crypto"
                target="_blank"
                className="text-white underline hover:text-gray-200"
              >
                github.com/praveena
              </a>
            </p>
          </div>

          <button className="mt-6 bg-white text-blue-700 px-6 py-3 rounded-xl font-bold hover:scale-105 transition">
            Contact Me
          </button>

        </div>

      </div>
    </div>
  );
}