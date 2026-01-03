const SigilPiece = Object.values(
  import.meta.glob("../assets/sigils/*.png", { eager: true, import: 'default' })
) as string[];

export interface Sigil {
  id: number;
  title: string;
  redirectUrl: string;
  image: string;
}

export const sigils: Sigil[] = [
  { id: 1, title: "Blood spilled", redirectUrl: "https://youtu.be/q9wnng4k9m4", image: SigilPiece[0] },
  { id: 2, title: "Linger", redirectUrl: "https://youtu.be/qDuFp08G33A", image: SigilPiece[1] },
  { id: 3, title: "Lifeless, Deathless", redirectUrl: "https://youtu.be/j4w9BdDzb1k", image: SigilPiece[2] },
  { id: 4, title: "Withering", redirectUrl: "https://youtu.be/7W2XMyx7h9E", image: SigilPiece[3] },
  { id: 5, title: "Instill", redirectUrl: "https://youtu.be/K6XCQ2QrMkk", image: SigilPiece[4] },
  { id: 6, title: "Labyrinthian", redirectUrl: "https://youtu.be/0QpSgqFs5oQ", image: SigilPiece[5] },
  { id: 7, title: "Catastrophize", redirectUrl: "https://youtu.be/UoFQLXxkRZw", image: SigilPiece[6] },
  { id: 8, title: "Death Spiral", redirectUrl: "https://youtu.be/XP5YrdMnjzo", image: SigilPiece[7] },
  { id: 9, title: "Shell", redirectUrl: "https://youtu.be/fVGIfZzfSRQ", image: SigilPiece[8] },
  { id: 10, title: "Passage", redirectUrl: "https://youtu.be/4Zb1sWFDezA", image: SigilPiece[9] },
  { id: 11, title: "Burden", redirectUrl: "https://youtu.be/zcFiP21RQ90", image: SigilPiece[10] },
  { id: 12, title: "Bearer", redirectUrl: "https://youtu.be/zcFiP21RQ90", image: SigilPiece[11] },
];