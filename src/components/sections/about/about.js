import { Icon } from '/src/components/icon/icon';

import '/src/section.css';

export const About = () => {
  return (
    <section id="about" className="section">
      <div className="container">
        <div className="about">
          <h2>About me</h2>
          <div>
            <h2>I'm Toni López, Web Developer / Engineering Physicst.</h2>
            <p>I am a Full Stack developer with experience building websites and web applications. I specialize in JavaScript, and have professional experience working with React.</p>
            <p>I am always seeking to improve my skills and continue growing professionally in order to make valuable contributions at the working group I am part of. Therefore I use the modern development workflow with CodeStream in order to increase productivity and improve communication inside our development team.</p>
          </div>
          <a href="#">
            <Icon icon="file-download" />
            <span>Download CV</span>
          </a>
        </div>
        <div className="skills"></div>
      </div>
    </section>
  );
};