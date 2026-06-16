import Header from "./components/Header";
import About from "./components/About";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Languages from "./components/Languages";
import Project from "./components/Project";
import Contact from "./components/Contact";

export default function Page() {
  return (
    <div className="min-h-screen bg-gray-950 text-white p-6">
      <div className="max-w-6xl mx-auto">

        <Header />
        <About />

        <div className="grid lg:grid-cols-3 gap-8 mt-8">

          <div className="space-y-8">
            <Skills />
            <Education />
            <Languages />
          </div>

          <div className="lg:col-span-2 space-y-8">
            <About />
            <Project />
          </div>

        </div>

        <Contact />

      </div>
    </div>
  );
}