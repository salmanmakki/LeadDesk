import Hero from '../components/Hero';
import Features from '../components/Features';
import HowItWorks from '../components/HowItWorks';
import LeadForm from '../components/LeadForm';

export default function Home() {
  return (
    <div className="animate-fade-in">
      <Hero />
      <Features />
      <HowItWorks />
      <LeadForm />
    </div>
  );
}
