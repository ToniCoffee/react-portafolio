import { Link } from '/src/components/link/link';
import { Section, Description } from '/src/components/section/section';

const paragraphs = [
  'I am a Full Stack developer with experience building websites and web applications. I specialize in JavaScript, and have professional experience working with React.',
  'I am always seeking to improve my skills and continue growing professionally in order to make valuable contributions at the working group I am part of. Therefore I use the modern development workflow with CodeStream in order to increase productivity and improve communication inside our development team.'
];

export const About = () => {
  return (
    <section id="about" className="section">
      <div className="container">
        <div className="about">
          <Section title="About me">
            <Description title="I'm Toni López, Web Developer / Engineering Physicst." paragraphs={paragraphs}/>
          </Section>
          <Link icon="file-download" iconSize="1x" text="Download CV" className="link"/>
        </div>
      </div>
    </section>
  );
};