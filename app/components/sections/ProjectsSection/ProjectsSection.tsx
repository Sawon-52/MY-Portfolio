import ProjectCard from "../ProjectCard/ProjectCard";
import projects from "@/public/Data/project.json";

const ProjectsSection = () => {
  return (
    <section className="" id="#project">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 rounded-xl ">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
