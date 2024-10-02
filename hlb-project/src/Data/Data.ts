import sigil1 from '../assets/sigils/01.png';
import sigil2 from '../assets/sigils/02.png';
import sigil3 from '../assets/sigils/03.png';
import sigil4 from '../assets/sigils/04.png';
import sigil5 from '../assets/sigils/05.png';
import sigil6 from '../assets/sigils/06.png';
import sigil7 from '../assets/sigils/07.png';
import sigil8 from '../assets/sigils/08.png';
import sigil9 from '../assets/sigils/09.png';
import sigil10 from '../assets/sigils/10.png';
import sigil11 from '../assets/sigils/11.png';
import sigil12 from '../assets/sigils/12.png';

export interface Sigil {
    id: number;
    title: string; 
    description: string;
    redirectUrl: string;
    image: string;
} 

export const sigils: Sigil[] = [
    {
        id: 1,
        title: 'Blood spilled',
        description: 'When will you take the blame',
        redirectUrl: 'https://youtu.be/q9wnng4k9m4',
        image: sigil1
    },
    {
        id: 2,
        title: 'Linger',
        description: 'I Feel the pain become me',
        redirectUrl: 'https://youtu.be/qDuFp08G33A',
        image: sigil2,
    },
    {
        id: 3,
        title: 'Lifeless, Deathless',
        description: 'The light inside you will fade',
        redirectUrl: 'https://youtu.be/j4w9BdDzb1k ',
        image: sigil3
    },
    {
        id: 4,
        title: 'Withering',
        redirectUrl: 'https://youtu.be/7W2XMyx7h9E',
        description: 'A starless night upon us',
        image: sigil4
    },
    {
        id: 5,
        title: 'Instill',
        redirectUrl: 'https://youtu.be/K6XCQ2QrMkk',
        description: 'Let the world sing in despair',
        image: sigil5
    },
    {
        id: 6,
        title: 'Labyrinthian',
        description: 'Arterial paths extending',
        redirectUrl: 'https://youtu.be/0QpSgqFs5oQ',
        image: sigil6
    },
    {
        id: 7,
        title: 'Catastrophize',
        description: 'I die with the world',
        redirectUrl: 'https://youtu.be/UoFQLXxkRZw',
        image: sigil7
    },
    { 
        id: 8,
        title: 'Death Spiral',
        description: 'You will know the truth before you die',
        redirectUrl: 'https://youtu.be/XP5YrdMnjzo',
        image: sigil8
    },
    {
        id: 9,
        title: 'Shell',
        description: 'You are a shell inside of you nothingness',
        redirectUrl: 'https://youtu.be/fVGIfZzfSRQ',
        image: sigil9
    },
    {
        id: 10,
        title: 'Passage',
        description: 'Communicate with divinity',
        redirectUrl: 'https://youtu.be/4Zb1sWFDezA',
        image: sigil10
    },
    { 
        id: 11,
        title: 'Burden',
        description: '???',
        redirectUrl: 'https://youtu.be/zcFiP21RQ90',
        image: sigil11
    },
    {
        id: 12,
        title: 'Bearer',
        description: 'Immeasurable pain',
        redirectUrl: 'https://youtu.be/zcFiP21RQ90',
        image: sigil12
    }
]

