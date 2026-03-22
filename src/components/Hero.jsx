import { BISMILLAH, ORNAMENT_SVG } from '../constants';

export default function Hero({ onRSVPClick }) {
  return (
    <section
      id="acara"
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        padding: '100px 24px 60px',
        textAlign: 'center',
        overflow: 'hidden',
      }}
    >
      {/* Background radial gradients */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage:
            'radial-gradient(circle at 20% 30%, #1a3a2a55 0%, transparent 60%), radial-gradient(circle at 80% 70%, #2d5a3d33 0%, transparent 60%)',
          pointerEvents: 'none',
        }}
      />

      {/* Ornament top-right */}
      <div
        className="rotate-slow"
        style={{
          position: 'absolute',
          top: 80,
          right: '10%',
          opacity: 0.3,
          pointerEvents: 'none',
        }}
        dangerouslySetInnerHTML={{ __html: ORNAMENT_SVG }}
      />

      {/* Ornament bottom-left */}
      <div
        style={{
          position: 'absolute',
          bottom: 60,
          left: '5%',
          opacity: 0.2,
          pointerEvents: 'none',
          transform: 'scale(0.7)',
        }}
        dangerouslySetInnerHTML={{ __html: ORNAMENT_SVG }}
      />

      {/* Bismillah */}
      <p
        className="fade-up fade-up-1"
        style={{
          fontFamily: 'serif',
          fontSize: '2rem',
          color: '#C9A84C',
          marginBottom: 8,
          opacity: 0.85,
        }}
      >
        {BISMILLAH}
      </p>
      <p
        className="fade-up fade-up-1"
        style={{
          color: '#C9A84C99',
          fontSize: '0.7rem',
          letterSpacing: 4,
          textTransform: 'uppercase',
          marginBottom: 20,
        }}
      >
        Dengan nama Allah Yang Maha Pengasih lagi Maha Penyayang
      </p>

      {/* Title */}
      <h1
        className="fade-up fade-up-2"
        style={{
          fontFamily: "'Cormorant Garamond', Georgia, serif",
          fontSize: 'clamp(2.2rem, 7vw, 4rem)',
          fontWeight: 700,
          color: '#F5ECD7',
          lineHeight: 1.15,
          marginBottom: 12,
        }}
      >
        Halal Bihalal
        <br />
        <span style={{ color: '#C9A84C' }}>
          Keluarga Besar Hj. Sudarta Bin Sudarya
        </span>
      </h1>

      {/* Divider line */}
      <div
        className="fade-up fade-up-2"
        style={{
          width: 80,
          height: 1.5,
          background:
            'linear-gradient(90deg, transparent, #C9A84C, transparent)',
          margin: '18px auto',
        }}
      />

      {/* Ayat */}
      <p
        className="fade-up fade-up-3"
        style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: '1.05rem',
          color: '#F5ECD7aa',
          fontStyle: 'italic',
          maxWidth: 400,
          lineHeight: 1.7,
          marginBottom: 28,
        }}
      >
        "Dan berpeganglah kamu semuanya kepada tali (agama) Allah, dan janganlah
        kamu bercerai-berai."
        <br />
        <span style={{ color: '#C9A84C88', fontSize: '0.8rem' }}>
          — QS. Ali Imran: 103
        </span>
      </p>

      {/* Info card */}
      <div
        className="fade-up fade-up-3 card-glass"
        style={{
          display: 'inline-flex',
          flexDirection: 'column',
          alignItems: 'center',
          padding: '18px 32px',
          gap: 6,
          marginBottom: 32,
        }}
      >
        <p
          style={{
            color: '#C9A84C',
            fontSize: '0.7rem',
            letterSpacing: 3,
            textTransform: 'uppercase',
          }}
        >
          Senin, 23 Maret 2026
        </p>
        <p style={{ color: '#F5ECD7cc', fontSize: '1rem' }}>
          📍 Cigudeg, Bogor, Jawa Barat
        </p>
      </div>

      {/* CTA Button */}
      <button
        className="fade-up fade-up-4"
        onClick={onRSVPClick}
        style={{
          background: 'linear-gradient(90deg, #C9A84C, #e0c060)',
          color: '#0a1f15',
          border: 'none',
          borderRadius: 30,
          padding: '13px 36px',
          fontFamily: "'Lato', sans-serif",
          fontWeight: 700,
          fontSize: '0.8rem',
          letterSpacing: 3,
          textTransform: 'uppercase',
          cursor: 'pointer',
          boxShadow: '0 4px 24px #C9A84C44',
          transition: 'transform 0.2s, box-shadow 0.2s',
        }}
        onMouseOver={(e) => {
          e.currentTarget.style.transform = 'translateY(-2px)';
          e.currentTarget.style.boxShadow = '0 8px 32px #C9A84C66';
        }}
        onMouseOut={(e) => {
          e.currentTarget.style.transform = 'translateY(0)';
          e.currentTarget.style.boxShadow = '0 4px 24px #C9A84C44';
        }}
      >
        Konfirmasi Kehadiran
      </button>

      {/* Scroll indicator */}
      <div
        style={{
          position: 'absolute',
          bottom: 28,
          left: '50%',
          transform: 'translateX(-50%)',
          animation: 'pulse 2s infinite',
        }}
      >
        <span style={{ color: '#C9A84C55', fontSize: '1.2rem' }}>↓</span>
      </div>
    </section>
  );
}
