import "./App.css";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Productive from "./components/Productive";
import Reviews from "./components/Reviews";

function App() {
  return (
    <div className="App bg-main-background font-raleway text-white">
      <Header />
      <Features />
      <Productive />
      <Reviews />
      <Footer />
    </div>
  );
}

export default App;
