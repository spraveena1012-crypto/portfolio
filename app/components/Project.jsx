export default function Projects() {
  return (
    <div className="bg-gray-900 p-8 rounded-3xl border border-gray-800">
      <h3 className="text-2xl font-bold text-blue-400 mb-6">
        Projects
      </h3>

      <div className="space-y-6 text-gray-300">

        <div>
          <h4 className="text-xl font-bold text-white">
            Portfolio Website
          </h4>
          <p className="mt-2">
            Developed a responsive personal portfolio website using HTML,
            CSS, and JavaScript to showcase technical skills, projects,
            certifications, and achievements. Designed a modern and
            user-friendly interface with responsive layouts to ensure
            seamless performance across desktops, tablets, and mobile devices.
          </p>
        </div>

        <div>
          <h4 className="text-xl font-bold text-white">
            To-Do List Application
          </h4>
          <p className="mt-2">
            Built an interactive task management application using HTML,
            CSS, and JavaScript. Implemented features such as adding,
            editing, deleting, and organizing tasks with Local Storage
            integration to preserve data and improve user experience.
          </p>
        </div>

      </div>
    </div>
  );
}