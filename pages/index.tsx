// import Image from 'next/image';
// import { Inter } from 'next/font/google';
import { Button, Htag, P, Tag } from '../components';

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
            <P size='l'>HIGH</P>
            <P>MEDIUM</P>
            <P size='s'>SMALL</P>

            <Tag color='ghost' size='s'>ghost</Tag>
            <Tag color='red' size='m'>red</Tag>
            <Tag color='gray' size='m'>gray</Tag>
            <Tag color='green' size='m'>green</Tag>
            <Tag color='primary' size='m'>primary</Tag>
        </div>
    );
}
