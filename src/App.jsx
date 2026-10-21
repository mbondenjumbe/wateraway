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
  return (
    <>
      <Header />
      <Hero />
      <section className="features">
        {features.map((feature) => (
          <FeatureCard
            key={feature.title}
            title={feature.title}
            description={feature.description}
            icon={feature.icon}
          />
        ))}
      </section>
      <Footer />
    </>
  );
}

export default App;