import { useState, useEffect, useRef } from "react";
import "./styles/WhatIDo.css";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const WhatIDo = () => {
  const [activeTab, setActiveTab] = useState<number>(0);
  const containerRef = useRef<(HTMLDivElement | null)[]>([]);
  const setRef = (el: HTMLDivElement | null, index: number) => {
    containerRef.current[index] = el;
  };

  useEffect(() => {
    if (ScrollTrigger.isTouch) {
      containerRef.current.forEach((container) => {
        if (container) {
          container.classList.remove("what-noTouch");
        }
      });
    }
  }, []);

  return (
    <div className="whatIDO" id="skills">
      <div className="what-box">
        <h2 className="title">
          W<span className="hat-h2">HAT</span>
          <div>
            I<span className="do-h2"> DO</span>
          </div>
        </h2>
      </div>

      <div className="what-box">
        <div className="what-box-in">
          {/* Interactive domain tabs for instant one-click switching */}
          <div className="what-tabs-bar">
            <button
              type="button"
              className={`what-tab-btn ${activeTab === 0 ? "active" : ""}`}
              onClick={() => setActiveTab(0)}
            >
              <span className="what-tab-icon">✦</span> AI & DATA SCIENCE
            </button>
            <button
              type="button"
              className={`what-tab-btn ${activeTab === 1 ? "active" : ""}`}
              onClick={() => setActiveTab(1)}
            >
              <span className="what-tab-icon">📊</span> ANALYTICS & WEB
            </button>
          </div>

          <div className="what-cards-wrapper">
            <div className="what-border2">
              <svg width="100%" height="100%">
                <line
                  x1="0"
                  y1="0"
                  x2="0"
                  y2="100%"
                  stroke="rgba(255,255,255,0.4)"
                  strokeWidth="2"
                  strokeDasharray="7,7"
                />
                <line
                  x1="100%"
                  y1="0"
                  x2="100%"
                  y2="100%"
                  stroke="rgba(255,255,255,0.4)"
                  strokeWidth="2"
                  strokeDasharray="7,7"
                />
              </svg>
            </div>

            {/* CARD 0: AI & DATA SCIENCE */}
            <div
              className={`what-content ${activeTab === 0 ? "what-content-active" : "what-sibling"}`}
              ref={(el) => setRef(el, 0)}
              onClick={() => setActiveTab(0)}
              onMouseEnter={() => setActiveTab(0)}
            >
              <div className="what-border1">
                <svg width="100%" height="100%">
                  <line
                    x1="0"
                    y1="0"
                    x2="100%"
                    y2="0"
                    stroke="rgba(255,255,255,0.4)"
                    strokeWidth="2"
                    strokeDasharray="6,6"
                  />
                  <line
                    x1="0"
                    y1="100%"
                    x2="100%"
                    y2="100%"
                    stroke="rgba(255,255,255,0.4)"
                    strokeWidth="2"
                    strokeDasharray="6,6"
                  />
                </svg>
              </div>
              <div className="what-corner"></div>

              <div className="what-content-in">
                <div className="what-card-header">
                  <div>
                    <h3>AI & DATA SCIENCE</h3>
                    <h4>GenAI, Multi-Agent Systems & Deep Learning</h4>
                  </div>
                  <div className={`what-arrow-btn ${activeTab === 0 ? "expanded" : ""}`}></div>
                </div>

                <p>
                  Architecting self-correcting RAG systems, autonomous multi-agent workflows with LangGraph StateGraph, fine-tuning LLMs (LoRA, SFT, DPO), vector databases (FAISS), and ML pipelines with PyTorch and TensorFlow.
                </p>

                <div className="what-skill-group">
                  <h5>GenAI, LLMs & Agent Frameworks</h5>
                  <div className="what-content-flex">
                    <div className="what-tags">Python</div>
                    <div className="what-tags">LangGraph (StateGraph)</div>
                    <div className="what-tags">LangChain</div>
                    <div className="what-tags">AI Agents</div>
                    <div className="what-tags">Multi-Agent Systems</div>
                    <div className="what-tags">A2A Protocols</div>
                    <div className="what-tags">RAG (Self-Corrective & Hierarchical)</div>
                    <div className="what-tags">Groq LLM</div>
                    <div className="what-tags">FAISS Vector Search</div>
                    <div className="what-tags">Hugging Face</div>
                  </div>
                </div>

                <div className="what-skill-group">
                  <h5>Machine Learning & Fine-Tuning</h5>
                  <div className="what-content-flex">
                    <div className="what-tags">LLM Fine-tuning (LoRA / SFT / DPO)</div>
                    <div className="what-tags">PyTorch</div>
                    <div className="what-tags">TensorFlow</div>
                    <div className="what-tags">Machine Learning</div>
                    <div className="what-tags">Scikit-learn</div>
                    <div className="what-tags">NumPy & Pandas</div>
                  </div>
                </div>
              </div>
            </div>

            {/* CARD 1: ANALYTICS & FULL-STACK */}
            <div
              className={`what-content ${activeTab === 1 ? "what-content-active" : "what-sibling"}`}
              ref={(el) => setRef(el, 1)}
              onClick={() => setActiveTab(1)}
              onMouseEnter={() => setActiveTab(1)}
            >
              <div className="what-border1">
                <svg width="100%" height="100%">
                  <line
                    x1="0"
                    y1="100%"
                    x2="100%"
                    y2="100%"
                    stroke="rgba(255,255,255,0.4)"
                    strokeWidth="2"
                    strokeDasharray="6,6"
                  />
                </svg>
              </div>
              <div className="what-corner"></div>

              <div className="what-content-in">
                <div className="what-card-header">
                  <div>
                    <h3>ANALYTICS & WEB</h3>
                    <h4>Business Intelligence & Full-Stack Systems</h4>
                  </div>
                  <div className={`what-arrow-btn ${activeTab === 1 ? "expanded" : ""}`}></div>
                </div>

                <p>
                  Translating raw datasets into actionable executive insights with Power BI KPI dashboards and SQL data modelling, alongside developing production full-stack web applications with React, FastAPI, Node.js, and Docker.
                </p>

                <div className="what-skill-group">
                  <h5>Business Analytics & BI</h5>
                  <div className="what-content-flex">
                    <div className="what-tags">Power BI</div>
                    <div className="what-tags">SQL & MySQL</div>
                    <div className="what-tags">Excel Advanced</div>
                    <div className="what-tags">Data Modelling</div>
                    <div className="what-tags">KPI Dashboards</div>
                    <div className="what-tags">Data Cleaning & Validation</div>
                    <div className="what-tags">MongoDB</div>
                    <div className="what-tags">Hybrid Vector + SQL</div>
                  </div>
                </div>

                <div className="what-skill-group">
                  <h5>Full-Stack & Systems</h5>
                  <div className="what-content-flex">
                    <div className="what-tags">React.js</div>
                    <div className="what-tags">FastAPI</div>
                    <div className="what-tags">Node.js</div>
                    <div className="what-tags">Streamlit</div>
                    <div className="what-tags">C++</div>
                    <div className="what-tags">Docker</div>
                    <div className="what-tags">Git & GitHub</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatIDo;
