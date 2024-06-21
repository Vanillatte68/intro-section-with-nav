import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import hero from "./images/image-hero-desktop.png";
import heroMobile from "./images/image-hero-mobile.png";
import databiz from "./images/client-databiz.svg";
import audiophile from "./images/client-audiophile.svg";
import maker from "./images/client-maker.svg";
import meet from "./images/client-meet.svg";

function App() {
  return (
    <main>
      <Navbar />
      <div className="hero">
        <div className="hero-img-mobile">
          <img src={heroMobile} alt="hero" />
        </div>
        <div className="hero-text">
          <h1>Make remote work</h1>
          <p>
            Get your team in sync, no matter your location. Streamline
            processes, create team rituals, and watch productivity soar.
          </p>
          <button>Learn more</button>
        </div>
        <div className="hero-img">
          <img src={hero} alt="hero" />
        </div>
        <div className="clients">
          <img src={databiz} alt="databiz" />
          <img src={audiophile} alt="audiophile" />
          <img src={maker} alt="maker" />
          <img src={meet} alt="meet" />
        </div>
      </div>
      <Footer />
    </main>
  );
}

export default App;
