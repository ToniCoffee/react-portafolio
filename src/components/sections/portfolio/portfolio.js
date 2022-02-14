import { Section } from '/src/components/section/section';
import { CardPortfolio } from '/src/components/cards/card-portfolio/card-portfolio';

import './portfolio.css';

export const Portfolio = () => {
  return (
    <section id="portfolio" className="section">
      <div className="container">
        <Section title="Portfolio">
          <h3>Here you can see the projects I have worked on.</h3>
        </Section >
        <div className="portfolio">
          <CardPortfolio 
            srcSet="Avo-store.jfif" 
            title="Avo-Store" 
            description="Web Application: Next.js, Tailwind."
            hrefWebsite="https://avocado-store-jgestradam-nd4yxxllv-jgestradam.vercel.app/"
            hrefRepository="https://github.com/jgestradam/Avo-store"
          />
          <CardPortfolio 
            srcSet="Petgram.jfif" 
            title="Petgram" 
            description="Web Application: React."
            hrefWebsite="https://avocado-store-jgestradam-nd4yxxllv-jgestradam.vercel.app/"
            hrefRepository="https://github.com/jgestradam/Avo-store"
          />
          <CardPortfolio 
            srcSet="Platzi-video.jfif" 
            title="Platzi Video" 
            description="Web Application: React, JS, SCSS."
            hrefWebsite="https://avocado-store-jgestradam-nd4yxxllv-jgestradam.vercel.app/"
            hrefRepository="https://github.com/jgestradam/Avo-store"
          />
          <CardPortfolio 
            srcSet="RickandMorty.jfif" 
            title="Rick And Morty Api" 
            description="Web Application: JS."
            hrefWebsite="https://avocado-store-jgestradam-nd4yxxllv-jgestradam.vercel.app/"
            hrefRepository="https://github.com/jgestradam/Avo-store"
          />
          <CardPortfolio 
            srcSet="Escuela-de-la-verdad-page-min.webp" 
            title="Escuela de la verdad page" 
            description="Landing Page: JS."
            hrefWebsite="https://avocado-store-jgestradam-nd4yxxllv-jgestradam.vercel.app/"
            hrefRepository="https://github.com/jgestradam/Avo-store"
          />
          <CardPortfolio 
            srcSet="Simon.jfif" 
            title="Simon says" 
            description="Web Application: JS."
            hrefWebsite="https://avocado-store-jgestradam-nd4yxxllv-jgestradam.vercel.app/"
            hrefRepository="https://github.com/jgestradam/Avo-store"
          />
          <CardPortfolio 
            srcSet="Blog.jfif" 
            title="Blog" 
            description="Landing Page: React."
            hrefWebsite="https://avocado-store-jgestradam-nd4yxxllv-jgestradam.vercel.app/"
            hrefRepository="https://github.com/jgestradam/Avo-store"
          />
          <CardPortfolio 
            srcSet="Batatabit-first-mobile.jfif" 
            title="Batatabit" 
            description="Website: HTML, CSS."
            hrefWebsite="https://avocado-store-jgestradam-nd4yxxllv-jgestradam.vercel.app/"
            hrefRepository="https://github.com/jgestradam/Avo-store"
          />
          <CardPortfolio 
            srcSet="CSS-Layout.jfif" 
            title="CSS Layout" 
            description="Landing Page: CSS"
            hrefWebsite="https://avocado-store-jgestradam-nd4yxxllv-jgestradam.vercel.app/"
            hrefRepository="https://github.com/jgestradam/Avo-store"
          />
        </div>
      </div>
    </section>
  );
};