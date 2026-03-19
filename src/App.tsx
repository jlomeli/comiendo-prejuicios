import "./index.css";
import { Header } from "@/components/header";
import {
  Hero,
  Problem,
  Solution,
  HowItWorks,
  Testimonials,
  About,
  FinalCta,
  Footer,
} from "@/components/sections";

export function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <Problem />
        <Solution />
        <HowItWorks />
        <Testimonials />
        <About />
        <FinalCta />
        <Footer />
      </main>
    </div>
  );
}

export default App;
