import { useState, useRef } from "react";
import "./styles/Work.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { MdArrowOutward, MdChevronLeft, MdChevronRight } from "react-icons/md";
import { FiCheckCircle } from "react-icons/fi";
import { smoother } from "./Navbar";

gsap.registerPlugin(useGSAP);

interface Project {
  num: string;
  title: string;
  category: string;
  date: string;
  file: string;
  accent: string;
  flow: string[];
  badges: string[];
  bullets: string[];
  useCase: string;
  tools: string[];
  link: string;
}

const projects: Project[] = [
  {
    num: "01",
    title: "RAG-Based Technical Documentation Assistant",
    category: "GenAI • Self-Corrective RAG",
    date: "Jul 2026",
    file: "rag_stategraph.py",
    accent: "#38bdf8",
    flow: ["User Query", "LangGraph StateGraph", "Retrieval & Grading", "Self-Correction Loop", "FastAPI Response"],
    badges: ["LangGraph (StateGraph)", "FastAPI", "Groq LLM", "Sentence-Transformers"],
    bullets: [
      "Built a self-corrective Retrieval-Augmented Generation (RAG) system that answers questions over technical documentation, architected as a LangGraph StateGraph with dedicated nodes for query analysis, retrieval, document grading, and answer generation.",
      "Designed a self-correction loop that grades every retrieved chunk for relevance and rewrites queries to retry retrieval when results are poor, falling back to an honest 'I don't know' instead of hallucinating an answer.",
      "Ran LLM inference on Groq with embeddings computed locally via sentence-transformers, requiring only a free Groq API key; added optional Self-RAG-style hallucination verification and web-search fallback."
    ],
    useCase: "Helps students and new engineers quickly find accurate answers inside large, unfamiliar codebases or docs without manual searching.",
    tools: ["LangGraph (StateGraph)", "FastAPI", "Groq LLM", "Sentence-Transformers", "Python"],
    link: "https://github.com/Kushagra2418/RAG-Based-Technical-Documentation-Assistant",
  },
  {
    num: "02",
    title: "Agentic RAG Ecommerce Electronic Shop",
    category: "Autonomous Agent • Hybrid RAG (Vector + SQL)",
    date: "May 2026",
    file: "agentic_ecommerce.ts",
    accent: "#a855f7",
    flow: ["Shopper Query", "Hybrid Search (Vector + SQL)", "LangGraph.js Agent", "Groq Llama 3.3 70B", "Location-Aware Price Compare"],
    badges: ["LangGraph.js", "Groq (Llama 3.3 70B)", "Hybrid RAG (Vector + SQL)"],
    bullets: [
      "Built an AI-powered local electronics marketplace combining hybrid Retrieval-Augmented Generation (vector + SQL) with a LangGraph.js agent running on Groq's Llama 3.3 70B.",
      "Delivered intelligent product discovery, multi-seller price comparison, and location-aware shopping, all from a single conversational interface.",
      "Sub-second conversational response times utilizing Groq hardware-accelerated LLM execution."
    ],
    useCase: "Lets shoppers and local electronics retailers get instant, conversational price comparisons instead of browsing multiple stores.",
    tools: ["LangGraph.js", "Groq (Llama 3.3 70B)", "Hybrid RAG", "Vector Search", "SQL", "TypeScript"],
    link: "https://github.com/Kushagra2418/Agentic-Rag-Ecommerce",
  },
  {
    num: "03",
    title: "AI Fashion Outfit Recommendation System",
    category: "Multimodal AI & RecSys • Computer Vision",
    date: "Mar 2026",
    file: "fashion_clip_rec.py",
    accent: "#f43f5e",
    flow: ["Style Request", "FashionCLIP Embeddings", "FAISS 68-Item Catalogue", "Stylist Priors Match", "Streamlit UI"],
    badges: ["FAISS Vector Search", "FashionCLIP", "Gemini", "Streamlit"],
    bullets: [
      "Built a conversational outfit recommender that parses free-text style requests and an optional user profile, then assembles complete, gender-consistent outfits slot-by-slot from a 68-item catalogue using FAISS vector retrieval.",
      "Designed a custom, explainable compatibility-scoring engine blending image and text similarity (FashionCLIP), pairing priors learned from 25 stylist-curated outfits, colour harmony, and occasion match — keeping the LLM scoped to intent parsing and explanation generation.",
      "Engineered graceful degradation across CLIP/offline embedding backends and Gemini/rule-based intent parsing, so the full pipeline runs end-to-end with no GPU, internet access, or API key required (DareXAI ML & AI Engineer Intern Assignment)."
    ],
    useCase: "Gives students and budget-conscious users a free, offline-capable personal stylist — no subscription styling app required.",
    tools: ["Python", "FAISS", "FashionCLIP", "Gemini", "Streamlit"],
    link: "https://github.com/Kushagra2418/AI-Fashion-Outfit-Recommendation-System",
  },
  {
    num: "04",
    title: "Car Sales Analysis Dashboard",
    category: "Business Analytics • Power BI & Data Modelling",
    date: "Sep 2026",
    file: "car_sales_analytics.pbix",
    accent: "#f59e0b",
    flow: ["72K+ Used Car Listings", "Norway 1.35M Sales Data", "Power BI Data Modelling", "KPI Cards & Market Share", "Interactive Slicers"],
    badges: ["Power BI", "Excel", "CSV", "Data Modelling", "SQL"],
    bullets: [
      "Built a single-page interactive Power BI dashboard combining 72,435 used-car listings (7 brands, 1996–2020) with Norway monthly sales data (65 makes, 2007–2017, about 1.35M units).",
      "Designed KPI cards for price, tax, and sales quantity, a yearly sales trend line, a market-share pie chart by make, and price comparisons by brand and model.",
      "Added slicers for year, fuel type, and brand so every visual filters together, and linked a brand table with logos to keep the report readable for non-technical viewers."
    ],
    useCase: "Gives buyers and analysts one view of pricing, running costs, and market trends in place of raw spreadsheets.",
    tools: ["Power BI", "Excel", "CSV", "Data Modelling", "SQL", "Python"],
    link: "https://github.com/Kushagra2418",
  },
];

