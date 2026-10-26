import { useState, useEffect } from "react";
import Nav from "./components/Nav";
import Header from "./components/Header";
import Hero from "./components/Hero";
import FeatureCard from "./components/FeatureCard";
import Footer from "./components/Footer";
import "./App.css";

const features = [
  { title: "Watering Reminders", description: "Get notified exactly when each plant is thirsty.", icon: "💧" },
  { title: "Plant Profiles", description: "Store each plant's name and watering schedule.", icon: "🌱" },
  { title: "Watering History", description: "See when you last watered so you never overwater.", icon: "📅" },
];

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.title = darkMode ? "Wateraway - Dark Mode" : "Wateraway - Light Mode";
  }, [darkMode]);

  return (
    <div className={darkMode ? "app dark" : "app"}>
      <Nav />

      <button onClick={() => setDarkMode(!darkMode)}>
        {darkMode ? "Switch to Light" : "Switch to Dark"}
      </button>

      <Header />

      <div id="home">
        <Hero />
      </div>

      <section id="features" className="features">
        {features.map((feature) => (
          <FeatureCard
            key={feature.title}
            title={feature.title}
            description={feature.description}
            icon={feature.icon}
          />
        ))}
      </section>

      <div id="contact">
        <Footer />
      </div>
    </div>
  );
}

export default App;