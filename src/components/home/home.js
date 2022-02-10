import { getUser } from '/src/services/getUser';
import { useState, useEffect } from 'react';

import './home.css';

export const Home = () => {
  const [user, setUser] = useState('');

  useEffect(() => {
    getUser().then(res => setUser(res));
  }, []);

  return (
    <section id="home" className="home">
      <div className="home_background"></div>
      <picture>
        {/* <source type="image/webp" srcSet="bg_responsive.webp" /> */}
        <source type="image/jpg" srcSet={user} />
        <img className="home_profile" alt="profile" data-sr-id="2" style={{visibility: 'visible', opacity: 1, transition: 'filter 3s ease 0s opacity 0.6s cubicBezier(0.5, 0, 0, 1) 0.35s' }} />
      </picture>
      <div className="home_description">
        <span className="home_title-primary" data-sr-id="3" style={{visibility: 'visible', opacity: 1, transition: 'opacity 0.6s cubicBezier(0.5, 0, 0, 1) 0.35s'}} >Hi!</span>
        <h1 className="home_title" data-sr-id="4" style={{visibility: 'visible', opacity: 1, transition: 'opacity 0.6s cubicBezier(0.5, 0, 0, 1) 0.45s'}} >I'm Toni López</h1>
        <span className="home_title-secondary" data-sr-id="5" style={{visibility: 'visible', opacity: 1, transition: 'opacity 0.6s cubicBezier(0.5, 0, 0, 1) 0.55s'}} >Full Stack Developer</span>
      </div>
    </section>
  );
}