import { GOOGLE_MAPS_URL } from '../constants';
import Section from './Section';

const INFO_ITEMS = [
  { icon: '🗓', label: 'Tanggal', val: 'Senin, 23 Maret 2026' },
  { icon: '🕗', label: 'Waktu', val: '10.00 WIB – Selesai' },
  {
    icon: '📍',
    label: 'Lokasi',
    val: 'Kediaman Teh Lusi, Kebun Sawit Cijeuray, Bogor, Jawa Barat',
  },
  { icon: '👨‍👩‍👧‍👦', label: 'Dress Code', val: 'Bebas Sopan' },
];

export default function Lokasi() {
  return (
    <Section id="lokasi" title="Lokasi Acara" arabic="الموقع">
      <div
        className="card-glass"
        style={{ overflow: 'hidden', borderRadius: 16 }}
      >
        {/* Map visual */}
        <div
          style={{
            width: '100%',
            height: 220,
            background: 'linear-gradient(135deg, #122b1e, #1a3a2a)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 12,
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          {/* Grid pattern */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              backgroundImage:
                'linear-gradient(#C9A84C11 1px, transparent 1px), linear-gradient(90deg, #C9A84C11 1px, transparent 1px)',
              backgroundSize: '32px 32px',
            }}
          />
          <span style={{ fontSize: '2.5rem', position: 'relative' }}>📍</span>
          <p
            style={{
              color: '#F5ECD7cc',
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: '1.1rem',
              position: 'relative',
            }}
          >
            Cigudeg, Bogor, Jawa Barat
          </p>
          <a
            href={GOOGLE_MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              background: 'linear-gradient(90deg, #C9A84C, #e0c060)',
              color: '#0a1f15',
              border: 'none',
              borderRadius: 24,
              padding: '9px 24px',
              fontFamily: "'Lato', sans-serif",
              fontWeight: 700,
              fontSize: '0.75rem',
              letterSpacing: 2,
              textTransform: 'uppercase',
              cursor: 'pointer',
              textDecoration: 'none',
              position: 'relative',
            }}
          >
            Buka Google Maps
          </a>
        </div>

        {/* Info list */}
        <div style={{ padding: '20px 24px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {INFO_ITEMS.map((item) => (
              <div
                key={item.label}
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: 12,
                  borderBottom: '1px solid #C9A84C11',
                  paddingBottom: 10,
                }}
              >
                <span style={{ fontSize: '1rem', minWidth: 24 }}>
                  {item.icon}
                </span>
                <div>
                  <p
                    style={{
                      color: '#C9A84C',
                      fontSize: '0.65rem',
                      letterSpacing: 2,
                      textTransform: 'uppercase',
                    }}
                  >
                    {item.label}
                  </p>
                  <p
                    style={{
                      color: '#F5ECD7cc',
                      fontSize: '0.9rem',
                      marginTop: 2,
                    }}
                  >
                    {item.val}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
