import Section from './Section';

// ── Ganti dengan URL gambar QR QRIS asli Anda ────────────────────────────────
// Cara: export QR dari aplikasi bank / GoPay / Dana / dll,
// upload ke imgbb.com (gratis), lalu paste URL-nya di bawah.
const QRIS_IMAGE_URL = null; // contoh: "https://i.ibb.co/xxxx/qris.png"

const MERCHANT_NAME = 'Keluarga Besar Halal Bihalal';

// ── QR Placeholder SVG (tampil saat QRIS_IMAGE_URL masih null) ───────────────
function QRPlaceholder() {
  return (
    <svg
      width="200"
      height="200"
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ display: 'block' }}
    >
      <rect width="200" height="200" fill="white" />

      {/* top-left finder */}
      <rect x="14" y="14" width="50" height="50" rx="4" fill="#1a3a2a" />
      <rect x="20" y="20" width="38" height="38" rx="2" fill="white" />
      <rect x="26" y="26" width="26" height="26" rx="1" fill="#1a3a2a" />

      {/* top-right finder */}
      <rect x="136" y="14" width="50" height="50" rx="4" fill="#1a3a2a" />
      <rect x="142" y="20" width="38" height="38" rx="2" fill="white" />
      <rect x="148" y="26" width="26" height="26" rx="1" fill="#1a3a2a" />

      {/* bottom-left finder */}
      <rect x="14" y="136" width="50" height="50" rx="4" fill="#1a3a2a" />
      <rect x="20" y="142" width="38" height="38" rx="2" fill="white" />
      <rect x="26" y="148" width="26" height="26" rx="1" fill="#1a3a2a" />

      {/* data dots */}
      {[
        [80, 14],
        [88, 14],
        [96, 14],
        [104, 14],
        [112, 14],
        [120, 14],
        [80, 22],
        [96, 22],
        [112, 22],
        [80, 30],
        [88, 30],
        [104, 30],
        [120, 30],
        [80, 38],
        [96, 38],
        [104, 38],
        [88, 46],
        [104, 46],
        [112, 46],
        [120, 46],
        [80, 54],
        [88, 54],
        [96, 54],
        [112, 54],
        [14, 80],
        [22, 80],
        [38, 80],
        [46, 80],
        [62, 80],
        [78, 80],
        [86, 80],
        [94, 80],
        [102, 80],
        [110, 80],
        [118, 80],
        [126, 80],
        [134, 80],
        [150, 80],
        [158, 80],
        [166, 80],
        [174, 80],
        [182, 80],
        [14, 88],
        [30, 88],
        [54, 88],
        [70, 88],
        [86, 88],
        [102, 88],
        [118, 88],
        [134, 88],
        [158, 88],
        [174, 88],
        [14, 96],
        [22, 96],
        [38, 96],
        [54, 96],
        [62, 96],
        [78, 96],
        [94, 96],
        [110, 96],
        [126, 96],
        [142, 96],
        [166, 96],
        [182, 96],
        [14, 104],
        [30, 104],
        [46, 104],
        [62, 104],
        [78, 104],
        [94, 104],
        [110, 104],
        [126, 104],
        [142, 104],
        [158, 104],
        [174, 104],
        [14, 112],
        [22, 112],
        [38, 112],
        [54, 112],
        [70, 112],
        [86, 112],
        [102, 112],
        [118, 112],
        [134, 112],
        [150, 112],
        [166, 112],
        [182, 112],
        [14, 120],
        [30, 120],
        [54, 120],
        [70, 120],
        [86, 120],
        [102, 120],
        [126, 120],
        [142, 120],
        [158, 120],
        [174, 120],
        [136, 136],
        [144, 136],
        [152, 136],
        [160, 136],
        [168, 136],
        [176, 136],
        [136, 144],
        [152, 144],
        [168, 144],
        [136, 152],
        [144, 152],
        [160, 152],
        [176, 152],
        [136, 160],
        [152, 160],
        [160, 160],
        [144, 168],
        [160, 168],
        [168, 168],
        [176, 168],
        [136, 176],
        [144, 176],
        [152, 176],
        [168, 176],
      ].map(([x, y], i) => (
        <rect key={i} x={x} y={y} width="6" height="6" fill="#1a3a2a" />
      ))}

      {/* center badge */}
      <rect x="82" y="82" width="36" height="36" rx="4" fill="white" />
      <text
        x="100"
        y="96"
        textAnchor="middle"
        fill="#1a3a2a"
        fontSize="8"
        fontFamily="sans-serif"
        fontWeight="bold"
      >
        QR
      </text>
      <text
        x="100"
        y="108"
        textAnchor="middle"
        fill="#C9A84C"
        fontSize="7"
        fontFamily="sans-serif"
        fontWeight="bold"
      >
        IS
      </text>
    </svg>
  );
}

