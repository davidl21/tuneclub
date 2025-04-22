import "./App.css";
import { Hero } from "./components/ui/hero-with-image-text-and-two-buttons";
import { NavBar } from "./components/ui/nav-bar";
import { Footer } from "./components/ui/footer";
import { Feature } from "./components/ui/feature-with-advantages";

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      <main className="flex-1">
        <Hero />
      </main>
      <Feature />
      <Footer />
    </div>
  );
}

export default App;
