import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Services } from "@/components/Services";
import { Process } from "@/components/Process";
import { Differentials } from "@/components/Differentials";
import { DemoForm } from "@/components/DemoForm";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <Services />
      <Process />
      <Differentials />
      <DemoForm />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;