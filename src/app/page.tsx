import "./globals.css";
import Footer from "./Components/Common/Footer";
import HeroAu from "./Components/Home/HeroAu";
import HowDo from "./Components/Home/HowDo";
import AboutTeam from "./Components/Home/AboutTeam";
import SendMessage from "./Components/Home/SendMessage";
import ClientSlider from "./Components/Home/ClientSlider";
import OurService from "./Components/Home/OurService";
export default function Home() {
  return (
    <>
      <HeroAu />
      <HowDo />
      <ClientSlider />
      <OurService />
      <AboutTeam />
      <SendMessage />
      <Footer />
    </>
  );
}
