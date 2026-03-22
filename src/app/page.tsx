import ClientShell from "@/components/ClientShell";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Pricing from "@/components/Pricing";
import Process from "@/components/Process";
import Gallery from "@/components/Gallery";
import Certificates from "@/components/Certificates";
import Faq from "@/components/Faq";
import Contacts from "@/components/Contacts";
import Footer from "@/components/Footer";
import Analytics from "@/components/Analytics";

export default function Home() {
  return (
    <ClientShell>
      <main>
        <Hero />
        <About />
        <Services />
        <Pricing />
        <Process />
        <Gallery />
        <Certificates />
        <Faq />
        <Contacts />
      </main>
      <Footer />
      <Analytics />
    </ClientShell>
  );
}
