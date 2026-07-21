/*
  Design direction: Dark Data Grid.
  Audience: SME and enterprise leaders seeking practical Data/AI transformation.
  Typography: Syne display + Manrope body. Palette: charcoal, signal green, warm ivory.
  Motion: one staggered hero entrance, restrained hover lifts, reduced-motion safe.
  Spatial approach: asymmetric editorial sections with a technical grid rhythm.
*/

const services = [
  {
    number: "01",
    slug: "enterprise-data-warehouse",
    title: "Enterprise Data Warehouse",
    copy: "A reliable data foundation that unifies fragmented sources and makes trusted information available across your business.",
  },
  {
    number: "02",
    slug: "data-ai-agents",
    title: "Data–AI Agents",
    copy: "Purpose-built AI agents that understand your workflows, automate repetitive work and keep people in control.",
  },
  {
    number: "03",
    slug: "business-intelligence",
    title: "Advanced Business Intelligence",
    copy: "Decision-ready dashboards and analytics that turn complex data into clear, timely action.",
  },
  {
    number: "04",
    slug: "web-applications",
    title: "Web Applications",
    copy: "Focused internal tools and customer-facing products engineered around the way your teams actually work.",
  },
];

const projects = [
  { client: "BETALL", tag: "REALTIME DATA PLATFORM", title: "A resilient real-time data foundation for e-commerce operations.", image: "/projects/betall.png", alt: "Enterprise data warehouse connecting CRM, SaaS applications and BI tools" },
  { client: "PIKTOCHART", tag: "BUSINESS INTELLIGENCE", title: "Faster analytics and clearer decisions for a global product team.", image: "/projects/piktochart.jpg", alt: "Data warehouse powering AI, analytics and intelligent business operations" },
  { client: "DIADU", tag: "GIS DATA PROCESSING", title: "Digital workflows for complex water supply infrastructure.", image: "/projects/diadu.png", alt: "Water and wastewater GIS operations dashboard" },
  { client: "YHOJAPAN", tag: "OPERATIONS SOFTWARE", title: "One inventory and sales system across Japan and Vietnam.", image: "/projects/yhojapan.png", alt: "Custom web application development workspace" },
];

const testimonials = [
  {
    client: "PIKTOCHART",
    quote: "Giza delivered a seamless, high-performance BI system that transformed how we look at our data and make critical decisions.",
  },
  {
    client: "BETALL",
    quote: "Their engineering excellence gave us a rock-solid real-time data platform and centralized warehouse for e-commerce operations.",
  },
  {
    client: "DIADU",
    quote: "They truly understand how to turn complex infrastructure requirements into smooth digital workflows.",
  },
  {
    client: "YHOJAPAN",
    quote: "The unified inventory and sales system operates flawlessly across Japan and Vietnam and streamlined our entire workflow.",
  },
];

const faqs = [
  ["What does Giza Digital specialize in?", "We design data platforms, AI agents, business intelligence systems and web applications for SMEs and enterprise teams."],
  ["How does a project begin?", "Every engagement starts with a focused discovery session. We map the business problem, users, data and desired outcome before recommending technology."],
  ["Can you work with our existing systems?", "Yes. We assess your current stack first and prioritize practical integration over unnecessary replacement."],
  ["Do you provide both consulting and implementation?", "Yes. Giza can support strategy, architecture, product delivery, data engineering and ongoing improvement as one connected engagement."],
  ["How long does a typical engagement take?", "A focused prototype can take a few weeks. Larger data platforms and business applications are delivered in milestones based on scope and complexity."],
];

