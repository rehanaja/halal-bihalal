import { useState } from 'react';
import { supabase } from '../lib/supabase';

const inputStyle = {
  background: '#0d2318',
  border: '1px solid #C9A84C44',
  borderRadius: 8,
  color: '#F5ECD7',
  padding: '10px 14px',
  width: '100%',
  fontFamily: "'Lato', sans-serif",
  fontSize: '0.95rem',
  outline: 'none',
  marginTop: 6,
  transition: 'border 0.2s',
};

const labelStyle = {
  color: '#C9A84C',
  fontSize: '0.75rem',
  letterSpacing: 2,
  textTransform: 'uppercase',
  fontFamily: "'Lato', sans-serif",
};

function SuccessMessage({ nama }) {
  return (
    <div className="flex flex-col items-center py-10">
      <div style={{ color: '#C9A84C', fontSize: '3rem', marginBottom: 12 }}>
        ✓
      </div>
      <p
        style={{
          fontFamily: "'Cormorant Garamond', Georgia, serif",
          color: '#F5ECD7',
          fontSize: '1.3rem',
          textAlign: 'center',
        }}
      >
        Jazakallahu Khairan, <strong>{nama}</strong>!
        <br />
        <span style={{ color: '#C9A84C', fontSize: '0.95rem' }}>
          RSVP Anda telah kami terima.
        </span>
      </p>
    </div>
  );
}

export default function RSVPForm() {
  const [form, setForm] = useState({
    nama: '',
    jumlah: 1,
    hadir: 'hadir',
    pesan: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const { error } = await supabase.from('rsvp').insert({
        nama: form.nama,
        hadir: form.hadir === 'hadir',
        jumlah_tamu: Number(form.jumlah),
        pesan: form.pesan || null,
      });
      if (error) throw error;

      // Simpan ucapan juga jika ada pesan
      if (form.pesan) {
        await supabase.from('ucapan').insert({
          nama: form.nama,
          ucapan: form.pesan,
          hadir: form.hadir,
        });
      }
      setSubmitted(true);
    } catch (err) {
      alert('Gagal mengirim. Coba lagi ya!');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  if (submitted) return <SuccessMessage nama={form.nama} />;

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      {/* Nama */}
      <div>
        <label style={labelStyle}>Nama Lengkap</label>
        <input
          required
          style={inputStyle}
          value={form.nama}
          onChange={(e) => setForm({ ...form, nama: e.target.value })}
          placeholder="Masukkan nama Anda"
        />
      </div>

      {/* Konfirmasi kehadiran */}
      <div>
        <label style={labelStyle}>Konfirmasi Kehadiran</label>
        <div className="flex gap-3 mt-2">
          {['hadir', 'tidak hadir'].map((opt) => (
            <button
              type="button"
              key={opt}
              onClick={() => setForm({ ...form, hadir: opt })}
              style={{
                flex: 1,
                padding: '9px 0',
                borderRadius: 8,
                border:
                  form.hadir === opt
                    ? '1px solid #C9A84C'
                    : '1px solid #C9A84C44',
                background: form.hadir === opt ? '#C9A84C22' : 'transparent',
                color: form.hadir === opt ? '#C9A84C' : '#F5ECD799',
                fontFamily: "'Lato', sans-serif",
                fontSize: '0.85rem',
                letterSpacing: 1,
                cursor: 'pointer',
                textTransform: 'capitalize',
                transition: 'all 0.2s',
              }}
            >
              {opt === 'hadir' ? '✓ Hadir' : '✗ Tidak Hadir'}
            </button>
          ))}
        </div>
      </div>

      {/* Jumlah tamu */}
      <div>
        <label style={labelStyle}>Jumlah Tamu</label>
        <input
          type="number"
          min={1}
          max={20}
          style={inputStyle}
          value={form.jumlah}
          onChange={(e) => setForm({ ...form, jumlah: e.target.value })}
        />
      </div>

      {/* Pesan */}
      <div>
        <label style={labelStyle}>Ucapan / Pesan (opsional)</label>
        <textarea
          style={{ ...inputStyle, resize: 'vertical', minHeight: 80 }}
          value={form.pesan}
          onChange={(e) => setForm({ ...form, pesan: e.target.value })}
          placeholder="Tuliskan ucapan atau pesan Anda..."
        />
      </div>

      {/* Submit */}
      <button
        type="submit"
        disabled={loading}
        style={{
          background: loading
            ? '#C9A84C55'
            : 'linear-gradient(90deg, #C9A84C, #e0c060, #C9A84C)',
          color: '#1a3a2a',
          fontFamily: "'Lato', sans-serif",
          fontWeight: 700,
          letterSpacing: 3,
          fontSize: '0.85rem',
          textTransform: 'uppercase',
          border: 'none',
          borderRadius: 8,
          padding: '13px 0',
          cursor: loading ? 'not-allowed' : 'pointer',
          transition: 'opacity 0.2s',
          marginTop: 4,
        }}
      >
        {loading ? 'Mengirim...' : 'Konfirmasi Kehadiran'}
      </button>
    </form>
  );
}
