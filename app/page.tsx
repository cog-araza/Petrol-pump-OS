import { Benefits } from "@/components/benefits";
import { DashboardPreview } from "@/components/dashboard-preview";
import { Features } from "@/components/features";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { Intelligence } from "@/components/intelligence";
import { ProblemSolution } from "@/components/problem-solution";
import { Roadmap } from "@/components/roadmap";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Header />
      <Hero />
      <ProblemSolution />
      <Features />
      <DashboardPreview />
      <Intelligence />
      <Roadmap />
      <Benefits />
      <Footer />
    </main>
  );
}
