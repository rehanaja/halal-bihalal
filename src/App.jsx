import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Countdown from './components/Countdown';
import RSVP from './components/RSVP';
import Ucapan from './components/Ucapan';
import Lokasi from './components/Lokasi';
import Footer from './components/Footer';
import Donasi from './components/Donasi';

function Divider({ opacity = '33' }) {
  return (
    <div
      style={{
        width: '100%',
        height: 1,
        background: `linear-gradient(90deg, transparent, #C9A84C${opacity}, transparent)`,
      }}
    />
  );
}

export default function App() {
  const scrollToRSVP = () =>
    document.getElementById('rsvp')?.scrollIntoView({ behavior: 'smooth' });

  return (
    <div
      style={{
        background: '#0a1f15',
        minHeight: '100vh',
        fontFamily: "'Lato', sans-serif",
        color: '#F5ECD7',
        overflowX: 'hidden',
      }}
    >
      {/* Google Fonts */}
      <link
        href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;0,700;1,400&family=Lato:wght@300;400;700&display=swap"
        rel="stylesheet"
      />

      <style>{`
        * { box-sizing: border-box; margin: 0; padding: 0; }
        body { background: #0a1f15; }
        ::-webkit-scrollbar { width: 4px; }
        ::-webkit-scrollbar-track { background: #0a1f15; }
        ::-webkit-scrollbar-thumb { background: #C9A84C55; border-radius: 4px; }
        input:focus, textarea:focus { border-color: #C9A84C !important; }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(30px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes rotateSlow {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
        @keyframes pulse {
          0%, 100% { opacity: 0.4; }
          50%       { opacity: 1; }
        }
        .fade-up   { animation: fadeUp 0.9s ease both; }
        .fade-up-1 { animation-delay: 0.1s; }
        .fade-up-2 { animation-delay: 0.3s; }
        .fade-up-3 { animation-delay: 0.5s; }
        .fade-up-4 { animation-delay: 0.7s; }
        .rotate-slow { animation: rotateSlow 20s linear infinite; }
        .nav-link {
          color: #F5ECD799;
          font-size: 0.75rem;
          letter-spacing: 2px;
          text-transform: uppercase;
          cursor: pointer;
          transition: color 0.2s;
          font-family: 'Lato', sans-serif;
        }
        .nav-link:hover { color: #C9A84C; }
        .card-glass {
          background: linear-gradient(135deg, #122b1e, #0d2318);
          border: 1px solid #C9A84C33;
          border-radius: 16px;
          backdrop-filter: blur(8px);
        }
        
      `}</style>

      <Navbar />
      <Hero onRSVPClick={scrollToRSVP} />
      <Divider opacity="33" />
      <Countdown />
      <Divider opacity="22" />
      <RSVP />
      <Divider opacity="22" />
      <Ucapan />
      <Divider opacity="22" />
      <Lokasi />
      <Donasi />
      <Footer />
    </div>
  );
}
