import Link from "next/link";

export default function NotFound() {
  return (
    <main style={{ maxWidth: "480px", margin: "40px auto", padding: "16px", textAlign: "center", fontFamily: "sans-serif" }}>
      <h1 style={{ fontSize: "48px", margin: 0 }}>404</h1>
      <h2 style={{ fontSize: "20px", color: "#374151" }}>Produkti nuk u gjet</h2>
      <p style={{ color: "#6b7280", marginBottom: "20px" }}>
        Produkti që po kërkoni nuk ekziston ose është fshirë nga katalogu.
      </p>
      <Link
        href="/"
        style={{
          backgroundColor: "#2563eb",
          color: "#fff",
          padding: "10px 16px",
          borderRadius: "6px",
          textDecoration: "none"
        }}
      >
        Kthehu te Lista
      </Link>
    </main>
  );
}