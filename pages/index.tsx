// import Image from 'next/image';
// import { Inter } from 'next/font/google';
import { Button, Htag } from '../components';

// const inter = Inter({ subsets: ['latin'] });

export default function Home(): JSX.Element {
    return (
        <div>
            <Htag tag='h1'>ТЕКСТ</Htag>
            <Button appearance='primary' className='sdsds' arrow='right'>Кнопка</Button>
            <Button appearance='ghost'>Кнопка</Button>
        </div>
    );
}
