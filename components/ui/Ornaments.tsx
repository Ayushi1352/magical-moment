// The design's decorations (card leaves, contact lotus, footer heart), drawn as SVG so they stay sharp at any size
// and take their colour from CSS (currentColor) instead of being baked into images.

type Point = [number, number];

const round = (n: number) => Math.round(n * 10) / 10;

/**
 * A pointed leaf / petal from `base` to `tip`, `width` wide on each side. With `vein`, a thin midrib is cut out of
 * it (drawn as a second shape, so fill-rule="evenodd" turns it into a hole).
 */
const lens = ([bx, by]: Point, [tx, ty]: Point, width: number, vein = false) => {
  const dx = tx - bx;
  const dy = ty - by;
  const length = Math.hypot(dx, dy);
  const nx = -dy / length;
  const ny = dx / length;
  // a point `along` the base→tip line (0–1), pushed `side` units sideways
  const at = (along: number, side: number) => `${round(bx + dx * along + nx * side)},${round(by + dy * along + ny * side)}`;
  let d = `M${at(0, 0)}C${at(0.3, width * 1.3)} ${at(0.75, width)} ${at(1, 0)}C${at(0.75, -width)} ${at(0.3, -width * 1.3)} ${at(0, 0)}Z`;
  if (vein) d += `M${at(0.18, 0)}Q${at(0.5, width * 0.14)} ${at(0.82, 0)}Q${at(0.5, -width * 0.14)} ${at(0.18, 0)}Z`;
  return d;
};

type Leaf = [base: Point, tip: Point, width: number];
type Sprig = { width: number; height: number; leaves: string; stems: string };

const sprig = (width: number, height: number, leaves: Leaf[], stems: string): Sprig => ({
  width,
  height,
  leaves: leaves.map(([base, tip, w]) => lens(base, tip, w, true)).join(""),
  stems,
});

const sprigs = {
  left: sprig(
    98,
    104,
    [
      [[22, 50], [13, 5], 6.5],
      [[37, 33], [55, 1], 6.5],
      [[31, 64], [66, 34], 7],
      [[52, 67], [97, 63], 6.5],
      [[34, 80], [74, 90], 7],
    ],
    "M8,100C16,78 24,52 37,33M17,72Q18,60 22,50M18,70Q24,66 31,64M12,92C26,78 40,70 52,67M20,88Q28,82 34,80",
  ),
  right: sprig(
    119,
    104,
    [
      [[86, 32], [93, 0], 6.5],
      [[97, 58], [108, 18], 6],
      [[106, 76], [112, 48], 5],
      [[76, 62], [45, 36], 7],
      [[48, 70], [2, 74], 7],
      [[80, 82], [40, 97], 7],
    ],
    "M114,102C104,80 92,56 86,32M95,64L97,58M104,84L106,76M100,80C90,72 82,66 76,62M100,82C80,74 64,70 48,70M104,88Q92,84 80,82",
  ),
};

/** A sprig of leaves for a service card's bottom corner; `side` says which corner it grows from */
export const LeafSprig = ({ side, className }: { side: "left" | "right"; className?: string }) => {
  const { width, height, leaves, stems } = sprigs[side];
  return (
    <svg viewBox={`0 0 ${width} ${height}`} aria-hidden="true" className={className}>
      <path fill="currentColor" fillRule="evenodd" d={leaves} />
      <path fill="none" stroke="currentColor" strokeWidth={1.4} strokeLinecap="round" d={stems} />
    </svg>
  );
};

// outer petals first, the centre one last, so each petal's fill hides the lines of the ones behind it
const lotusPetals = (
  [
    [[6, 56], 13],
    [[158, 56], 13],
    [[36, 17], 14],
    [[128, 17], 14],
    [[82, 4], 15],
  ] as [Point, number][]
).map(([tip, width]) => lens([82, 78], tip, width));

/** Outline lotus. `backdrop` is the colour behind it, used to fill the petals so the back ones are covered. */
export const Lotus = ({ backdrop, className }: { backdrop: string; className?: string }) => (
  <svg viewBox="0 0 165 88" aria-hidden="true" className={className}>
    <g fill={backdrop} stroke="currentColor" strokeWidth={4} strokeLinejoin="round">
      {lotusPetals.map((d) => (
        <path key={d} d={d} />
      ))}
    </g>
  </svg>
);

/** A flowing line that loops into a heart in the middle */
export const HeartFlourish = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 363 57" aria-hidden="true" className={className}>
    <path
      fill="none"
      stroke="currentColor"
      strokeWidth={2.6}
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M4,50C30,38 50,33 72,33C100,33 130,45 152,47C170,48 182,46 192,42C202,36 212,26 210,16C208,6 194,4 191,18C188,4 174,6 172,16C170,26 180,36 192,42C202,48 220,52 242,50C270,47 292,38 320,37C340,37 352,40 358,43"
    />
  </svg>
);
