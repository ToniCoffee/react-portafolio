import { Navbar } from '/src/components/navbar/navbar';
import { Home } from '/src/components/home/home';
import { About } from '/src/components/sections/about/about';

import './styles.css';

export default function App() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
    </>
  );
}