const Work = () => {
  const [activeProject, setActiveProject] = useState<number>(0);
  const triggerRef = useRef<ScrollTrigger | null>(null);

  useGSAP(() => {
    const flex = document.querySelector(".work-flex") as HTMLElement;
    const boxes = document.querySelectorAll(".work-box");
    if (!flex || !boxes.length) return;

    const lastBox = boxes[boxes.length - 1] as HTMLElement;
    const container = document.querySelector(".work-container") as HTMLElement;
    if (!lastBox || !container) return;

    // Calculate exact travel distance so Card 04 stays in view with a clean right margin
    const lastBoxRight = lastBox.offsetLeft + lastBox.offsetWidth;
    const containerWidth = container.clientWidth;
    const maxTranslate = Math.max(0, lastBoxRight - containerWidth + 40);

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".work-section",
        start: "top top",
        end: `+=${Math.round(maxTranslate)}`,
        scrub: 0.8,
        pin: true,
        anticipatePin: 1,
        id: "work",
        onUpdate: (self) => {
          const index = Math.min(
            projects.length - 1,
            Math.max(0, Math.round(self.progress * (projects.length - 1)))
          );
          setActiveProject(index);
        },
      },
    });

    timeline.to(".work-flex", {
      x: -maxTranslate,
      ease: "none",
    });

    triggerRef.current = ScrollTrigger.getById("work") || null;

    return () => {
      timeline.kill();
      ScrollTrigger.getById("work")?.kill();
    };
  }, []);

  const scrollToProject = (index: number) => {
    const st = ScrollTrigger.getById("work");
    if (!st) return;
    const start = st.start;
    const totalDist = st.end - st.start;
    const progress = index / (projects.length - 1);
    const targetY = start + progress * totalDist;
    if (smoother) {
      smoother.scrollTo(targetY, true);
    } else {
      window.scrollTo({
        top: targetY,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <div className="work-header-wrap">
          <div>
            <h2>
              Featured <span>Projects</span>
            </h2>
            <span className="work-subtitle">Direct from Resume &bull; 4 Verified Projects</span>
          </div>

          {/* Interactive Navigation Pills & Prev/Next */}
          <div className="work-nav-controls">
            <button
              type="button"
              className="work-nav-btn"
              onClick={() => scrollToProject(Math.max(0, activeProject - 1))}
              disabled={activeProject === 0}
              aria-label="Previous Project"
            >
              <MdChevronLeft />
            </button>

            <div className="work-pills-list">
              {projects.map((p, i) => (
                <button
                  key={i}
                  type="button"
                  className={`work-pill ${activeProject === i ? "active" : ""}`}
                  style={activeProject === i ? { borderColor: p.accent, color: p.accent, background: `${p.accent}20` } : {}}
                  onClick={() => scrollToProject(i)}
                >
                  {p.num}
                </button>
              ))}
            </div>

            <button
              type="button"
              className="work-nav-btn"
              onClick={() => scrollToProject(Math.min(projects.length - 1, activeProject + 1))}
              disabled={activeProject === projects.length - 1}
              aria-label="Next Project"
            >
              <MdChevronRight />
            </button>
          </div>
        </div>

        <div className="work-flex">
          {projects.map((project, index) => (
            <div
              className={`work-box ${activeProject === index ? "in-focus" : ""}`}
              key={index}
              style={{ borderTop: `2px solid ${project.accent}88` }}
            >
              <div className="work-card-top">
                <div className="work-card-num-row">
                  <span className="work-card-num" style={{ color: project.accent }}>
                    {project.num}
                  </span>
                  <div className="work-card-meta">
                    <span className="work-card-date">{project.date}</span>
                    <span
                      className="work-card-category"
                      style={{ borderColor: `${project.accent}55`, color: project.accent }}
                    >
                      {project.category}
                    </span>
                  </div>
                </div>
                <h3 className="work-card-title">{project.title}</h3>
              </div>

              {/* Interactive Pipeline Architecture Visual */}
              <div className="work-pipeline-window">
                <div className="work-pipeline-bar">
                  <div className="work-dots">
                    <span className="dot red"></span>
                    <span className="dot yellow"></span>
                    <span className="dot green"></span>
                  </div>
                  <span className="work-pipeline-file">{project.file}</span>
                  <span className="work-pipeline-status" style={{ color: project.accent }}>
                    ● verified
                  </span>
                </div>
                <div className="work-pipeline-flow">
                  {project.flow.map((node, i) => (
                    <span key={i} className="work-flow-item">
                      <span className="work-flow-node">{node}</span>
                      {i < project.flow.length - 1 && (
                        <span className="work-flow-arrow" style={{ color: project.accent }}>
                          &rarr;
                        </span>
                      )}
                    </span>
                  ))}
                </div>
                <div className="work-badges-row">
                  {project.badges.map((b, i) => (
                    <span
                      key={i}
                      className="work-badge"
                      style={{ backgroundColor: `${project.accent}18`, color: project.accent }}
                    >
                      {b}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bullet Points directly from Resume */}
              <div className="work-card-body">
                <ul className="work-bullets">
                  {project.bullets.map((b, i) => (
                    <li key={i}>
                      <FiCheckCircle className="work-check" style={{ color: project.accent }} />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
                <div className="work-use-case">
                  <span className="use-case-label">Use Case:</span> {project.useCase}
                </div>
              </div>

              {/* Footer Tech Tags & GitHub Button */}
              <div className="work-card-footer">
                <div className="work-tags-wrap">
                  {project.tools.map((tool, i) => (
                    <span className="work-tech-tag" key={i}>
                      {tool}
                    </span>
                  ))}
                </div>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="work-github-btn"
                  style={{ borderColor: `${project.accent}66` }}
                  data-cursor="disable"
                >
                  <span>View Repository</span>
                  <MdArrowOutward />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
