import Link from "next/link";

export default function ResumePage() {
  return (
    <main className="container">

      {/* Hero Section */}
      <section className="card profile">
        <img
          src="praveena.png"
          alt="Praveena"
          className="profile-img"
        />

        <div>
          <h1>Praveena S</h1>
          <h3>Web App Developer</h3>

          <p>
            Passionate Web Developer with strong knowledge of HTML, CSS,
            JavaScript, and Bootstrap. Dedicated to creating responsive,
            user-friendly, and modern web applications while continuously
            learning new technologies and improving development skills.
          </p>
        </div>
      </section>

      {/* Skills & About */}
      <section className="grid">
        <div className="card skills">
          <h2>Skills</h2>

          <div className="skill-tags">
            <span className="skill-html">HTML</span>
            <span className="skill-css">CSS</span>
            <span className="skill-js">JavaScript</span>
            <span className="skill-bootstrap">Bootstrap</span>
          </div>
        </div>

        <div className="card about">
          <h2>About Me</h2>

          <p>
            Enthusiastic and detail-oriented Web Developer focused on building
            responsive websites and interactive user interfaces. Committed to
            delivering high-quality solutions and enhancing user experience.
          </p>
        </div>
      </section>

      {/* Education */}
      <section className="grid">
        <div className="card education">
          <h2>Education</h2>

          <h3>KPRIET</h3>
          <p>B.E Computer Science and Engineering</p>

          <h4>📍 KPR Institute of Engineering and Technology (KPRIET)</h4>

          <pre>
Arasur,
Avinashi Road,
Coimbatore – 641407,
Tamil Nadu,
India.
          </pre>
        </div>
      </section>

      {/* Projects */}
      <div className="card projects">
        <h2>Projects</h2>

        <div className="project-cards">

          <Link href="/projects/counter" className="project-card">
            <h3>🔢 Counter Application</h3>

            <p>
              Developed a simple and interactive counter application using
              JavaScript. Users can increase, decrease, and reset the counter
              value through responsive controls.
            </p>

            <button className="project-btn">
              View Details
            </button>
          </Link>

          <Link href="/projects/todo" className="project-card">
            <h3>📝 To-Do List Application</h3>

            <p>
              Created a task management application that allows users to add
              and delete tasks efficiently.
            </p>

            <button className="project-btn">
              View Details
            </button>
          </Link>

          <Link href="/projects/filter" className="project-card">
            <h3>🔍 Filter Application</h3>

            <p>
              Built a filtering application that enables users to search and
              filter items instantly based on keywords.
            </p>

            <button className="project-btn">
              View Details
            </button>
          </Link>

        </div>
      </div>

      {/* Contact */}
      <section className="card contact">
        <h2>Contact Information</h2>

        <p>📧 s.praveena1012@gmail.com</p>

        <p>
          💼 LinkedIn:
          <br />
          <a
            href="https://linkedin.com/in/praveena-s-selva-kumar-m-673896382"
            target="_blank"
            rel="noopener noreferrer"
          >
            linkedin.com/in/praveena-s-selva-kumar-m-673896382
          </a>
        </p>

        <p>
          💻 GitHub:
          <br />
          <a
            href="https://github.com/spraveena1012-crypto"
            target="_blank"
            rel="noopener noreferrer"
          >
            github.com/spraveena1012-crypto
          </a>
        </p>
      </section>

 <section>

<div className="card">

<h2>Introduction Video</h2>

<video>

width="100%"

controls

className="portfolio-video"

< source src="/sbs.mp4" type="video/mp4" />

Your browser does not support the video tag.

</video>

</div>


</section>

    </main>
  );
}