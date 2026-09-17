import { useState } from 'react'

const CDN = 'https://ula-gwk8zj9vwg.figweb.site/cdn-cgi/imagedelivery/s-dfVpmPR-aKHmwFNwAgnQ'

const IMAGES = {
  profile:  `${CDN}/ula-gwk8zj9vwg.figweb.site-9c8baeac3f024832956be3b066e64c3cebeb2220/public`,
  about:    `${CDN}/ula-gwk8zj9vwg.figweb.site-4e0d2649d44747eadb0cfe13ef6f3a39ff86b036/public`,
  skills:   `${CDN}/ula-gwk8zj9vwg.figweb.site-03fc056ed9915702c1c0936e3d161acd71e2bc22/public`,
  contact:  `${CDN}/ula-gwk8zj9vwg.figweb.site-5f62ab34163088f20ac0b04b367f090dc8c44ffa/public`,
  python:   `${CDN}/ula-gwk8zj9vwg.figweb.site-08fe8e4f68812fb3ec147218bd5062880dded4b0/h=224`,
  sql:      `${CDN}/ula-gwk8zj9vwg.figweb.site-b6c79c3f3dd81a9bcf6750f3091f19962844d565/h=304`,
  html:     `${CDN}/ula-gwk8zj9vwg.figweb.site-c04b456267d32cdb8d7257ec1f5b834df33cbc30/h=238`,
  css:      `${CDN}/ula-gwk8zj9vwg.figweb.site-63691d6bf6d233166812af7dcc2d5e78b9cb02c3/h=250`,
  c:        `${CDN}/ula-gwk8zj9vwg.figweb.site-a7843517f136215d12adb1f5c16d7c1ce0ea240c/h=278`,
  git:      `${CDN}/ula-gwk8zj9vwg.figweb.site-8b5f4e95705668e93fb5d196009fa95a42a566e8/h=288`,
  figma:    `${CDN}/ula-gwk8zj9vwg.figweb.site-d386cc87d113bd3c1ae1751dfad8e730c224939d/h=398`,
  instagram:`${CDN}/ula-gwk8zj9vwg.figweb.site-2ed43d29eaef94215af9384f2642fdedc373e755/w=180`,
  email:    `${CDN}/ula-gwk8zj9vwg.figweb.site-ed7fc6760c89edab65ce6761586d0b2684a0e70e/h=160`,
  linkedin: `${CDN}/ula-gwk8zj9vwg.figweb.site-8e2c6220f959f4a5fb018eeca9f502ea4fdd02cc/h=262`,
  github:   `${CDN}/ula-gwk8zj9vwg.figweb.site-57d54244b64ceab9ab9a045991994fa0c5c3fb51/h=220`,
}

const skills = [
  { name: 'Python', level: 'Strong',   img: IMAGES.python,  r1: '0 0 27px 0',       r2: '0 27px 0 0' },
  { name: 'SQL',    level: 'Strong',   img: IMAGES.sql,     r1: '0 0 27px 27px',    r2: '0 0 0 0' },
  { name: 'HTML',   level: 'Beginner', img: IMAGES.html,    r1: '0 0 27px 27px',    r2: '0 0 0 0' },
  { name: 'CSS',    level: 'Beginner', img: IMAGES.css,     r1: '0 0 0 27px',       r2: '27px 0 0 0' },
  { name: 'C',      level: 'Beginner', img: IMAGES.c,       r1: '0 27px 0 0',       r2: '27px 0 0 0' },
  { name: 'Git',    level: 'Beginner', img: IMAGES.git,     r1: '27px 27px 0 0',    r2: '0 0 27px 27px' },
  { name: 'Figma',  level: 'Beginner', img: IMAGES.figma,   r1: '27px 0 0 0',       r2: '0 0 0 27px' },
]

// Blob SVG used in hero section behind profile photo
function BlobShape({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 442 414"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
    >
      <path
        d="M169.451 1.0132C50.371 34.8225 62.6522 74.927 28.25 147.451C-8.75 225.451 -8.75 273.451 28.25 320.951C65.25 368.451 39.25 402.951 169.75 394.951C300.25 386.951 379.25 474.451 415.75 320.951C452.25 167.451 446.75 143.951 415.75 114.951C338.75 42.9506 373.75 52.4506 286.25 22.9506C255.298 12.5155 212.388 5.54095 169.233 1.00682"
        fill="#c51bf9"
        stroke="#6d7cff"
        strokeOpacity="0.6"
        strokeWidth="1"
      />
    </svg>
  )
}

