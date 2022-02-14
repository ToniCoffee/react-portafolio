import { Section } from '/src/components/section/section';
import { CardTecnology } from '/src/components/cards/card-tecnology/card-tecnology';

import './skills.css';

export const Skills = () => {
  return (
    <section id="skills" className="section">
      <div className="container">
        <div className="skills">
          <Section title="My Skills" />
          <CardTecnology src="https://img.icons8.com/color/48/000000/mongodb.png" alt="MongoDB icon" text="MongoDB"/>
          <CardTecnology src="expressjs.svg" alt="Express.js icon" text="Express.js"/>
          <CardTecnology src="nodejs-1-logo.svg" alt="Node.js icon" text="Node.js"/>
          <CardTecnology src="next-js.svg" alt="Next.js icon" text="Next.js"/>
          <CardTecnology src="react.svg" alt="React.js icon" text="React.js"/>
          <CardTecnology src="JS.svg" alt="Javascript.js icon" text="Javascript"/>
          <CardTecnology src="tailwind-css.svg" alt="tailwind icon" text="Tailwind"/>
          <CardTecnology src="github.svg" alt="github icon" text="GitHub"/>
          <CardTecnology src="git.svg" alt="git icon" text="GIT"/>
        </div>
      </div>
    </section>
  );
}