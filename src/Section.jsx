export default function Section({ id, title, arabic, children }) {
  return (
    <section
      id={id}
      style={{
        width: "100%",
        maxWidth: 560,
        margin: "0 auto",
        padding: "48px 20px",
      }}
    >
      {/* Section header */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginBottom: 32,
          textAlign: "center",
        }}
      >
        {arabic && (
          <p
            style={{
              fontFamily: "serif",
              color: "#C9A84C",
              fontSize: "1.3rem",
              marginBottom: 4,
              opacity: 0.7,
            }}
          >
            {arabic}
          </p>
        )}
        <h2
          style={{
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            color: "#F5ECD7",
            fontSize: "1.7rem",
            fontWeight: 600,
            letterSpacing: 2,
            textAlign: "center",
          }}
        >
          {title}
        </h2>
        <div
          style={{
            width: 48,
            height: 2,
            background: "linear-gradient(90deg, transparent, #C9A84C, transparent)",
            marginTop: 10,
          }}
        />
      </div>

      {children}
    </section>
  );
}
