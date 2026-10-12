import { getSql } from "@/lib/db";

export interface Produkt {
  id: string;
  emri: string;
  pershkrimi: string;
  cmimi: number;
  sasiaStoqit: number;
  kategoria: string;
}

function mapProdukt(row: Record<string, unknown>): Produkt {
  const cmimi = Number(row.cmimi);
  const sasiaStoqit = Number(row.sasiaStoqit);

  if (
    typeof row.id !== "string" ||
    typeof row.emri !== "string" ||
    typeof row.pershkrimi !== "string" ||
    typeof row.kategoria !== "string" ||
    !Number.isFinite(cmimi) ||
    !Number.isInteger(sasiaStoqit)
  ) {
    throw new Error("The database returned an invalid product record.");
  }

  return {
    id: row.id,
    emri: row.emri,
    pershkrimi: row.pershkrimi,
    cmimi,
    sasiaStoqit,
    kategoria: row.kategoria,
  };
}

export async function lexoProduktet(): Promise<Produkt[]> {
  const sql = getSql();
  const rows: Record<string, unknown>[] = await sql`
    SELECT id, emri, pershkrimi, cmimi, sasiastoqit AS "sasiaStoqit", kategoria
    FROM produkte
    ORDER BY id
  `;

  return rows.map(mapProdukt);
}

export async function gjejProduktin(id: string): Promise<Produkt | null> {
  const sql = getSql();
  const rows: Record<string, unknown>[] = await sql`
    SELECT id, emri, pershkrimi, cmimi, sasiastoqit AS "sasiaStoqit", kategoria
    FROM produkte
    WHERE id = ${id}
    LIMIT 1
  `;

  return rows[0] ? mapProdukt(rows[0]) : null;
}

export const PRODUKTET: Produkt[] = [
  {
    id: "1",
    emri: "Këndore Torx T25",
    pershkrimi: "Chave Torx T25 profesionale nga çeliku S2 për punë me precizion të lartë.",
    cmimi: 3.50,
    sasiaStoqit: 15,
    kategoria: "Vegla Dore",
  },
  {
    id: "2",
    emri: "Set Shraufa Torx M6x20",
    pershkrimi: "Set me 50 copa shraufa Torx prej çeliku inoks (A2) për profil alumini.",
    cmimi: 8.20,
    sasiaStoqit: 8,
    kategoria: "Lidhëse & Shraufa",
  },
  {
    id: "3",
    emri: "Bit Torx T30 Magnetic",
    pershkrimi: "Bit magnetik Torx T30 për kaçavida elektrike dhe me bateri.",
    cmimi: 2.10,
    sasiaStoqit: 0,
    kategoria: "Pajisje Elektrike",
  },
];
