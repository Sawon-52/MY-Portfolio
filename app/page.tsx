// import CustomCursor from "@/app/components/CustomCursor/CustomCursor";
import Hero from "@/app/components/sections/Hero/Hero";
import Navber from "@/app/components/sections/navber/Navber";
import Title from "@/app/components/sections/Title/Title";
import About from "./components/sections/About/About";
import TechStack from "./components/sections/TechStack/TechStack";
import ProjectsSection from "./components/sections/ProjectsSection/ProjectsSection";
import Contact from "./components/sections/Contact/Contact";
import Footer from "./components/sections/Footer/Footer";
import ScrollToTopButton from "./components/ScrollToTopButton/ScrollToTopButton ";

export default function Home() {
  return (
    <>
      {/* <CustomCursor /> */}
      <ScrollToTopButton />

      <div className="">
        <nav className="px-2 md:px-0">
          <Navber />
        </nav>
        <main className="min-h-screen px-2 md:px-2 lg:px-0 flex flex-col gap-14">
          {/* hero section */}
          <section className="max-w-screen-lg mx-auto">
            <Hero />
          </section>

          {/* About me section */}
          <section className="max-w-screen-lg mx-auto" id="about">
            <Title maintitle="About Me" />
            <About />
          </section>

          {/* Skills section */}
          <section className="max-w-screen-lg mx-auto" id="skills">
            <Title maintitle="Tech Stack" />
            <TechStack />
          </section>

          {/* Project section */}
          <div className=" " id="projects">
            <section className="max-w-screen-lg mx-auto">
              <Title maintitle="Project" />
              <ProjectsSection />
            </section>
          </div>

          {/* Contact section */}

          <section className="max-w-screen-lg mx-auto" id="contact">
            <Title maintitle="Contact" />
            <Contact />
          </section>
        </main>

        <footer className="max-w-screen-lg mx-auto  mt-16">
          {/* Footer section */}
          <Footer />
        </footer>
      </div>
    </>
  );
}
