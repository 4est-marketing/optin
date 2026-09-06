const PATTERN = [
  "1111111001011111111",
  "1000001011010000001",
  "1011101010111011101",
  "1011101001011011101",
  "1011101011001011101",
  "1000001010001000001",
  "1111111010101111111",
  "0000000011000000000",
  "1101011100100110101",
  "0010110001011001010",
  "1100100111101101001",
  "0001011010010100110",
  "1111111001101011010",
  "1000001011010110100",
  "1011101010101100110",
  "1011101001111011001",
  "1011101011001100101",
  "1000001010101011010",
  "1111111011010100101",
];

export default function QrGlyph({ className = "" }: { className?: string }) {
  return (
    <div
      className={`grid aspect-square gap-px overflow-hidden ${className}`}
      style={{ gridTemplateColumns: `repeat(${PATTERN.length}, 1fr)` }}
      aria-hidden="true"
    >
      {PATTERN.flatMap((row, y) =>
        row.split("").map((cell, x) => (
          <span
            key={`${y}-${x}`}
            className={cell === "1" ? "bg-brand-ink rounded-[1px]" : ""}
          />
        )),
      )}
    </div>
  );
}
