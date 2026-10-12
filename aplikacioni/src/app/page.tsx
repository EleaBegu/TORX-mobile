import { lexoProduktet, type Produkt } from "@/lib/produkte";
import KartaProduktit from "@/components/KartaProduktit";

export const dynamic = "force-dynamic";

export default async function HomePage() {
  let produktet: Produkt[];

  try {
    produktet = await lexoProduktet();
  } catch (error) {
    console.error("Failed to load products from the database:", error);

    return (
      <main style={{ minHeight: "100vh", backgroundColor: "#e8e6e1", color: "#1e293b", padding: "clamp(24px, 6vw, 64px) 20px", fontFamily: "Arial, sans-serif" }}>
        <div style={{ maxWidth: "1120px", margin: "0 auto" }}>
          <p role="alert" style={{ border: "1px solid #fecaca", borderRadius: "16px", backgroundColor: "rgba(255, 255, 255, 0.9)", color: "#b91c1c", padding: "20px 24px", boxShadow: "0 4px 12px rgba(15, 23, 42, 0.06)" }}>
            Produktet nuk mund të ngarkoheshin. Ju lutemi provoni përsëri më vonë.
          </p>
        </div>
      </main>
    );
  }

  return (
    <main style={{ minHeight: "100vh", backgroundColor: "#e8e6e1", color: "#1e293b", padding: "clamp(32px, 7vw, 76px) 20px", fontFamily: "Arial, sans-serif" }}>
      <div style={{ maxWidth: "1120px", margin: "0 auto" }}>
        <header style={{ display: "flex", alignItems: "center", gap: "18px", marginBottom: "38px", paddingBottom: "26px", borderBottom: "1px solid #d4d0c8" }}>
          <div aria-hidden="true" style={{ display: "grid", placeItems: "center", width: "58px", height: "58px", flexShrink: 0, border: "1px solid #d6c7a8", borderRadius: "16px", backgroundColor: "#f7f4ed", boxShadow: "0 3px 10px rgba(70, 60, 40, 0.08)" }}>
            <svg width="30" height="30" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M16 2.75 27.5 9.4v13.2L16 29.25 4.5 22.6V9.4L16 2.75Z" stroke="#8a6732" strokeWidth="1.8" />
              <path d="m16 8.3 2.1 4.1 4.6-.7-2.6 3.9 2.6 3.9-4.6-.7-2.1 4.1-2.1-4.1-4.6.7 2.6-3.9-2.6-3.9 4.6.7L16 8.3Z" stroke="#8a6732" strokeWidth="1.5" strokeLinejoin="round" />
            </svg>
          </div>
          <div>
            <h1 style={{ fontSize: "clamp(30px, 5vw, 40px)", lineHeight: 1.1, letterSpacing: "-0.04em", color: "#1e293b", margin: "0 0 7px", fontWeight: 800 }}>
              Torx Hardware
            </h1>
            <p style={{ margin: 0, color: "#64748b", fontSize: "15px", lineHeight: 1.6 }}>
              Katalogu i veglave dhe pajisjeve
            </p>
          </div>
        </header>

        <section aria-label="Produktet" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 280px), 1fr))", gap: "18px" }}>
          {produktet.map((item) => (
            <KartaProduktit key={item.id} produkt={item} />
          ))}
        </section>
      </div>
    </main>
  );
}
