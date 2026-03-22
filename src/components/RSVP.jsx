import Section from './Section';
import RSVPForm from './RSVPForm';

export default function RSVP() {
  return (
    <Section id="rsvp" title="Konfirmasi Kehadiran" arabic="الرجاء التأكيد">
      <div className="card-glass" style={{ padding: '32px 24px' }}>
        <p
          style={{
            textAlign: 'center',
            color: '#F5ECD799',
            fontSize: '0.88rem',
            lineHeight: 1.7,
            marginBottom: 24,
            fontFamily: "'Lato', sans-serif",
          }}
        >
          Kami dengan penuh suka cita mengundang seluruh keluarga dan kerabat
          untuk hadir dalam acara silaturahmi yang penuh berkah ini.
        </p>
        <RSVPForm />
      </div>
    </Section>
  );
}
