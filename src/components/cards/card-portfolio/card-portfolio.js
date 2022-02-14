import { Link } from '/src/components/link/link';

import './card-portfolio.css';

export const CardPortfolio = ({
  srcSet='',
  title='Default title',
  description='Default description',
  hrefWebsite='',
  hrefRepository=''
}) => {
  return (
    <div className="portfolio_item" data-sr-id="31">
      <picture>
        <source type="image/jpeg" srcSet={srcSet} />
        <img className="portfolio_img" alt="portfolio item" />
      </picture>
      <div className="portfolio_description">
        <h3 className="portfolio_description-title">{title}</h3>
        <p className="portfolio_description-text">{description}</p>
        <div className="buttons_container">
          <Link className="button" icon="globe-americas" text="Website" href={hrefWebsite} target="_blank" rel="noopener noreferrer" />
          <Link className="button" src="github.svg" alt="GitHub image" text="Repository" href={hrefRepository} target="_blank" rel="noopener noreferrer" />
        </div>
      </div>
    </div>
  );
}