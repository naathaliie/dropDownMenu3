import { useState } from "react";
import AboutUs from "./components/AboutUs/AboutUs";
import DropDownMenu from "./components/DropDownMenu/DropDownMenu";
import charactersJson from "./components/json/characters.json";
import aboutUsJson from "./components/json/aboutUs.json";
import "./App.css";

function App() {
  const [showAboutUs, setShowAboutUs] = useState(false);

  const handleOnClick = () => {
    console.log("du klickade på knappen");
    setShowAboutUs(true);
  };

  return (
    <section className="theAppSection">

      <navbar className="dropDownNavbar">
        <h1>Dropdown menu</h1>
        <button className="aboutUsBtn" onClick={handleOnClick}>
          About us
        </button>
        {showAboutUs && <AboutUs aboutUsInfo={aboutUsJson} />}
      </navbar>
      
      <main className="dropDownMain">
        <DropDownMenu characters={charactersJson} />
      </main>
    </section>
  );
}

export default App;
