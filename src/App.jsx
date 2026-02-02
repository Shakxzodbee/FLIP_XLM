import Header from "./components/Header";
import Hero from "./components/Hero";
import AssetDetails from "./components/AssetDetails";
import Rewards from "./components/Rewards";
import HowItWorks from "./components/HowItWorks";
import Trust from "./components/Trust";

export default function App() {
  return (
    <div className="page">
      <Header />
      <main>
        <Hero />
        <AssetDetails />
        <Rewards />
        <HowItWorks />
        <Trust />
      </main>
    </div>
  );
}
