// import Image from 'next/image';
// import { Inter } from 'next/font/google';
import { useEffect, useState } from 'react';
import { Button, Htag, P, Rating, Tag } from '../components';
import { withLayout } from '../layout/Layout';
import { GetStaticProps } from 'next';
import axios from 'axios';
import { MenuItem } from '../interfaces/menu.interface';

// const inter = Inter({ 
//     subsets: ['latin'],
//     display: 'swap',
//     variable: '--font-poppins',
//     weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
// });

function Home({menu}: HomeProps): JSX.Element {
    const [rating, setRating] = useState<number>(4);

    return (
        <>
            <Htag tag='h1'>РАБОТА</Htag>
            <Button appearance='primary' arrow='right'>Кнопка</Button>
            <Button appearance='ghost' arrow='right'>Кнопка</Button>
            <P size='l'>HIGH</P>
            <P>MEDIUM</P>
            <P size='s'>SMALL</P>
            <Tag color='ghost' size='s'>ghost</Tag>
            <Tag color='red' size='m'>red</Tag>
            <Tag color='gray' size='m'>gray</Tag>
            <Tag color='green' size='m'>green</Tag>
            <Tag color='primary' size='m'>primary</Tag>
            <Rating rating={rating} isEditable setRating={setRating} />
            <ul>
                {menu.map(m => (<li key={m._id.secondCategory}>{m._id.secondCategory}</li>))}
            </ul>
        </>
    );
}

export default withLayout(Home);

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
    const firstCategory = 0;
    const { data: menu } = await axios.post<MenuItem[]>(process.env.NEXT_PUBLIC_DOMAIN + 'api/top-page/find', {
        firstCategory
    });
    return {
        props: {
            menu,
            firstCategory
        }
    }
}

interface HomeProps extends Record<string, unknown> {
    menu: MenuItem[],
    firstCategory: number
}