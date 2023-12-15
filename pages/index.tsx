// import Image from 'next/image';
// import { Inter } from 'next/font/google';
import { Htag } from '../components/Htag/Htag';

// const inter = Inter({ subsets: ['latin'] });

export default function Home(): JSX.Element {
    return (
        <div>
            <Htag tag='h1'>ТЕКСТ</Htag>
        </div>
    );
}
