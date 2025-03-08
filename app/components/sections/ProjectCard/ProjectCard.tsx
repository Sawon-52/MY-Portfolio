import Link from "next/link";

interface ProjectCardProps {
  title: string;
  image: string;
  features: string[];
  technologies: string[];
  liveLink?: string;
  githubLink: string;
}

const ProjectCard = ({ title, image, features, technologies, liveLink = "", githubLink }: ProjectCardProps) => {
  return (
    <>
      <div className="relative rounded-lg  cursor-pointer bg-white/10 backdrop-blur-md  shadow-lg  hover:shadow-xl transition-shadow duration-300 text-primary-color-light group overflow-hidden ">
        {/* Background Image with Blur and V-shape */}
        <div className="absolute inset-0 z-0 transition-all duration-400 ease-in group-hover:blur-none blur-md clip-path-polygon">
          <div className="absolute inset-y-0 right-0 w-1/2 bg-cover bg-center" style={{ backgroundImage: `url(${image})` }}></div>
        </div>

        {/* Content Overlay */}
        <div className="relative z-10 flex flex-col items-start justify-between  p-6 text-left text-primary-color-light dark:text-off-white-color h-full">
          <h3 className="text-xl font-semibold mb-2 dark:bg-primary-color-light dark:bg-opacity-40 dark:p-3 dark: rounded-lg">{title}</h3>
          <div className="mb-4">
            <ul className="list-disc list-inside /80">
              {features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>
          <div className="mb-4">
            <div className="flex flex-wrap gap-2">
              {technologies.map((tech, index) => (
                <span key={index} className="text-white px-3 py-1 rounded-md text-sm bg-gradient-to-r from-primary-color to-secondary-color">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="flex gap-4">
            {liveLink === "" ? (
              " "
            ) : (
              <Link href={liveLink} target="_blank" className="text-center border text-primary-color-light border-primary-color p-2 px-3 rounded-sm bg-purple-300 transition-colors dark:hover:text-secondary-color">
                Live
              </Link>
            )}

            <Link href={githubLink} target="_blank" className="text-center border text-primary-color-light border-primary-color p-2 px-3 rounded-sm bg-green-300 transition-colors dark:hover:text-secondary-color">
              Code
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectCard;
