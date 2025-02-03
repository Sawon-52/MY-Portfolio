import CustomCursor from "@/components/CustomCursor/CustomCursor";
import Hero from "@/components/sections/Hero/Hero";
import Navber from "@/components/sections/navber/Navber";
import Stats from "@/components/sections/Stats/Stats";
import Title from "@/components/sections/Title/Title";

export default function Home() {
  return (
    <>
      <CustomCursor />

      <div className="">
        <nav className="">
          <Navber />
        </nav>
        <main className="min-h-screen ">
          {/* hero section */}
          <section className="max-w-screen-lg mx-auto">
            <Hero />
          </section>

          {/* About me section */}
          <section className="max-w-screen-lg mx-auto">
            <Title subtitle="Introduction" maintitle="About Me" />
          </section>
        </main>
      </div>
    </>
  );
}
