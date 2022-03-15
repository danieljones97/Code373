import SideNav from './components/Sidenav';
import Home from './components/Home';
import FAQ from './components/FAQ';
import Lore from './components/Lore';
import Team from './components/Team';
import Roadmap from './components/Roadmap';
import SneakPeak from './components/SneakPeak';
import Rarity from './components/Rarity';
import Events from './components/Events';


function App() {
  return (
    <div className="page-container">

      <SideNav />

      <div className="module-container">
        <div className="module" id="home-module">
          <Home />
        </div>
        <div className="module" id="lore-module">
          <Lore />
        </div>
        <div className="module" id="sneakpeak-module">
          <SneakPeak />
        </div>
        <div className="module" id="rarity-module">
          <Rarity />
        </div>
        <div className="module" id="roadmap-module">
          <Roadmap />
        </div>
        <div className="module" id="events-module">
          <Events />
        </div>
        <div className="module" id="team-module">
          <Team />
        </div>
        <div className="module" id="faq-module">
          <FAQ />
        </div>
      </div>

    </div>
  );
}

export default App;
