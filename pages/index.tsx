// import Image from 'next/image';
// import { Inter } from 'next/font/google';
import { Button, Htag, P } from '../components';

// const inter = Inter({ 
//     subsets: ['latin'],
//     display: 'swap',
//     variable: '--font-poppins',
//     weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
// });

export default function Home(): JSX.Element {
    return (
        <div>
            <Htag tag='h1'>ТЕКСТ</Htag>
            <Button appearance='primary' className='sdsds' arrow='right'>Кнопка</Button>
            <Button appearance='ghost' arrow='right'>Кнопка</Button>
            <P size='high'>HIGH</P>
            <P size='medium'>MEDIUM</P>
            <P size='small'>SMALL</P>
        </div>
    );
}