export default function Home() {
  const asset = (path: string) => `${import.meta.env.BASE_URL}${path}`;

  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Giza Digital home">
          <img className="brand-logo" src={asset("giza-logo.png")} alt="Giza Digital" />
        </a>
        <nav aria-label="Primary navigation">
          <div className="nav-dropdown">
            <a className="nav-dropdown-trigger" href="#services" aria-haspopup="true">Services <span>⌄</span></a>
            <div className="nav-dropdown-menu" aria-label="Services">
              {services.map((service) => (
                <a href={`#${service.slug}`} key={service.slug}>
                  <small>{service.number}</small>
                  <span>{service.title}</span>
                </a>
              ))}
            </div>
          </div>
          <a href="#work">Work</a>
          <a href="#about">About Us</a>
          <a href="#contact">Contact Us</a>
        </nav>
        <a className="header-cta" href="mailto:hello@gizadigital.vn">Talk to us <span>↗</span></a>
      </header>

      <section className="hero" id="top">
        <div className="hero-grid" aria-hidden="true" />
        <div className="hero-copy">
          <p className="eyebrow reveal reveal-1"><span className="pulse" /> Data · AI · Applications</p>
          <h1 className="reveal reveal-2">Transforming business through <em>Data–AI</em> driven innovation.</h1>
          <p className="hero-sub reveal reveal-3">We help ambitious teams turn complex data, operations and ideas into systems that create measurable business value.</p>
          <div className="hero-actions reveal reveal-4">
            <a className="button button-primary" href="mailto:hello@gizadigital.vn?subject=Start%20a%20project%20with%20Giza">Start a conversation <span>↗</span></a>
            <a className="text-link" href="#work">Explore our work <span>↓</span></a>
          </div>
          <div className="trust-strip reveal reveal-4" aria-label="Selected clients">
            <span>TRUSTED BY</span><strong>BETALL</strong><strong>PIKTOCHART</strong><strong>DIADU</strong><strong>YHOJAPAN</strong>
          </div>
        </div>

        <div className="hero-visual reveal reveal-3" aria-label="Data intelligence platform visualization">
          <div className="visual-top"><span>GIZA / INTELLIGENCE LAYER</span><span className="live">● LIVE</span></div>
          <div className="orbit orbit-one"><i /></div>
          <div className="orbit orbit-two"><i /><i /></div>
          <div className="core"><b>90%</b><span>AUTOMATED<br />DAILY TASKS</span></div>
          <div className="signal signal-a">DATA INTEGRITY <b>99.9</b></div>
          <div className="signal signal-b">DECISION FOCUS <b>80%</b></div>
          <div className="visual-bottom"><span>01 INGEST</span><span>02 UNDERSTAND</span><span>03 ACT</span></div>
        </div>
      </section>

      <section className="manifesto" id="about">
        <div className="about-intro">
          <p className="section-index">01 / ABOUT US</p>
          <p className="kicker">Driven by Understanding</p>
          <h2>We build technology from a deep understanding of the business behind it.</h2>
        </div>

        <div className="about-story">
          <p><strong>Giza Digital Services Ltd.</strong> is a technology solutions provider established in 2022 in Ho Chi Minh City, Vietnam. Founded with a deep technical focus on Data Application and Processing, we began our journey by building robust Data Platforms for small and medium-sized enterprises (SMEs).</p>
          <p>Over the years, Giza has steadily expanded its capabilities into a comprehensive suite of IT services. Today, our expertise spans engineering Customer Data Platforms (CDP), Web App development, advanced Business Intelligence (BI) solutions, bespoke internal operations software, and professional IT consulting.</p>
          <p>Driving the future of digital transformation, we actively develop and deploy AI Agents tailored to help enterprise clients automate, scale, and thrive in a data-driven world.</p>
        </div>

        <div className="about-block about-mission">
          <p className="section-index">OUR MISSION</p>
          <div>
            <h3>Turning digital ambition into measurable reality.</h3>
            <p>To help SMEs clearly identify and master the essential building blocks of their digital transformation journey, while walking hand-in-hand with them to turn that vision into reality. At the absolute core of this mission is a data-driven approach—ensuring that every step we take together is guided by precision, clarity, and actionable insights.</p>
            <p>At Giza, this philosophy is what we define as <strong>“Driven by Understanding.”</strong> We never build blindly—every single solution we deliver is uniquely tailored and provided based on that deep, shared understanding.</p>
          </div>
        </div>

        <div className="about-strategy">
          <div className="about-strategy-heading">
            <p className="section-index">OUR STRATEGY</p>
            <h3>Three principles guide how we build.</h3>
          </div>
          <div className="strategy-grid">
            <article><span>01</span><h4>Data-Centric Approach</h4><p>Data is the lifeblood of modern business. We design every solution with a deep focus on data integrity, integration, and advanced analytics, transforming raw information into a high-value strategic asset.</p></article>
            <article><span>02</span><h4>Platform Services as the Bedrock</h4><p>A strong house needs a solid foundation. We build highly scalable, reliable, and secure platform services that provide the perfect infrastructure for all business applications to run seamlessly.</p></article>
            <article><span>03</span><h4>AI-Integrated Applications</h4><p>We deliver applications that position Artificial Intelligence as a vital and inseparable building block of digital transformation, delivering real business value and driving future-ready operations.</p></article>
          </div>
        </div>
      </section>

      <section className="services" id="services">
        <div className="section-heading">
          <div><p className="section-index">02 / CAPABILITIES</p><h2>From raw data<br />to real momentum.</h2></div>
          <p>One partner across strategy, engineering and delivery—built around the outcomes your business needs next.</p>
        </div>
        <div className="service-list">
          {services.map((service) => (
            <article className="service-row" id={service.slug} key={service.number}>
              <span>{service.number}</span><h3>{service.title}</h3><p>{service.copy}</p><i>↗</i>
            </article>
          ))}
        </div>
      </section>

      <section className="work" id="work">
        <div className="section-heading work-heading">
          <div><p className="section-index">03 / SELECTED WORK</p><h2>Proof in production.</h2></div>
          <p>Real systems. Real operations. Built for the point where technical rigor meets business reality.</p>
        </div>
        <div className="project-grid">
          {projects.map((project, index) => (
            <article className={`project-card project-${index + 1}`} key={project.client}>
              <div className="project-art">
                <img src={asset(project.image.replace(/^\//, ""))} alt={project.alt} loading="lazy" />
                <span>{String(index + 1).padStart(2, "0")}</span>
                <div className="project-overlay"><b>{project.client}</b><small>View case study ↗</small></div>
              </div>
              <div className="project-meta"><span>{project.tag}</span><b>{project.client}</b></div>
              <h3>{project.title}</h3>
            </article>
          ))}
        </div>
      </section>

      <section className="testimonials">
        <div className="quote-heading"><p className="section-index">04 / CLIENT VOICES</p><h2>Built together.<br />Proven in practice.</h2></div>
        <div className="quote-grid">
          {testimonials.map((item) => (
            <figure key={item.client}>
              <blockquote>“{item.quote}”</blockquote>
              <figcaption><span className="avatar">{item.client.slice(0, 1)}</span><b>{item.client}</b><span>Giza Digital client</span></figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="faq" id="faq">
        <div><p className="section-index">05 / FAQ</p><h2>Good questions.<br />Clear answers.</h2><p>Have something more specific in mind? <a href="mailto:hello@gizadigital.vn">Email our team ↗</a></p></div>
        <div className="faq-list">
          {faqs.map(([question, answer], index) => (
            <details key={question} open={index === 0}>
              <summary><span>{String(index + 1).padStart(2, "0")}</span>{question}<i>+</i></summary>
              <p>{answer}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="final-cta" id="contact">
        <p>YOUR NEXT SYSTEM STARTS WITH A CONVERSATION.</p>
        <h2>Let’s turn understanding<br />into <em>momentum.</em></h2>
        <a className="button button-dark" href="mailto:hello@gizadigital.vn?subject=Let%27s%20build%20with%20Giza">Start a project <span>↗</span></a>
      </section>

      <footer>
        <div className="footer-main">
          <div><a className="brand footer-brand" href="#top"><img className="footer-logo" src={asset("giza-logo.png")} alt="Giza Digital" /></a><p>Data–AI systems built from deep understanding.</p></div>
          <div><span>Navigate</span><a href="#services">Services</a><a href="#work">Selected work</a><a href="#about">About Us</a><a href="#contact">Contact Us</a><a href="#faq">FAQ</a></div>
          <div><span>Contact</span><a href="mailto:hello@gizadigital.vn">hello@gizadigital.vn</a><a href="https://gizadigital.vn">gizadigital.vn</a><p>Ho Chi Minh City, Vietnam</p></div>
          <div><span>Legal</span><a href="#">Privacy policy</a><a href="#">Terms of service</a></div>
        </div>
        <div className="footer-bottom"><span>© 2026 GIZA DIGITAL SERVICES COMPANY LIMITED</span><a href="#top">BACK TO TOP ↑</a></div>
      </footer>
    </main>
  );
}
