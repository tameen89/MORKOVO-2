import { useRef, useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import {
  ArrowDown, ArrowDownRight, ArrowRight, ArrowUpRight, Menu, X,
  Megaphone, Bot, Code2, ShoppingBag, Search, Palette, ChevronLeft,
  ChevronRight, Plus, Mail, MoveUpRight
} from 'lucide-react'

const services = [
  { number: '01', title: 'Branding & Design', text: 'Build a distinctive identity that makes your business recognizable, consistent and memorable.', icon: Palette, tags: 'Strategy · Identity · Creative' },
  { number: '02', title: 'Digital Marketing', text: 'Reach the right audience with thoughtful campaigns designed to turn attention into meaningful growth.', icon: Megaphone, tags: 'SEO · Paid Ads · Growth' },
  { number: '03', title: 'AI Agent Development', text: 'Put repetitive work on autopilot with AI agents shaped around the way your business actually works.', icon: Bot, tags: 'Automation · AI Agents · Workflows' },
  { number: '04', title: 'Web Development', text: 'Create a clear, considered digital experience that works beautifully across every screen.', icon: Code2, tags: 'Websites · UX · Development' },
  { number: '05', title: 'eBay & Etsy Management', text: 'Make your online store easier to manage with considered marketplace support and optimization.', icon: ShoppingBag, tags: 'Marketplace · Store · Optimization' },
]

const projects = [
  { number: '01', title: 'Your next success story', category: 'Branding & Creative', status: 'Project slot available', tone: 'project-one' },
  { number: '02', title: 'A better way to grow', category: 'Digital Marketing', status: 'Project slot available', tone: 'project-two' },
  { number: '03', title: 'Work smarter with AI', category: 'AI & Automation', status: 'Project slot available', tone: 'project-three' },
  { number: '04', title: 'A digital experience that works', category: 'Web Development', status: 'Project slot available', tone: 'project-four' },
]

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } }
}

