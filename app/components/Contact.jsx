export default function Contact() {
  return (
    <div className="mt-10 bg-gradient-to-r from-blue-700 to-indigo-700 p-10 rounded-3xl text-center">
      <h3 className="text-3xl font-bold">
        Contact Me
      </h3>
      <div className="mt-6 space-y-4 text-lg">

        <p>
          📧 s.praveena1012@gmail.com
        </p>

        <p>
          🔗 LinkedIn:
          <a
            href="https://www.linkedin.com/in/praveena-s-selva-kumar-m-673896382"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2 underline hover:text-gray-200"
          >
            linkedin.com/in/praveena
          </a>
        </p>

        <p>
          💻 GitHub:
          <a
            href="https://github.com/spraveena1012-crypto"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2 underline hover:text-gray-200"
          >
            github.com/praveena
          </a>
        </p>

      </div>

      <button className="mt-6 bg-white text-blue-700 px-6 py-3 rounded-xl font-bold hover:scale-105 transition">
        Contact Me
      </button>
    </div>
  );
}