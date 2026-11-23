// one-line-zero-use — "One Line, Zero Use: The Useless Superpower Sprint"
// https://make.fun/c/u-daring-gecko-25-one-line-zero-use-the-useless-01ca1c68
//
// Formula (dari teardown leaderboard top-3):
//   - Uselessness SPESIFIK, bukan generik: rewind time hanya 3 detik.
//   - Payoff di kata-kata TERAKHIR: "make the same mistake twice" —
//     punchline-nya mendarat di ujung baris, tanpa penjelasan sesudahnya.
//   - Angle fresh: bukan "prediksi terlambat" (sudah dipakai rival) dan
//     bukan "invisible" (sudah dipakai rival).
//   - Self-deprecating + mudah dibayangkan: penonton langsung melihat
//     adegannya — rewind, lalu mengulang kesalahan yang sama persis.
//   - Wording ketat: satu kalimat, satu baris, tanpa throat-clearing,
//     dan em-dash (—) sebagai jeda sebelum payoff, bukan koma.
//
// Program ini hanya menulis baris di atas ke $MAKEFUN_OUTPUT_DIR/entry.txt
// (default /output) setelah lolos validasi: 1-200 code point, satu baris,
// bukan whitespace saja. Tanpa dependensi, Node 22+.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "I can rewind time by three seconds — just long enough to watch myself make the same mistake twice.";

function validate(line) {
  const length = [...line].length; // code points, bukan UTF-16 units
  if (length < 1 || length > 200) {
    throw new Error(`line must be 1-200 code points, got ${length}`);
  }
  if (line.includes("\n") || line.includes("\r")) {
    throw new Error("line must be a single line");
  }
  if (line.trim().length === 0) {
    throw new Error("line must not be whitespace only");
  }
}

validate(LINE);

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8"); // tanpa trailing newline
console.log(`wrote ${join(outDir, "entry.txt")} (${[...LINE].length} code points)`);
