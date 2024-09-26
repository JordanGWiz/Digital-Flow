import "../styles/style.css";

export default function About() {
  const profileImageSrc = "/images/self.jpg";
  const profileImageAlt = "Image of self";
  const aboutTitle = "About Me:";
  const aboutParagraphs = [
    "Hi, I’m Jordan! A passionate full-stack developer honing my skills through a coding bootcamp. Fueled by curiosity and a love for problem-solving, I’m driven to blend creativity with technical expertise, crafting seamless and engaging digital experiences.",
    "When I’m not coding, you’ll likely find me immersed in a game of Dungeons and Dragons, sketching new art pieces, or creating music. These hobbies not only allow me to unwind but also inspire fresh ideas and perspectives that I bring to my work in technology.",
  ];

  return (
    <div className="about-container page-container">
      <div className="about-content">
        <div className="self-image">
          <img
            src={profileImageSrc}
            alt={profileImageAlt}
            className="self-img"
          />
        </div>
        <div className="about-text">
          <h1>{aboutTitle}</h1>
          {aboutParagraphs.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </div>
    </div>
  );
}