export default function Donasi() {
  return (
    <Section id="donasi" title="Donasi untuk uang saweran" arabic="التبرع">
      <div
        className="card-glass"
        style={{
          padding: '32px 24px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 24,
        }}
      >
        {/* Ayat */}
        <div
          style={{
            textAlign: 'center',
            padding: '14px 20px',
            background: '#C9A84C0a',
            border: '1px solid #C9A84C22',
            borderRadius: 10,
            width: '100%',
          }}
        >
          <p
            style={{
              color: '#C9A84C55',
              fontSize: '0.7rem',
              fontFamily: "'Lato', sans-serif",
              marginTop: 4,
              letterSpacing: 1,
            }}
          >
            — QS. Al-Baqarah: 261
          </p>
        </div>

        {/* Scan label */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <div
            style={{
              width: 40,
              height: 1,
              background: 'linear-gradient(90deg, transparent, #C9A84C)',
            }}
          />
          <p
            style={{
              color: '#C9A84C',
              fontSize: '0.7rem',
              letterSpacing: 4,
              textTransform: 'uppercase',
              fontFamily: "'Lato', sans-serif",
            }}
          >
            Scan QRIS
          </p>
          <div
            style={{
              width: 40,
              height: 1,
              background: 'linear-gradient(90deg, #C9A84C, transparent)',
            }}
          />
        </div>

        {/* QR with gold gradient border */}
        <div
          style={{
            padding: 4,
            borderRadius: 22,
            background:
              'linear-gradient(135deg, #C9A84C, #e0c060, #C9A84C88, #C9A84C)',
            boxShadow: '0 0 48px #C9A84C44',
          }}
        >
          <div
            style={{
              background: 'white',
              borderRadius: 18,
              padding: 18,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            {QRIS_IMAGE_URL ? (
              <img
                src={QRIS_IMAGE_URL}
                alt="QRIS Donasi"
                style={{
                  width: 200,
                  height: 200,
                  display: 'block',
                  borderRadius: 6,
                }}
              />
            ) : (
              <QRPlaceholder />
            )}
          </div>
        </div>

        {/* Merchant name */}
        <div style={{ textAlign: 'center' }}>
          <p
            style={{
              color: '#F5ECD7cc',
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: '1.1rem',
              fontWeight: 600,
            }}
          >
            {MERCHANT_NAME}
          </p>
          <p
            style={{
              color: '#F5ECD755',
              fontSize: '0.75rem',
              fontFamily: "'Lato', sans-serif",
              marginTop: 6,
              letterSpacing: 1,
            }}
          >
            Berlaku untuk semua aplikasi bank &amp; dompet digital
          </p>
        </div>

        {/* Compatible app badges */}
        <div
          style={{
            display: 'flex',
            gap: 8,
            flexWrap: 'wrap',
            justifyContent: 'center',
          }}
        >
          {['🏦 Bank', '🟢 GoPay', '🟣 OVO', '🔵 Dana', '⚪ ShopeePay'].map(
            (app) => (
              <span
                key={app}
                style={{
                  background: '#0d2318',
                  border: '1px solid #C9A84C22',
                  borderRadius: 20,
                  padding: '5px 14px',
                  fontSize: '0.72rem',
                  color: '#F5ECD777',
                  fontFamily: "'Lato', sans-serif",
                }}
              >
                {app}
              </span>
            ),
          )}
        </div>

        {/* Closing dua */}
        <div
          style={{
            textAlign: 'center',
            padding: '16px 20px',
            background: '#C9A84C0d',
            border: '1px solid #C9A84C22',
            borderRadius: 12,
            width: '100%',
          }}
        >
          <p
            style={{
              color: '#C9A84C',
              fontFamily: 'serif',
              fontSize: '1.4rem',
              marginBottom: 6,
            }}
          >
            جَزَاكَ اللهُ خَيْرًا
          </p>
          <p
            style={{
              color: '#F5ECD766',
              fontSize: '0.78rem',
              fontFamily: "'Lato', sans-serif",
              letterSpacing: 1,
            }}
          >
            Jazakallahu Khairan — Semoga Allah membalas kebaikan Anda
          </p>
        </div>
      </div>
    </Section>
  );
}
