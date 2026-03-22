export default function CountBox({ value, label }) {
  return (
    <div className="flex flex-col items-center">
      <div
        style={{
          background: "linear-gradient(135deg, #1a3a2a 60%, #2d5a3d)",
          border: "1px solid #C9A84C",
          boxShadow: "0 0 18px #C9A84C33, inset 0 1px 0 #C9A84C55",
          fontFamily: "'Cormorant Garamond', Georgia, serif",
          color: "#F5ECD7",
          minWidth: 64,
          fontSize: "2.4rem",
          fontWeight: 700,
          letterSpacing: 2,
        }}
        className="rounded-xl px-4 py-3 flex items-center justify-center"
      >
        {String(value).padStart(2, "0")}
      </div>
      <span
        style={{
          color: "#C9A84C",
          fontFamily: "'Lato', sans-serif",
          fontSize: "0.7rem",
          letterSpacing: 3,
          marginTop: 6,
          textTransform: "uppercase",
        }}
      >
        {label}
      </span>
    </div>
  );
}
