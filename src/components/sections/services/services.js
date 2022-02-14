import { Section } from '/src/components/section/section';
import { CardTecnology } from '/src/components/cards/card-tecnology/card-tecnology';

import './services.css';

export const Services = () => {
  return (
    <section id="services" className="section">
      <div className="container">
        <Section title="Services">
          <h3>Services I offer to my clients</h3>
        </Section >
        <div className="services">
          <CardTecnology 
            icon="mobile-alt"
            iconSize="3x"
            className="mobile"
            title="Full Responsive"
            text="Your site will display properly on any device, including desktop computers, tablets and mobile phones."
          />
          <CardTecnology 
            icon="pencil-ruler"
            iconSize="3x"
            className="ruler"
            title="Creative Design"
            text="A good and attractive web design helps you keep your leads on your site, which is the digital face of your business."
          />
          <CardTecnology 
            icon="code"
            iconSize="3x"
            className="code"
            title="Development"
            text="I know the importance of web design and can help you create a website you’ll love."
          />
          <CardTecnology 
            icon="thumbs-up"
            iconSize="3x"
            className="thumbs-up"
            title="Social Media Integration"
            text="There are a lot of social platforms out there, and you should promote your presence on them on your website"
          />
          <CardTecnology 
            icon="tachometer-alt"
            iconSize="3x"
            className="tachometer"
            title="Performance"
            text="Retaining users is crucial to improving conversions.High-performing sites engage and retain users"
          />
          <CardTecnology 
            icon="crosshairs"
            iconSize="3x"
            className="crosshair"
            title="SEO"
            text="I will optimize your site with intelligent Search Engine Optimization strategy to generate leads."
          />
        </div>
      </div>
    </section>
  );
};