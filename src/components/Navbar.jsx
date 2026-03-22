import { useState, useEffect } from 'react';

const NAV_LINKS = ['acara', 'countdown', 'rsvp', 'ucapan', 'lokasi'];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [navOpen, setNavOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setNavOpen(false);
  };

  return (
    <>
      <nav
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          background: scrolled ? '#0a1f15ee' : 'transparent',
          backdropFilter: scrolled ? 'blur(12px)' : 'none',
          borderBottom: scrolled ? '1px solid #C9A84C22' : 'none',
          transition: 'all 0.3s',
          padding: '16px 24px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <span
          style={{
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            color: '#C9A84C',
            fontSize: '1.1rem',
            letterSpacing: 3,
            fontWeight: 600,
          }}
        >
          ❋ Halal Bihalal
        </span>

        {/* Desktop links */}
        <div className="hidden sm:flex gap-10">
          {NAV_LINKS.map((id) => (
            <span key={id} className="nav-link" onClick={() => scrollTo(id)}>
              {id}
            </span>
          ))}
        </div>

        {/* Mobile hamburger */}
        <button
          className="sm:hidden"
          onClick={() => setNavOpen(!navOpen)}
          style={{
            background: 'none',
            border: 'none',
            color: '#C9A84C',
            fontSize: '1.3rem',
            cursor: 'pointer',
          }}
        >
          ☰
        </button>
      </nav>

      {/* Mobile dropdown */}
      {navOpen && (
        <div
          style={{
            position: 'fixed',
            top: 56,
            left: 0,
            right: 0,
            zIndex: 99,
            background: '#0a1f15f5',
            padding: '20px 24px',
            display: 'flex',
            flexDirection: 'column',
            gap: 16,
            borderBottom: '1px solid #C9A84C22',
          }}
        >
          {NAV_LINKS.map((id) => (
            <span key={id} className="nav-link" onClick={() => scrollTo(id)}>
              {id}
            </span>
          ))}
        </div>
      )}
    </>
  );
}
