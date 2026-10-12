import Link from "next/link";
import { PRODUKTET } from "@/lib/produkte";

interface Props {
  params: Promise<{
    id: string;
  }>;
}

export default async function KerkesaSimulimPage({ params }: Props) {
  const { id } = await params;
  const produkt = PRODUKTET.find((p) => p.id === id);

  return (
    <main style={{ maxWidth: "480px", margin: "0 auto", padding: "16px", fontFamily: "sans-serif", textAlign: "center" }}>
      <div style={{ border: "1px solid #bbf7d0", backgroundColor: "#f0fdf4", padding: "24px", borderRadius: "12px", marginTop: "20px" }}>
        <div style={{ fontSize: "40px", marginBottom: "8px" }}>📞</div>
        <h2 style={{ color: "#166534", margin: "0 0 8px 0" }}>
          Simulim: Në pritje
        </h2>
        <p style={{ color: "#15803d", fontSize: "15px", margin: "0 0 16px 0" }}>
          Kërkesa për produktin <strong>{produkt ? produkt.emri : `#${id}`}</strong> u dërgua me sukses.
        </p>
        <span style={{ fontSize: "12px", color: "#166534", backgroundColor: "#dcfce7", padding: "4px 8px", borderRadius: "4px" }}>
          Nuk ka thirrje apo rezervim real
        </span>
      </div>

      <div style={{ marginTop: "24px" }}>
        <Link 
          href="/"
          style={{
            color: "#2563eb",
            textDecoration: "none",
            fontWeight: "500"
          }}
        >
          ← Kthehu te faqja kryesore
        </Link>
      </div>
    </main>
  );
}
