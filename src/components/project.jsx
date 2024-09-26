import "../styles/style.css";
import PropTypes from "prop-types";
import Card from "react-bootstrap/Card";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const CardLink = ({ href, icon: Icon, text }) => (
  <Card.Link
    className="portfolioLink"
    href={href}
    target="_blank"
    rel="noopener noreferrer"
  >
    <Icon /> {text}
  </Card.Link>
);

CardLink.propTypes = {
  href: PropTypes.string.isRequired,
  icon: PropTypes.elementType.isRequired,
  text: PropTypes.string.isRequired,
};

const Project = ({ title, image, projectLink, githubLink }) => (
  <div className="portfolioCardContainer">
    <Card
      className="portfolioCustomCard"
      style={{ width: "18rem", margin: "20px 0" }}
    >
      <Card.Img
        className="portfolioCardImage"
        variant="top"
        src={image}
        alt={title}
      />
      <Card.Body>
        <Card.Title className="portfolioCardTitle">{title}</Card.Title>
        <CardLink
          href={projectLink}
          icon={FaExternalLinkAlt}
          text="Project Link"
        />
        <CardLink href={githubLink} icon={FaGithub} text="GitHub" />
      </Card.Body>
    </Card>
  </div>
);

Project.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  projectLink: PropTypes.string.isRequired,
  githubLink: PropTypes.string.isRequired,
};

export default Project;
