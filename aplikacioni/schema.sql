CREATE TABLE IF NOT EXISTS produkte (
  id TEXT PRIMARY KEY,
  emri TEXT NOT NULL,
  kategoria TEXT NOT NULL,
  pershkrimi TEXT NOT NULL,
  cmimi NUMERIC NOT NULL CHECK (cmimi >= 0),
  sasiaStoqit INTEGER NOT NULL CHECK (sasiaStoqit >= 0)
);

INSERT INTO produkte (id, emri, kategoria, pershkrimi, cmimi, sasiaStoqit)
VALUES
  ('1', 'Këndore Torx T25', 'Vegla Dore', 'Chave Torx T25 profesionale nga çeliku S2 për punë me precizion të lartë.', 3.50, 15),
  ('2', 'Set Shraufa Torx M6x20', 'Lidhëse & Shraufa', 'Set me 50 copa shraufa Torx prej çeliku inoks (A2) për profil alumini.', 8.20, 8),
  ('3', 'Bit Torx T30 Magnetic', 'Pajisje Elektrike', 'Bit magnetik Torx T30 për kaçavida elektrike dhe me bateri.', 2.10, 0)
ON CONFLICT (id) DO NOTHING;

SELECT * FROM produkte ORDER BY id;