function SectionLabel({ children }) {
  return <div className="section-label"><span />{children}</div>
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeService, setActiveService] = useState(0)
  const [activeProject, setActiveProject] = useState(0)
  const projectTrack = useRef(null)
  const reduceMotion = useReducedMotion()

  const moveProjects = (direction) => {
    if (!projectTrack.current) return
    const amount = Math.min(projectTrack.current.clientWidth * 0.78, 560)
    projectTrack.current.scrollBy({ left: direction * amount, behavior: reduceMotion ? 'auto' : 'smooth' })
    setActiveProject((current) => Math.max(0, Math.min(projects.length - 1, current + direction)))
  }

  const closeMenu = () => setMenuOpen(false)

  return (
    <div className="site-shell">
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />
      <header className="header">
        <a className="brand" href="#home" aria-label="MORKOVO home" onClick={closeMenu}>
          <img src="/images/morkovo-logo.jpg" alt="MORKOVO logo" />
          <span>MORKOVO</span>
        </a>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
        <nav className={`nav ${menuOpen ? 'nav-open' : ''}`}>
          <a href="#home" onClick={closeMenu}>Home</a>
          <a href="#services" onClick={closeMenu}>Services</a>
          <a href="#about" onClick={closeMenu}>About</a>
          <a href="#case-studies" onClick={closeMenu}>Case Studies</a>
          <a href="#ai-solutions" onClick={closeMenu}>AI Solutions</a>
          <a href="#contact" onClick={closeMenu}>Contact</a>
          <a className="nav-cta mobile-cta" href="#contact" onClick={closeMenu}>Book a Free Call <ArrowUpRight size={15}/></a>
        </nav>
        <a className="nav-cta desktop-cta" href="#contact">Book a Free Call <ArrowUpRight size={15}/></a>
      </header>

      <main>
        <section className="hero section-wrap" id="home">
          <motion.div className="hero-copy" initial="hidden" animate="visible" variants={fadeUp}>
            <div className="eyebrow"><span className="eyebrow-line" /> DIGITAL MARKETING <i>·</i> AI AGENT DEVELOPMENT</div>
            <h1>Grow your business.<br /><span>Not your workload.</span></h1>
            <p className="hero-subtitle">Marketing that grows your business.<br className="desktop-break"/> AI that carries the load.</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#contact">Book a Free Call <ArrowUpRight size={17}/></a>
              <a className="button button-outline" href="#services">Explore Services <ArrowRight size={17}/></a>
            </div>
            <a className="scroll-cue" href="#intro"><span className="scroll-icon"><ArrowDown size={15}/></span> Scroll to explore</a>
          </motion.div>
          <motion.div className="hero-art" initial={{ opacity: 0, x: 28 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: .9, delay: .15 }}>
            <div className="art-orbit orbit-a" />
            <div className="art-orbit orbit-b" />
            <div className="art-core"><div className="core-ring" /><span>M</span></div>
            <div className="art-caption caption-top">CREATIVE THINKING<br/>MEETS SMARTER SYSTEMS</div>
            <div className="art-caption caption-bottom">STRATEGY / DESIGN / TECHNOLOGY</div>
            <div className="art-dot dot-one" /><div className="art-dot dot-two" /><div className="art-dot dot-three" />
          </motion.div>
        </section>

        <section className="intro section-wrap" id="intro">
          <div className="intro-heading">
            <SectionLabel>WHY MORKOVO</SectionLabel>
            <h2>You built a business.<br/><span>Not a to-do list.</span></h2>
          </div>
          <div className="intro-copy">
            <p>We bring creative thinking, digital growth and practical AI together to make business feel simpler — and work harder for you.</p>
            <a className="text-link" href="#about">Get to know us <ArrowUpRight size={16}/></a>
          </div>
        </section>

        <section className="services section-wrap" id="services">
          <div className="section-topline">
            <div><SectionLabel>WHAT WE DO</SectionLabel><h2>Strategy. Creativity.<br/><span>Technology.</span></h2></div>
            <p className="section-intro">End-to-end digital solutions to help your business grow smarter, move faster and stand out for the right reasons.</p>
          </div>
          <div className="service-list">
            {services.map((service, index) => {
              const Icon = service.icon
              const expanded = activeService === index
              return (
                <motion.button
                  className={`service-row ${expanded ? 'service-active' : ''}`}
                  key={service.number}
                  onMouseEnter={() => setActiveService(index)}
                  onFocus={() => setActiveService(index)}
                  onClick={() => setActiveService(index)}
                  whileTap={{ scale: .995 }}
                  aria-expanded={expanded}
                >
                  <span className="service-number">{service.number}</span>
                  <span className="service-icon"><Icon size={22} strokeWidth={1.5}/></span>
                  <span className="service-main">
                    <span className="service-title">{service.title}</span>
                    <span className="service-description">{service.text}</span>
                    <span className="service-tags">{service.tags}</span>
                  </span>
                  <span className="service-arrow"><ArrowUpRight size={21}/></span>
                </motion.button>
              )
            })}
          </div>
        </section>

        <section className="ai-band section-wrap" id="ai-solutions">
          <div className="ai-panel">
            <div className="ai-copy">
              <SectionLabel>AI THAT WORKS FOR YOU</SectionLabel>
              <h2>Less busywork.<br/><span>More room to grow.</span></h2>
              <p>From website conversations to booking workflows, we build AI agents around your business — not one-size-fits-all bots.</p>
              <a className="button button-light" href="#contact">Explore AI solutions <ArrowUpRight size={17}/></a>
            </div>
            <div className="ai-visual" aria-hidden="true">
              <div className="ai-grid" />
              <div className="ai-node node-main"><Bot size={34}/><span>AI AGENT</span></div>
              <div className="ai-node node-small node-a">LEADS</div>
              <div className="ai-node node-small node-b">BOOKINGS</div>
              <div className="ai-node node-small node-c">SUPPORT</div>
              <div className="ai-connector connector-a"/><div className="ai-connector connector-b"/><div className="ai-connector connector-c"/>
            </div>
          </div>
        </section>

        <section className="case-section section-wrap" id="case-studies">
          <div className="case-heading">
            <div><SectionLabel>SELECTED WORK</SectionLabel><h2>Good work.<br/><span>Real impact.</span></h2></div>
            <div className="case-controls">
              <a className="text-link" href="#contact">Discuss a project <ArrowUpRight size={16}/></a>
              <button className="circle-control" onClick={() => moveProjects(-1)} aria-label="Previous projects"><ChevronLeft size={19}/></button>
              <button className="circle-control" onClick={() => moveProjects(1)} aria-label="Next projects"><ChevronRight size={19}/></button>
            </div>
          </div>
          <p className="case-note">A space for the work we're proud to share. Project details will be added when supplied by the client.</p>
          <div className="project-track" ref={projectTrack}>
            {projects.map((project, index) => (
              <article className={`project-card ${project.tone}`} key={project.number} onMouseEnter={() => setActiveProject(index)}>
                <div className="project-art">
                  <span className="project-index">{project.number} / 04</span>
                  <div className="placeholder-mark"><span>{project.number}</span><i /></div>
                  <span className="project-status">{project.status}</span>
                  <span className="project-plus"><Plus size={19}/></span>
                </div>
                <div className="project-meta">
                  <div><span className="project-category">{project.category}</span><h3>{project.title}</h3></div>
                  <ArrowUpRight size={20}/>
                </div>
              </article>
            ))}
          </div>
          <div className="case-bottom"><span>DRAG OR SWIPE TO EXPLORE</span><div className="case-progress"><span style={{ width: `${((activeProject + 1) / projects.length) * 100}%` }}/></div><a href="#contact">Have a project for us? <ArrowUpRight size={14}/></a></div>
        </section>

        <section className="about section-wrap" id="about">
          <div className="about-mark">M.</div>
          <div className="about-content">
            <SectionLabel>A LITTLE ABOUT US</SectionLabel>
            <h2>Creative by nature.<br/><span>Strategic by design.</span></h2>
            <p>MORKOVO is a creative design and AI-powered marketing agency that transforms ideas into impactful brands, helping businesses grow, innovate and lead with confidence.</p>
            <a className="text-link" href="#contact">Let's make something meaningful <ArrowUpRight size={16}/></a>
          </div>
        </section>

        <section className="process section-wrap">
          <SectionLabel>HOW WE WORK</SectionLabel>
          <div className="process-grid">
            {[
              ['01', 'Understand', 'We learn about your business, goals and the people you want to reach.'],
              ['02', 'Plan', 'We shape a focused approach that connects the right ideas to the right outcomes.'],
              ['03', 'Create', 'We bring the strategy to life through thoughtful design, technology and execution.'],
              ['04', 'Improve', 'We learn, refine and help your business keep moving forward.']
            ].map(([num, title, text]) => <div className="process-item" key={num}><span>{num}</span><h3>{title}</h3><p>{text}</p></div>)}
          </div>
        </section>

        <section className="contact section-wrap" id="contact">
          <div className="contact-panel">
            <SectionLabel>YOUR NEXT MOVE</SectionLabel>
            <h2>Let's grow<br/><span>something good.</span></h2>
            <p>Tell us what you're building. We'll help you explore what's possible.</p>
            <a className="button button-primary" href="mailto:hello@morkovo.com?subject=Let's%20talk%20MORKOVO">Start a conversation <ArrowUpRight size={17}/></a>
          </div>
        </section>
      </main>

      <footer className="footer section-wrap">
        <a className="brand footer-brand" href="#home"><img src="/images/morkovo-logo.jpg" alt="MORKOVO logo"/><span>MORKOVO</span></a>
        <span className="footer-line">Creative thinking. Smarter growth.</span>
        <div className="footer-links"><a href="#services">Services</a><a href="#case-studies">Case Studies</a><a href="#about">About</a><a href="#contact">Contact</a></div>
        <span className="copyright">© {new Date().getFullYear()} MORKOVO. All rights reserved.</span>
      </footer>
    </div>
  )
}

export default App
