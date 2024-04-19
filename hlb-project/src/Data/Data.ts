import disc1 from '../assets/discs/01.png';
import disc2 from '../assets/discs/02.png';
import disc3 from '../assets/discs/03.png';
import disc4 from '../assets/discs/04.png';
import disc5 from '../assets/discs/05.png';
import disc6 from '../assets/discs/06.png';
import disc7 from '../assets/discs/07.png';
import disc8 from '../assets/discs/08.png';
import disc9 from '../assets/discs/09.png';
import disc10 from '../assets/discs/10.png';
import disc11 from '../assets/discs/11.png';
import disc12 from '../assets/discs/12.png';

export interface Disc {
    id: number;
    title: string; 
    description: string;
    redirectUrl: string;
    image: string;
} 

export const discs: Disc[] = [
    {
        'id': 1,
        'title': 'Blood spilled',
        'description': '"When will you take the blame."',
        'redirectUrl': 'https://youtu.be/q9wnng4k9m4',
        'image': disc1
    },
    {
        'id': 2,
        'title': 'Linger',
        'description': '"I Feel the pain become me."',
        'redirectUrl': 'https://youtu.be/qDuFp08G33A',
        'image': disc2
    },
    {
        'id': 3,
        'title': 'Lifeless, Deathless',
        'description': '"The light inside you will fade."',
        'redirectUrl': 'https://youtu.be/j4w9BdDzb1k ',
        'image': disc3
    },
    {
        'id': 4,
        'title': 'Withering',
        'redirectUrl': 'https://youtu.be/7W2XMyx7h9E',
        'description': '"A starless night upon us."',
        'image': disc4
    },
    {
        'id': 5,
        'title': 'Instill',
        'redirectUrl': 'https://youtu.be/K6XCQ2QrMkk',
        'description': '"Let the world sing in despair."',
        'image': disc5
    },
    {
        'id': 6,
        'title': 'Labyrinthian',
        'description': '"Arterial paths extending."',
        'redirectUrl': 'https://youtu.be/0QpSgqFs5oQ',
        'image': disc6
    },
    {
        'id': 7,
        'title': 'Catastrophize',
        'description': '"I die with the world."',
        'redirectUrl': 'https://youtu.be/UoFQLXxkRZw',
        'image': disc7
    },
    { 
        'id': 8,
        'title': 'Death Spiral',
        'description': '"You will know the truth before you die."',
        'redirectUrl': 'https://youtu.be/XP5YrdMnjzo',
        'image': disc8
    },
    {
        'id': 9,
        'title': 'Shell',
        'description': '"You are a shell, inside of you, nothingness."',
        'redirectUrl': 'https://youtu.be/fVGIfZzfSRQ',
        'image': disc9
    },
    {
        'id': 10,
        'title': 'Passage',
        'description': '"Communicate with divinity."',
        'redirectUrl': 'https://youtu.be/4Zb1sWFDezA',
        'image': disc10
    },
    { 
        'id': 11,
        'title': 'Burden',
        'description': '???',
        'redirectUrl': 'https://youtu.be/zcFiP21RQ90',
        'image': disc11
    },
    {
        'id': 12,
        'title': 'Bearer',
        'description': '"Immeasurable pain."',
        'redirectUrl': 'https://youtu.be/zcFiP21RQ90',
        'image': disc12
    }
]