import { useCountdown } from '../hooks/useCountdown';
import { TARGET_DATE } from '../constants';
import CountBox from './CountBox';
import Section from './Section';

export default function Countdown() {
  const countdown = useCountdown(TARGET_DATE);

  return (
    <Section id="countdown" title="Menuju Hari Istimewa">
      <div className="card-glass" style={{ padding: '36px 24px' }}>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: 'clamp(12px, 4vw, 28px)',
            flexWrap: 'wrap',
          }}
        >
          <CountBox value={countdown.d} label="Hari" />
          <div
            style={{
              color: '#C9A84C',
              fontSize: '2rem',
              alignSelf: 'center',
              paddingBottom: 20,
            }}
          >
            :
          </div>
          <CountBox value={countdown.h} label="Jam" />
          <div
            style={{
              color: '#C9A84C',
              fontSize: '2rem',
              alignSelf: 'center',
              paddingBottom: 20,
            }}
          >
            :
          </div>
          <CountBox value={countdown.m} label="Menit" />
          <div
            style={{
              color: '#C9A84C',
              fontSize: '2rem',
              alignSelf: 'center',
              paddingBottom: 20,
            }}
          >
            :
          </div>
          <CountBox value={countdown.s} label="Detik" />
        </div>
        <p
          style={{
            textAlign: 'center',
            marginTop: 24,
            color: '#F5ECD766',
            fontSize: '0.8rem',
            letterSpacing: 2,
            fontFamily: "'Lato', sans-serif",
          }}
        >
          SENIN, 23 MARET 2026 · CIGUDEG
        </p>
      </div>
    </Section>
  );
}
