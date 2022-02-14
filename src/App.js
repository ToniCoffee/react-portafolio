import { Navbar } from '/src/components/navbar/navbar';
import { Home } from '/src/components/home/home';
import { About } from '/src/components/sections/about/about';
import { Skills } from '/src/components/sections/skills/skills';
import { Services } from '/src/components/sections/services/services';
import { Portfolio } from '/src/components/sections/portfolio/portfolio';

import '/src/styles.css';
import '/src/common.css';
import '/src/section.css';

export default function App() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Services />
      <Portfolio />
    </>
  );
}

