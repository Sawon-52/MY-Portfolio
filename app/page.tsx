import CustomCursor from "@/app/components/CustomCursor/CustomCursor";
import Hero from "@/app/components/sections/Hero/Hero";
import Navber from "@/app/components/sections/navber/Navber";
import Title from "@/app/components/sections/Title/Title";
import About from "./components/sections/About/About";

export default function Home() {
  return (
    <>
      <CustomCursor />

      <div className="">
        <nav className="">
          <Navber />
        </nav>
        <main className="min-h-screen p-5 lg:p-0">
          {/* hero section */}
          <section className="max-w-screen-lg mx-auto">
            <Hero />
          </section>

          {/* About me section */}
          <section className="max-w-screen-lg mx-auto">
            <Title subtitle="Introduction" maintitle="About Me" />
            <About />
          </section>
        </main>
      </div>
    </>
  );
}
