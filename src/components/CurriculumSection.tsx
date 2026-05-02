import { Brain, Bot, Code, Database, Layers, Rocket } from "lucide-react";

const modules = [
  {
    icon: Brain,
    title: "Foundations of GenAI",
    description: "LLMs, Transformers, Attention Mechanisms, Tokenization & Embeddings",
    week: "Week 1-2",
  },
  {
    icon: Code,
    title: "Prompt Engineering & APIs",
    description: "OpenAI, Claude, Grok APIs. Advanced prompting, chain-of-thought, few-shot learning",
    week: "Week 3-4",
  },
  {
    icon: Bot,
    title: "Building AI Agents",
    description: "CrewAI, AutoGen, LangGraph. Multi-agent orchestration & communication protocols",
    week: "Week 5-6",
  },
  {
    icon: Database,
    title: "RAG & Vector Stores",
    description: "Retrieval-Augmented Generation, vector databases, semantic search systems",
    week: "Week 7-8",
  },
  {
    icon: Layers,
    title: "Enterprise AI Systems",
    description: "Multi-agent enterprise simulation, role-based agents, decision-making hierarchies",
    week: "Week 9-10",
  },
  {
    icon: Rocket,
    title: "Capstone Project",
    description: "Build & deploy a production-ready AI agent system. Demo day & portfolio review",
    week: "Week 11-12",
  },
];

const CurriculumSection = () => {
  return (
    <section id="curriculum" className="py-24 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Course Curriculum
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A 12-week intensive program designed to take you from GenAI fundamentals to building production-ready AI systems.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {modules.map((mod, i) => (
            <div
              key={i}
              className="bg-card rounded-xl p-6 card-elevated border border-border"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="h-10 w-10 rounded-lg bg-accent flex items-center justify-center">
                  <mod.icon className="h-5 w-5 text-primary" />
                </div>
                <span className="text-xs font-semibold text-primary uppercase tracking-wider">{mod.week}</span>
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{mod.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{mod.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CurriculumSection;