// Decorative tall blob in about section
function TallBlob({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 217 606"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M120.12 55.2545C233.561 -86.7723 217.505 57.6696 211.145 370.936C197.743 413.497 160.033 512.981 116.412 570.432C61.8854 642.245 59.2678 617.522 17.1111 355.587C-25.0457 93.6522 14.3905 197.168 120.12 55.2545Z"
        fill="#ef78f5"
        stroke="rgba(0,0,0,0.2)"
        strokeWidth="1"
      />
    </svg>
  )
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div style={{ backgroundColor: '#0a0a0b', minHeight: '100dvh' }}>
      {/* ── Navigation ───────────────────────────────────────── */}
      <nav
        style={{ backgroundColor: '#0a0a0b' }}
        className="sticky top-0 z-50 w-full border-b border-white/5"
      >
        <div className="mx-auto flex max-w-[1440px] items-center justify-between px-6 py-4 md:px-12">
          {/* Logo */}
          <a href="#" className="text-2xl md:text-3xl font-bold leading-none select-none">
            <span style={{ color: '#bc9cf4' }}>Thejasri</span>
            <span style={{ color: '#9c34f2' }}>M</span>
          </a>

          {/* Desktop nav links */}
          <div className="hidden md:flex items-center gap-8 lg:gap-14">
            {['Home', 'About', 'Skills', 'Contact'].map((item) => (
              <a
                key={item}
                href={item === 'Home' ? '#' : `#${item.toLowerCase()}`}
                className="text-white text-xl lg:text-2xl font-light hover:opacity-70 transition-opacity"
              >
                {item}
              </a>
            ))}
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span
              className="block h-0.5 w-6 bg-white transition-transform duration-300"
              style={{ transform: menuOpen ? 'translateY(8px) rotate(45deg)' : '' }}
            />
            <span
              className="block h-0.5 w-6 bg-white transition-opacity duration-300"
              style={{ opacity: menuOpen ? 0 : 1 }}
            />
            <span
              className="block h-0.5 w-6 bg-white transition-transform duration-300"
              style={{ transform: menuOpen ? 'translateY(-8px) rotate(-45deg)' : '' }}
            />
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div
            style={{ backgroundColor: '#0a0a0b' }}
            className="md:hidden border-t border-white/5 px-6 pb-4 flex flex-col gap-4"
          >
            {['Home', 'About', 'Skills', 'Contact'].map((item) => (
              <a
                key={item}
                href={item === 'Home' ? '#' : `#${item.toLowerCase()}`}
                className="text-white text-xl font-light py-1"
                onClick={() => setMenuOpen(false)}
              >
                {item}
              </a>
            ))}
          </div>
        )}
      </nav>

      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="relative w-full max-w-[1440px] mx-auto overflow-hidden">
        <div className="flex flex-col md:flex-row items-center min-h-[80vh] px-6 md:px-14 py-16 md:py-20 gap-10 md:gap-0">
          {/* Left: text */}
          <div className="flex-1 flex flex-col gap-6 z-10">
            <p
              className="text-5xl md:text-6xl lg:text-7xl font-light leading-tight"
              style={{ color: '#f4b9ec' }}
            >
              Hi, I'm
            </p>

            <h1 className="leading-none font-bold" style={{ fontSize: 'clamp(64px, 9vw, 128px)' }}>
              <span style={{ color: '#ef75eb' }}>Thejasri</span>
              <span style={{ color: '#ffffff' }}> </span>
              <span style={{ color: '#f219e4' }}>M</span>
            </h1>

            <p
              className="text-xl md:text-2xl font-bold max-w-xl leading-relaxed"
              style={{ color: '#f8eff7' }}
            >
              First-year Computer Science student | SRMIST
              <br className="hidden sm:block" /> Aspiring Software Developer
            </p>

            <a
              href="#contact"
              style={{ backgroundColor: '#bfadf4', borderRadius: '20px', color: '#000' }}
              className="inline-flex items-center justify-center w-fit px-10 py-4 text-3xl md:text-4xl font-bold hover:opacity-90 transition-opacity mt-2"
            >
              Let's Talk
            </a>
          </div>

          {/* Right: profile photo with blob */}
          <div className="relative flex-shrink-0 flex items-center justify-center w-[340px] md:w-[460px] lg:w-[540px]">
            {/* Blob behind photo */}
            <BlobShape className="absolute inset-0 w-full h-full opacity-90" />
            <img
              src={IMAGES.profile}
              alt="Thejasri M"
              className="relative z-10 w-full object-contain"
              style={{ maxHeight: '580px' }}
              fetchPriority="high"
            />
          </div>
        </div>
      </section>

      {/* ── About ────────────────────────────────────────────── */}
      <section id="about" className="w-full max-w-[1440px] mx-auto px-6 md:px-14 py-16 md:py-24 overflow-hidden">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Left: photo with blob */}
          <div className="relative flex-shrink-0 w-[280px] md:w-[360px] lg:w-[420px]">
            <TallBlob className="absolute -right-8 top-0 h-[80%] opacity-80" />
            <img
              src={IMAGES.about}
              alt="About Thejasri M"
              className="relative z-10 w-full object-contain rounded-2xl"
              fetchPriority="high"
            />
          </div>

          {/* Right: text + education */}
          <div className="flex-1 flex flex-col gap-8">
            {/* Heading */}
            <h2 className="font-medium leading-none" style={{ fontSize: 'clamp(64px, 8vw, 128px)' }}>
              <span style={{ color: '#a570ff' }}>About</span>
              <span style={{ color: '#fff' }}> </span>
              <span style={{ color: '#c0a1f5' }}>me</span>
            </h2>

            <p className="text-xl md:text-2xl font-normal leading-relaxed max-w-2xl" style={{ color: '#fff' }}>
              I'm a first-year B.Tech Computer Science and Engineering student at SRMIST with a growing
              interest in web development, data analytics, programming, and technology. I enjoy learning
              new skills, building creative projects, and exploring how technology can solve real-world
              problems.
            </p>

            {/* Education timeline */}
            <div className="flex flex-col gap-0 mt-4">
              {/* Schooling */}
              <div className="flex items-start gap-4">
                <div className="flex flex-col items-center mt-1">
                  <div
                    className="w-9 h-9 rounded-full flex-shrink-0"
                    style={{ backgroundColor: '#d9d9d9' }}
                  />
                  <div className="w-px flex-1 min-h-[80px]" style={{ backgroundColor: '#fff', opacity: 0.4 }} />
                </div>
                <div className="flex flex-col gap-2 pb-6">
                  <span className="text-white text-xl font-bold">Schooling</span>
                  <div
                    className="px-5 py-4"
                    style={{
                      backgroundColor: '#f7aef0',
                      borderRadius: '0 27px 27px 27px',
                    }}
                  >
                    <p className="font-bold text-2xl leading-tight" style={{ color: '#000' }}>
                      Sri RM Jain Vidyashram School
                    </p>
                    <p className="font-bold text-lg mt-1" style={{ color: '#000' }}>
                      Higher Secondary Education
                    </p>
                  </div>
                </div>
              </div>

              {/* Undergraduate */}
              <div className="flex items-start gap-4">
                <div className="flex flex-col items-center mt-1">
                  <div
                    className="w-9 h-9 rounded-full flex-shrink-0"
                    style={{ backgroundColor: '#a570ff' }}
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <span className="text-white text-xl font-bold">Undergraduate</span>
                  <div
                    className="px-5 py-4"
                    style={{
                      backgroundColor: '#f27ef4',
                      borderRadius: '0 27px 27px 27px',
                    }}
                  >
                    <p className="font-bold text-2xl leading-tight" style={{ color: '#000' }}>
                      SRMIST, Ramapuram
                    </p>
                    <p className="font-bold text-lg" style={{ color: '#000' }}>
                      B.Tech - CSE (Core)
                    </p>
                    <p className="font-bold text-base mt-0.5" style={{ color: '#000' }}>
                      Currently pursuing
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Skills ───────────────────────────────────────────── */}
      <section id="skills" className="w-full max-w-[1440px] mx-auto px-6 md:px-14 py-16 md:py-24">
        <h2 className="font-bold leading-none mb-12" style={{ fontSize: 'clamp(56px, 7vw, 96px)' }}>
          <span style={{ color: '#b90af9' }}>My</span>
          <span style={{ color: '#fff' }}> </span>
          <span style={{ color: '#cf6df3' }}>Skills</span>
        </h2>

        {/* Skills grid – two rows matching the original staggered layout */}
        <div className="flex flex-col gap-4">
          {/* Row 1: Python, SQL, HTML, CSS */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {skills.slice(0, 4).map((skill, i) => {
              const radii = ['0 0 27px 0', '0 0 27px 27px', '0 0 27px 27px', '0 0 0 27px']
              return (
                <div
                  key={skill.name}
                  className="flex flex-col items-center justify-end gap-2 pt-4 pb-3 px-3 relative overflow-hidden"
                  style={{
                    backgroundColor: '#ef9bec',
                    borderRadius: radii[i],
                    minHeight: '200px',
                  }}
                >
                  <img
                    src={skill.img}
                    alt={skill.name}
                    className="object-contain"
                    style={{ height: '100px', maxWidth: '100%' }}
                    loading="lazy"
                  />
                  <span className="font-medium text-xl text-black leading-none">{skill.name}</span>
                  <span className="font-medium text-lg text-black leading-none">{skill.level}</span>
                </div>
              )
            })}
          </div>

          {/* Row 2: C, Git, Figma — offset/staggered */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:mx-[calc(100%/8)]">
            {skills.slice(4).map((skill, i) => {
              const radii = ['0 27px 0 0', '27px 27px 0 0', '27px 0 0 0']
              return (
                <div
                  key={skill.name}
                  className="flex flex-col items-center justify-start gap-2 pt-3 pb-4 px-3 relative overflow-hidden"
                  style={{
                    backgroundColor: i === 2 ? '#f49cf1' : '#ef9bec',
                    borderRadius: radii[i],
                    minHeight: '200px',
                  }}
                >
                  <span className="font-medium text-xl text-black leading-none">{skill.name}</span>
                  <span className="font-medium text-lg text-black leading-none">{skill.level}</span>
                  <img
                    src={skill.img}
                    alt={skill.name}
                    className="object-contain mt-auto"
                    style={{ height: '110px', maxWidth: '100%' }}
                    loading="lazy"
                  />
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── Contact ──────────────────────────────────────────── */}
      <section id="contact" className="w-full max-w-[1440px] mx-auto px-6 md:px-14 py-16 md:py-24">
        <h2 className="font-bold leading-none mb-14" style={{ fontSize: 'clamp(56px, 8vw, 128px)' }}>
          <span style={{ color: '#f454cc' }}>Contact</span>
          <span style={{ color: '#fff' }}> </span>
          <span style={{ color: '#bb068e' }}>me</span>
        </h2>

        <div className="flex flex-col gap-8 max-w-3xl">
          {/* Instagram */}
          <a
            href="https://instagram.com/thejuuuu.07._"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-6 hover:opacity-75 transition-opacity"
          >
            <div className="flex-shrink-0 w-16 h-16 md:w-20 md:h-20 flex items-center justify-center">
              <img
                src={IMAGES.instagram}
                alt="Instagram"
                className="w-full h-full object-contain"
                loading="lazy"
              />
            </div>
            <span className="text-white text-2xl md:text-3xl lg:text-4xl font-medium">
              @thejuuuu.07._
            </span>
          </a>

          {/* Email */}
          <a
            href="mailto:thejasri2507@gmail.com"
            className="flex items-center gap-6 hover:opacity-75 transition-opacity"
          >
            <div className="flex-shrink-0 w-16 h-16 md:w-20 md:h-20 flex items-center justify-center">
              <img
                src={IMAGES.email}
                alt="Email"
                className="w-full h-full object-contain"
                loading="lazy"
              />
            </div>
            <span className="text-white text-2xl md:text-3xl lg:text-4xl font-medium">
              thejasri2507@gmail.com
            </span>
          </a>

          {/* LinkedIn */}
          <a
            href="https://linkedin.com/in/thejucodes"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-6 hover:opacity-75 transition-opacity"
          >
            <div className="flex-shrink-0 w-16 h-16 md:w-20 md:h-20 flex items-center justify-center">
              <img
                src={IMAGES.linkedin}
                alt="LinkedIn"
                className="w-full h-full object-contain"
                loading="lazy"
              />
            </div>
            <span className="text-white text-2xl md:text-3xl lg:text-4xl font-medium">
              linkedin.com/in/thejucodes
            </span>
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/thejucodes"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-6 hover:opacity-75 transition-opacity"
          >
            <div className="flex-shrink-0 w-16 h-16 md:w-20 md:h-20 flex items-center justify-center">
              <img
                src={IMAGES.github}
                alt="GitHub"
                className="w-full h-full object-contain"
                loading="lazy"
              />
            </div>
            <span className="text-white text-2xl md:text-3xl lg:text-4xl font-medium">
              github.com/thejucodes
            </span>
          </a>
        </div>
      </section>
    </div>
  )
}
