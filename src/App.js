import logo from "./logo.svg";

/* Desktop components */
import Header from "./header/header";
import Nav from "./Nav/nav";
import HeroFeature from "./content/1.landingPage";
import Services from "./content/2.services";
import Welding from "./content/3.welding";
import Cutting from "./content/4.cutting";
import ContactMap from "./content/5.contact";

/* Mobile components */
import MobileNav from "./Nav/mobile/responsiveNav";
import { useMediaQuery } from "react-responsive";

function App() {
  const isMobile = useMediaQuery({ maxWidth: 800 });

  return (
    <div className="App">
      <Header />
      {isMobile ? (
        <>
          <MobileNav />
        </>
      ) : (
        <Nav />
      )}
      <HeroFeature />
      <Services />
      <Welding />
      <Cutting />
      <ContactMap />
    </div>
  );
}

export default App;
