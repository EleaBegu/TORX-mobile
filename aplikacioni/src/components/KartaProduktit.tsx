import Link from "next/link";
import type { Produkt } from "@/lib/produkte";
import styles from "./KartaProduktit.module.css";

interface Props {
  produkt: Produkt;
}

export default function KartaProduktit({ produkt }: Props) {
  const kaStok = produkt.sasiaStoqit > 0;

  return (
    <article className={styles.card}>
      <div className={styles.cardHeader}>
        <span className={styles.category}>
          {produkt.kategoria}
        </span>
        <span className={`${styles.stockBadge} ${kaStok ? styles.inStock : styles.outOfStock}`}>
          {kaStok ? (
            <svg aria-hidden="true" width="14" height="14" viewBox="0 0 20 20" fill="none">
              <path d="m5 10 3.2 3.2L15.5 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          ) : (
            <svg aria-hidden="true" width="14" height="14" viewBox="0 0 20 20" fill="none">
              <path d="m6 6 8 8m0-8-8 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          )}
          {kaStok ? "Në stok" : "Jashtë stokut"}
        </span>
      </div>

      <h2 className={styles.title}>
        {produkt.emri}
      </h2>
      <p className={styles.description}>
        {produkt.pershkrimi}
      </p>

      <div className={styles.cardFooter}>
        <div>
          <div className={styles.priceLabel}>
            Çmimi
          </div>
          <span className={styles.price}>
            €{produkt.cmimi.toFixed(2)}
          </span>
          <div className={styles.quantity}>
            {kaStok ? `${produkt.sasiaStoqit} copë në depo` : "Nuk ka në depo"}
          </div>
        </div>

        <Link href={`/produkt/${produkt.id}`} className={styles.action}>
          Shiko Detajet
        </Link>
      </div>
    </article>
  );
}
