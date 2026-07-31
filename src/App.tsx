import bgImage from '@/imports/backround_for_devxeno.png'
import profileImage from '@/imports/98b1277753f984317610b1568f49f7f4-1.jpg'

export default function App() {
  return (
    <div
      className="relative flex items-center justify-center overflow-hidden"
      style={{
        width: '100vw',
        height: '100vh',
        backgroundImage: `url(${bgImage})`,
        backgroundSize: '100% 100%',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Vignette overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse at center, rgba(0,0,0,0.15) 0%, rgba(0,0,0,0.55) 100%)',
        }}
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center gap-7 px-6 text-center">

        {/* Profile image ring */}
        <div className="relative">
          {/* Glowing conic ring */}
          <div
            className="absolute -inset-[3px] rounded-full"
            style={{
              background:
                'conic-gradient(from 180deg, rgba(255,255,255,0.75), rgba(255,255,255,0.06), rgba(255,255,255,0.75))',
            }}
          />
          {/* Avatar */}
          <div className="relative w-48 h-48 rounded-full overflow-hidden">
            <img
              src={profileImage}
              alt="Mr Xeno — astronaut"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                objectPosition: '55% 32%',
              }}
            />
          </div>
        </div>

        {/* Handle */}
        <p
          className="text-xs font-medium tracking-[0.35em] uppercase"
          style={{ color: 'rgba(255,255,255,0.4)', fontFamily: "'Orbitron', sans-serif" }}
        >
          Mr Xeno
        </p>

        {/* Tagline */}
        <h1
          style={{
            fontFamily: "'Orbitron', sans-serif",
            fontWeight: 400,
            fontSize: 'clamp(0.85rem, 2.2vw, 1.3rem)',
            lineHeight: 1.6,
            color: 'rgba(255,255,255,0.88)',
            letterSpacing: '0.06em',
            maxWidth: '560px',
          }}
        >
          Full‑Stack &amp; Web Developer
          <br />
          <span
            style={{
              fontWeight: 700,
              background: 'linear-gradient(90deg, #ffffff 0%, rgba(255,255,255,0.55) 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Architecting Modern Systems
          </span>
        </h1>

        {/* Divider */}
        <div
          className="w-12 h-px"
          style={{
            background:
              'linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)',
          }}
        />

        {/* Social icons */}
        <div className="flex items-center gap-5">
          {/* GitHub */}
          <a
            href="https://github.com/DeveloperXXeno"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="flex items-center justify-center w-16 h-16 rounded-full transition-all duration-200"
            style={{
              border: '1px solid rgba(255,255,255,0.15)',
              background: 'rgba(255,255,255,0.04)',
              backdropFilter: 'blur(6px)',
            }}
            onMouseEnter={e => {
              const el = e.currentTarget as HTMLAnchorElement
              el.style.borderColor = 'rgba(255,255,255,0.45)'
              el.style.background = 'rgba(255,255,255,0.10)'
            }}
            onMouseLeave={e => {
              const el = e.currentTarget as HTMLAnchorElement
              el.style.borderColor = 'rgba(255,255,255,0.15)'
              el.style.background = 'rgba(255,255,255,0.04)'
            }}
          >
            <svg width="26" height="26" viewBox="0 0 24 24" fill="rgba(255,255,255,0.75)">
              <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.167 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.868-.013-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.004.071 1.532 1.032 1.532 1.032.892 1.529 2.341 1.087 2.912.831.091-.646.35-1.087.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.03-2.682-.103-.253-.447-1.27.098-2.647 0 0 .84-.269 2.75 1.026A9.578 9.578 0 0 1 12 6.836a9.59 9.59 0 0 1 2.504.337c1.909-1.295 2.747-1.026 2.747-1.026.547 1.377.203 2.394.1 2.647.641.698 1.028 1.591 1.028 2.682 0 3.841-2.337 4.687-4.565 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.579.688.481C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
            </svg>
          </a>

          {/* X */}
          <a
            href="https://x.com/developerxxeno"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="X — @developerxxeno"
            className="flex items-center justify-center w-16 h-16 rounded-full transition-all duration-200"
            style={{
              border: '1px solid rgba(255,255,255,0.15)',
              background: 'rgba(255,255,255,0.04)',
              backdropFilter: 'blur(6px)',
            }}
            onMouseEnter={e => {
              const el = e.currentTarget as HTMLAnchorElement
              el.style.borderColor = 'rgba(255,255,255,0.45)'
              el.style.background = 'rgba(255,255,255,0.10)'
            }}
            onMouseLeave={e => {
              const el = e.currentTarget as HTMLAnchorElement
              el.style.borderColor = 'rgba(255,255,255,0.15)'
              el.style.background = 'rgba(255,255,255,0.04)'
            }}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="rgba(255,255,255,0.75)">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.748l7.73-8.835L1.254 2.25H8.08l4.261 5.632 5.903-5.632zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  )
}
