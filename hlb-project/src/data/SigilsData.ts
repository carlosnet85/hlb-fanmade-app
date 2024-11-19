import sigil1 from "../assets/sigils/01.png";
import sigil2 from "../assets/sigils/02.png";
import sigil3 from "../assets/sigils/03.png";
import sigil4 from "../assets/sigils/04.png";
import sigil5 from "../assets/sigils/05.png";
import sigil6 from "../assets/sigils/06.png";
import sigil7 from "../assets/sigils/07.png";
import sigil8 from "../assets/sigils/08.png";
import sigil9 from "../assets/sigils/09.png";
import sigil10 from "../assets/sigils/10.png";
import sigil11 from "../assets/sigils/11.png";
import sigil12 from "../assets/sigils/12.png";

export interface Sigil {
  id: number;
  title: string;
  redirectUrl: string;
  image: string;
}

export const sigils: Sigil[] = [
  {
    id: 1,
    title: "Blood spilled",
    redirectUrl: "https://youtu.be/q9wnng4k9m4",
    image: sigil1,
  },
  {
    id: 2,
    title: "Linger",
    redirectUrl: "https://youtu.be/qDuFp08G33A",
    image: sigil2,
  },
  {
    id: 3,
    title: "Lifeless, Deathless",
    redirectUrl: "https://youtu.be/j4w9BdDzb1k ",
    image: sigil3,
  },
  {
    id: 4,
    title: "Withering",
    redirectUrl: "https://youtu.be/7W2XMyx7h9E",
    image: sigil4,
  },
  {
    id: 5,
    title: "Instill",
    redirectUrl: "https://youtu.be/K6XCQ2QrMkk",
    image: sigil5,
  },
  {
    id: 6,
    title: "Labyrinthian",
    redirectUrl: "https://youtu.be/0QpSgqFs5oQ",
    image: sigil6,
  },
  {
    id: 7,
    title: "Catastrophize",
    redirectUrl: "https://youtu.be/UoFQLXxkRZw",
    image: sigil7,
  },
  {
    id: 8,
    title: "Death Spiral",
    redirectUrl: "https://youtu.be/XP5YrdMnjzo",
    image: sigil8,
  },
  {
    id: 9,
    title: "Shell",
    redirectUrl: "https://youtu.be/fVGIfZzfSRQ",
    image: sigil9,
  },
  {
    id: 10,
    title: "Passage",
    redirectUrl: "https://youtu.be/4Zb1sWFDezA",
    image: sigil10,
  },
  {
    id: 11,
    title: "Burden",
    redirectUrl: "https://youtu.be/zcFiP21RQ90",
    image: sigil11,
  },
  {
    id: 12,
    title: "Bearer",
    redirectUrl: "https://youtu.be/zcFiP21RQ90",
    image: sigil12,
  },
];

