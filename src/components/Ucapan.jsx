import Section from './Section';
import UcapanCard from './UcapanCard';
import { useUcapan } from '../hooks/useUcapan';

export default function Ucapan() {
  const { data, loading, error } = useUcapan();

  return (
    <Section id="ucapan" title="Ucapan Lebaran" arabic="عيد مبارك">
      <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
        {/* Loading state */}
        {loading && (
          <p
            style={{
              color: '#C9A84C77',
              textAlign: 'center',
              fontFamily: "'Lato', sans-serif",
              fontSize: '0.85rem',
              letterSpacing: 2,
              padding: '20px 0',
            }}
          >
            Memuat ucapan...
          </p>
        )}

        {/* Error state */}
        {error && (
          <p
            style={{
              color: '#ff6b6b55',
              textAlign: 'center',
              fontFamily: "'Lato', sans-serif",
              fontSize: '0.85rem',
              padding: '20px 0',
            }}
          >
            Gagal memuat ucapan: {error}
          </p>
        )}

        {/* Empty state */}
        {!loading && !error && data.length === 0 && (
          <p
            style={{
              color: '#F5ECD733',
              textAlign: 'center',
              fontFamily: "'Lato', sans-serif",
              fontSize: '0.85rem',
              padding: '20px 0',
            }}
          >
            Belum ada ucapan. Jadilah yang pertama!
          </p>
        )}

        {/* Data from DB */}
        {data.map((u) => (
          <UcapanCard
            key={u.id}
            nama={u.nama}
            ucapan={u.ucapan}
            hadir={u.hadir}
          />
        ))}
      </div>

      <div
        style={{
          textAlign: 'center',
          marginTop: 20,
          padding: '20px',
          border: '1px dashed #C9A84C33',
          borderRadius: 12,
        }}
      >
        <p
          style={{
            color: '#C9A84C',
            fontSize: '0.75rem',
            letterSpacing: 2,
            textTransform: 'uppercase',
            marginBottom: 8,
          }}
        >
          Kirim Ucapan Anda
        </p>
        <p style={{ color: '#F5ECD755', fontSize: '0.85rem' }}>
          Isi form RSVP di atas untuk menambahkan ucapan Anda
        </p>
      </div>
    </Section>
  );
}
