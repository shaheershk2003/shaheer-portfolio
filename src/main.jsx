import React, { useEffect, useMemo, useRef, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { ArrowDownRight, ArrowUpRight, Mail, MapPin, Menu, X, ExternalLink, Sparkles, Code2, BrainCircuit, Database, Server, Sun, Moon } from 'lucide-react';
import './styles.css';

const github = 'https://github.com/shaheershk2003';
const linkedin = 'https://www.linkedin.com/in/shaheershk/';
const email = 'mailto:shaheerkhan7860@gmail.com';
const resume = '/Shaheer_Khan_Resume.pdf';

const projects = [
  {
    number: '01',
    type: 'AI / FULL STACK',
    title: 'IncidentIQ',
    subtitle: 'AI-powered incident management',
    description: 'A full-stack incident management platform with role-based access, SQL Server transactions, MongoDB activity history, AI analysis and a controlled resolution agent.',
    stack: ['Angular', 'TypeScript', 'Node.js', 'Express', 'SQL Server', 'MongoDB', 'AI'],
    accent: 'violet',
    github: 'https://github.com/shaheershk2003/incidentiq-ai-incident-management',
    featured: true,
  },
  {
    number: '02',
    type: 'COMPUTER VISION',
    title: 'Bone-Sense',
    subtitle: 'Fracture & implant detection',
    description: 'A Python deep-learning application for identifying fractures and implants from X-ray imagery, evaluating multiple CNN architectures for automated classification.',
    stack: ['Python', 'CNN', 'VGG16', 'ResNet50', 'DenseNet', 'Computer Vision'],
    accent: 'blue',
    github,
  },
  {
    number: '03',
    type: 'MERN / WEB',
    title: 'Cartwish',
    subtitle: 'Full-stack e-commerce platform',
    description: 'A MERN commerce application with JWT authentication, product management, shopping cart flows, REST APIs, unit testing and cloud deployment.',
    stack: ['React', 'Node.js', 'Express', 'MongoDB', 'REST APIs', 'Jest'],
    accent: 'amber',
    github : 'https://github.com/shaheershk2003/Cartwish-frontend',
    featured: true,
  },
];

const skills = [
  { icon: Code2, label: 'Languages', items: 'Java · Python · JavaScript · TypeScript · SQL' },
  { icon: Server, label: 'Full Stack', items: 'React · Angular · Node.js · Express · .NET Core · REST' },
  { icon: BrainCircuit, label: 'AI / Data', items: 'Generative AI · ML · Deep Learning · CNN · Computer Vision' },
  { icon: Database, label: 'Data & Cloud', items: 'MySQL · MongoDB · SQLite · AWS · Azure · Firebase' },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dark, setDark] = useState(true);
  const cursor = useRef(null);

  useEffect(() => {
    document.documentElement.dataset.theme = dark ? 'dark' : 'light';
  }, [dark]);

  useEffect(() => {
    const move = (e) => {
      if (cursor.current) {
        cursor.current.style.transform = `translate3d(${e.clientX - 5}px, ${e.clientY - 5}px, 0)`;
      }
    };
    window.addEventListener('pointermove', move);
    return () => window.removeEventListener('pointermove', move);
  }, []);

  useEffect(() => {
    const nodes = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add('visible');
      });
    }, { threshold: 0.12 });
    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);

  const year = new Date().getFullYear();

  return (
    <div className="site-shell">
      <div ref={cursor} className="cursor-dot" />
      <div className="grain" />
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />

      <header className="nav-wrap">
        <a className="brand" href="#top" aria-label="Shaheer home"><span>SK</span><i /></a>
        <nav className={menuOpen ? 'nav-links open' : 'nav-links'}>
          <a href="#work" onClick={() => setMenuOpen(false)}>Work</a>
          <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
          <a href="#experience" onClick={() => setMenuOpen(false)}>Experience</a>
          <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
        </nav>
        <div className="nav-actions">
          <button className="icon-btn" onClick={() => setDark(!dark)} aria-label="Toggle theme">{dark ? <Sun size={17}/> : <Moon size={17}/>}</button>
          <a className="nav-resume" href={resume} target="_blank" rel="noreferrer">Resume <ExternalLink size={14}/></a><a className="nav-cta" href={email}>Let's talk <ArrowUpRight size={15}/></a>
          <button className="menu-btn" onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu">{menuOpen ? <X/> : <Menu/>}</button>
        </div>
      </header>

      <main id="top">
        <section className="hero">
          <div className="hero-grid">
            <div className="hero-copy">
              <p className="eyebrow"><span className="pulse" /> SOFTWARE DEVELOPER · INDIA</p>
              <h1>Building digital<br/><em>things that matter.</em></h1>
              <p className="hero-lede">I’m Shaheer — a software developer focused on production applications, full-stack systems and practical AI.</p>
              <div className="hero-actions">
                <a className="primary-btn" href="#work">Explore my work <ArrowDownRight size={17}/></a>
                <a className="text-link" href={resume} target="_blank" rel="noreferrer">Resume <ExternalLink size={15}/></a><a className="text-link" href={linkedin} target="_blank" rel="noreferrer">LinkedIn <ArrowUpRight size={15}/></a>
              </div>
            </div>
            <div className="hero-art" aria-hidden="true">
              <div className="orb"><div className="orb-core" /><div className="orbit orbit-a" /><div className="orbit orbit-b" /></div>
              <div className="code-card"><span>const</span> <b>shaheer</b> = {'{'}<br/><small>craft: <i>'clean systems'</i>,</small><br/><small>curiosity: <i>true</i></small><br/>{'}'};</div>
            </div>
          </div>
          <div className="hero-bottom">
            <span>Scroll to explore</span><div className="scroll-line"/><span>01 — 06</span>
          </div>
        </section>

        <section className="ticker" aria-label="skills marquee">
          <div className="ticker-track"><span>FULL STACK</span><i>✦</i><span>AI / ML</span><i>✦</i><span>BACKEND</span><i>✦</i><span>PRODUCT ENGINEERING</span><i>✦</i><span>FULL STACK</span><i>✦</i><span>AI / ML</span><i>✦</i><span>BACKEND</span><i>✦</i><span>PRODUCT ENGINEERING</span><i>✦</i></div>
        </section>

        <section id="work" className="section work-section">
          <div className="section-head reveal"><div><span className="section-index">02</span><h2>Selected <em>work</em></h2></div><p>Projects where engineering meets problem-solving — from enterprise applications to AI systems.</p></div>
          <div className="project-list">
            {projects.map((p) => <ProjectCard key={p.number} project={p}/>) }
          </div>
        </section>

        <section id="about" className="section about-section">
          <div className="section-head reveal"><div><span className="section-index">03</span><h2>A little <em>about me</em></h2></div></div>
          <div className="about-grid">
            <div className="about-statement reveal"><p className="big-copy">I like taking messy problems and turning them into <em>clear, usable software.</em></p><p>My work spans Java and backend services, modern JavaScript/TypeScript stacks, databases, cloud tooling and applied AI. I care about clean architecture, debugging what actually breaks, and shipping things that hold up beyond the demo.</p><div className="signature">Shaheer Khan<span>Software Developer</span></div></div>
            <div className="skill-grid">{skills.map(({icon: Icon, label, items}) => <div className="skill-card reveal" key={label}><Icon size={19}/><div><h3>{label}</h3><p>{items}</p></div></div>)}</div>
          </div>
        </section>

        <section id="experience" className="section experience-section">
          <div className="section-head reveal"><div><span className="section-index">04</span><h2>Where I’ve <em>worked</em></h2></div></div>
          <div className="timeline">
            <TimelineItem year="2025 — Present" role="Programmer Analyst" company="Cognizant Technology Solutions" location="Hyderabad, India" text="Developing and supporting production-level Java applications for a US-based client across backend services, REST APIs, database integration and full-stack components. Working through development, testing, debugging, code review, troubleshooting and multi-environment deployment." current />
            <TimelineItem year="2024 — 2024" role="Software Developer Engineer Intern" company="Philips" location="Bangalore, India" text="Built enterprise application features using Java, React.js, JavaScript and REST APIs. Worked with architects and stakeholders on API integration, Agile delivery, testing, debugging, CI/CD and release reliability." />
          </div>
          <div className="education reveal"><div><span>EDUCATION</span><h3>B.Tech — Computer Science & Business Systems</h3><p>SRM Institute of Science and Technology · Chennai · CGPA 8.9</p></div><b>2021 — 2025</b></div>
        </section>

        <section className="section proof-section">
          <div className="proof-card reveal"><div className="proof-number">8.9</div><div><span>CGPA</span><p>Computer Science & Business Systems</p></div><div className="proof-divider"/><div className="proof-number">1.5+</div><div><span>YEARS</span><p>Production software experience</p></div><div className="proof-divider"/><div className="proof-number">AI</div><div><span>FOCUS</span><p>Applied ML & AI-powered systems</p></div></div>
        </section>

        <section id="contact" className="section contact-section">
          <div className="contact-card reveal"><div className="contact-orbit"/><span className="section-index">06</span><h2>Have a problem<br/>worth <em>building?</em></h2><p>I'm open to software engineering opportunities, interesting products and ambitious technical problems.</p><a className="primary-btn large" href={email}>Start a conversation <ArrowUpRight size={18}/></a><div className="contact-meta"><span><MapPin size={15}/> India</span><a href={email}><Mail size={15}/> Email</a><a href={github} target="_blank" rel="noreferrer"><span className="brand-mark">GH</span> GitHub</a><a href={linkedin} target="_blank" rel="noreferrer"><span className="brand-mark linkedin-mark">in</span> LinkedIn</a></div></div>
        </section>
      </main>

      <footer><div className="footer-brand">SK<span>© {year} Shaheer Hasan Khan</span></div><div className="footer-links"><a href={github}>GitHub</a><a href={linkedin}>LinkedIn</a><a href={email}>Email</a></div><span>Built with React · crafted with intent.</span></footer>
    </div>
  );
}

function ProjectCard({project}) {
  return <article className={`project-card ${project.accent} ${project.featured ? 'featured' : ''} reveal`}>
    <div className="project-top"><span>{project.number}</span><span>{project.type}</span></div>
    <div className="project-content"><div><p className="project-subtitle">{project.subtitle}</p><h3>{project.title}</h3><p className="project-description">{project.description}</p><div className="tags">{project.stack.map(s => <span key={s}>{s}</span>)}</div></div><a className="round-arrow" href={project.github} target="_blank" rel="noreferrer" aria-label={`${project.title} on GitHub`}><ExternalLink size={18}/></a></div>
    <div className="project-visual"><div className="visual-window"><span/><span/><span/><div className="visual-lines"><i/><i/><i/><i/><i/></div></div><div className="visual-glow"/></div>
  </article>
}

function TimelineItem({year, role, company, location, text, current}) {
  return <article className="timeline-item reveal"><div className="timeline-year">{year}</div><div className="timeline-marker">{current && <i/>}</div><div className="timeline-content"><p>{location}</p><h3>{role}</h3><h4>{company}</h4><span>{text}</span></div></article>
}

createRoot(document.getElementById('root')).render(<App />);
