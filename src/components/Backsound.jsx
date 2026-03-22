import { useState, useEffect, useRef } from 'react';

export default function Backsound() {
  const audioRef = useRef(null);
  const [playing, setPlaying] = useState(false);
  const [showModal, setShowModal] = useState(true);

  const handleEnter = async () => {
    try {
      await audioRef.current.play();
      setPlaying(true);
      setShowModal(false);
    } catch (err) {
      // Seharusnya tidak terjadi karena dipicu langsung dari klik user
      console.warn('Autoplay blocked:', err);
    }
  };

  const toggle = () => {
    const audio = audioRef.current;
    if (playing) {
      audio.pause();
    } else {
      audio.play();
    }
    setPlaying(!playing);
  };

  return (
    <>
      <audio ref={audioRef} src="/audio/backsound.mp3" loop preload="auto" />

      {/* Welcome modal */}
      {showModal && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 999,
            background: '#0a1f15ee',
            backdropFilter: 'blur(8px)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 24,
            padding: '0 24px',
          }}
        >
          <p
            style={{
              fontFamily: 'serif',
              color: '#C9A84C',
              fontSize: '2rem',
              opacity: 0.8,
            }}
          >
            بِسْمِ اللَّهِ
          </p>
          <p
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              color: '#F5ECD7',
              fontSize: '1.4rem',
              letterSpacing: 2,
              textAlign: 'center',
              lineHeight: 1.4,
            }}
          >
            Halal Bihalal
            <br />
            <span style={{ color: '#C9A84C' }}>Keluarga Besar</span>
          </p>
          <p
            style={{
              color: '#F5ECD788',
              fontSize: '0.88rem',
              fontFamily: "'Lato', sans-serif",
              textAlign: 'center',
              lineHeight: 1.7,
              maxWidth: 280,
            }}
          >
            Senin, 23 Maret 2026
            <br />
            <span style={{ color: '#C9A84C99' }}>
              📍 Cigudeg, Bogor, Jawa Barat
            </span>
          </p>

          {/* Tombol — klik ini yang trigger audio.play() */}
          <button
            onClick={handleEnter}
            style={{
              background: 'linear-gradient(90deg, #C9A84C, #e0c060)',
              color: '#0a1f15',
              border: 'none',
              borderRadius: 30,
              padding: '13px 40px',
              fontFamily: "'Lato', sans-serif",
              fontWeight: 700,
              fontSize: '0.8rem',
              letterSpacing: 3,
              textTransform: 'uppercase',
              cursor: 'pointer',
              boxShadow: '0 4px 24px #C9A84C44',
            }}
          >
            Buka Undangan ✦
          </button>

          <p
            style={{
              color: '#F5ECD733',
              fontSize: '0.7rem',
              fontFamily: "'Lato', sans-serif",
              letterSpacing: 2,
            }}
          >
            Tap untuk membuka dengan musik
          </p>
        </div>
      )}

      {/* Floating toggle — muncul setelah modal ditutup */}
      {!showModal && (
        <button
          onClick={toggle}
          title={playing ? 'Pause musik' : 'Putar musik'}
          style={{
            position: 'fixed',
            bottom: 28,
            right: 24,
            zIndex: 200,
            width: 48,
            height: 48,
            borderRadius: '50%',
            border: '1px solid #C9A84C',
            background: playing ? '#C9A84C22' : '#0a1f15',
            color: '#C9A84C',
            fontSize: '1.2rem',
            cursor: 'pointer',
            transition: 'all 0.3s',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: playing ? '0 0 20px #C9A84C44' : 'none',
          }}
        >
          {playing ? '⏸' : '▶'}
        </button>
      )}
    </>
  );
}
