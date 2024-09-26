import Project from "../components/project";
import "../styles/style.css";

const projectData = [
  {
    title: "First Portforlio",
    image: "/images/babiesfirstport.png",
    projectLink: "",
    githubLink: "",
  },
  {
    title: "Employee Payroll",
    image: "/images/employee.png",
    projectLink: "",
    githubLink: "",
  },
  {
    title: "ONline",
    image: "/images/Online.png",
    projectLink: "https://online-9xx1.onrender.com/",
    githubLink: "https://github.com/BunggoyLearn/ONline",
  },
  {
    title: "Whatcha-thinkin",
    image: "/images/Whatthink.png",
    projectLink: "https://jordangwiz.github.io/Whatcha-Thinkin/",
    githubLink: "https://github.com/JordanGWiz/Whatcha-Thinkin",
  },
];


const Portfolio = () => {
  return (
    <div className="portfolioCardContainer">
      <h1 className="portfolioCardTitle">Portfolio</h1>
      <div className="portfolioCustomCard">
        {projectData.map((project, index) => (
          <Project
            key={index}
            title={project.title}
            image={project.image}
            projectLink={project.projectLink}
            githubLink={project.githubLink}
          />
        ))}
      </div>
    </div>
  );
};
export default Portfolio;