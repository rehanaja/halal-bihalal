export default function UcapanCard({ nama, ucapan, hadir }) {
  const isHadir = hadir === 'hadir';

  return (
    <div
      style={{
        background: '#0d2318',
        border: '1px solid rgba(201,168,76,.2)',
        borderRadius: 12,
        padding: '18px 20px',
        display: 'flex',
        flexDirection: 'column',
        gap: 10,
      }}
    >
      {/* Name row + hadir badge */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 8,
        }}
      >
        <span
          style={{
            color: '#C9A84C',
            fontSize: '0.75rem',
            letterSpacing: 2,
            textTransform: 'uppercase',
          }}
        >
          — {nama}
        </span>

        <span
          style={{
            fontSize: '0.65rem',
            letterSpacing: 1.5,
            textTransform: 'uppercase',
            fontFamily: "'Lato', sans-serif",
            padding: '3px 10px',
            borderRadius: 20,
            border: `1px solid ${isHadir ? 'rgba(74,180,120,.4)' : 'rgba(220,80,80,.3)'}`,
            background: isHadir ? 'rgba(74,180,120,.1)' : 'rgba(220,80,80,.08)',
            color: isHadir ? '#4ab478' : '#dc5050',
            whiteSpace: 'nowrap',
          }}
        >
          {isHadir ? '✓ Hadir' : '✗ Tidak Hadir'}
        </span>
      </div>

      {/* Ucapan text */}
      {ucapan && (
        <p
          style={{
            color: 'rgba(245,236,215,.8)',
            fontFamily: "'Lato', sans-serif",
            fontSize: '0.9rem',
            lineHeight: 1.6,
            fontStyle: 'italic',
          }}
        >
          "{ucapan}"
        </p>
      )}
    </div>
  );
}
