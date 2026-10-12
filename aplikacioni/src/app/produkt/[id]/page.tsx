import { gjejProduktin, type Produkt } from "@/lib/produkte";
import { notFound } from "next/navigation";
import Link from "next/link";

export const dynamic = "force-dynamic";

interface Props {
  params: Promise<{
    id: string;
  }>;
}

export default async function ProduktDetajetPage({ params }: Props) {
  const { id } = await params;
  let produkt: Produkt | null;

  try {
    produkt = await gjejProduktin(id);
  } catch (error) {
    console.error(`Failed to load product ${id} from the database:`, error);
    throw error;
  }

  if (!produkt) notFound();

  const kaStok = produkt.sasiaStoqit > 0;

  return (
    <main style={{ maxWidth: "480px", margin: "0 auto", padding: "16px", fontFamily: "sans-serif" }}>
      <Link href="/" style={{ color: "#2563eb", textDecoration: "none", fontSize: "14px" }}>
        ← Kthehu te lista
      </Link>

      <div style={{ marginTop: "16px", border: "1px solid #e5e7eb", borderRadius: "12px", padding: "20px", backgroundColor: "#fff" }}>
        <span style={{ fontSize: "12px", color: "#6b7280", fontWeight: "bold" }}>
          {produkt.kategoria}
        </span>
        <h1 style={{ fontSize: "22px", margin: "8px 0", color: "#111827" }}>
          {produkt.emri}
        </h1>
        <p style={{ color: "#4b5563", lineHeight: "1.5" }}>
          {produkt.pershkrimi}
        </p>

        <hr style={{ margin: "16px 0", border: "none", borderTop: "1px solid #f3f4f6" }} />

        <div style={{ marginBottom: "20px" }}>
          <div style={{ fontSize: "24px", fontWeight: "bold", color: "#059669" }}>
            €{produkt.cmimi.toFixed(2)}
          </div>
          <div style={{ color: kaStok ? "#16a34a" : "#dc2626", fontWeight: "500", marginTop: "4px" }}>
            {kaStok ? `Sasia në depo: ${produkt.sasiaStoqit} copë` : "Aktualisht nuk ka stok"}
          </div>
        </div>

        {kaStok ? (
          <Link
            href={`/produkt/${produkt.id}/kerkesa`}
            style={{
              display: "block",
              textAlign: "center",
              backgroundColor: "#16a34a",
              color: "#ffffff",
              padding: "12px",
              borderRadius: "8px",
              textDecoration: "none",
              fontWeight: "bold"
            }}
          >
            Thirr Pronarin (Rezervo)
          </Link>
        ) : (
          <button
            disabled
            style={{
              width: "100%",
              backgroundColor: "#9ca3af",
              color: "#ffffff",
              padding: "12px",
              borderRadius: "8px",
              border: "none",
              fontWeight: "bold",
              cursor: "not-allowed"
            }}
          >
            Nuk ka në depo
          </button>
        )}
      </div>
    </main>
  );
}