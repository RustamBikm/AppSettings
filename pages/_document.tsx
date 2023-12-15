import Document, { Html, Head, Main, NextScript, DocumentContext, DocumentInitialProps } from 'next/document'



export default class MyDocument extends Document{
    static async getInitialProps(ctx: DocumentContext):Promise<DocumentInitialProps> {
        const initialProps = await Document.getInitialProps(ctx);
        return {...initialProps};
    }
    render():JSX.Element {
        return (
            <Html lang="ru">
                <Head />
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

// import { Html, Head, Main, NextScript } from 'next/document';
// export default function Document() {
//     static async loadGetInitialProps(ctx: DocumentContext) {
//         const
//         return {...initialProps}
//     }
//     return (
//         <Html lang="ru">
//             <Head />
//             <body>
//                 <Main />
//                 <NextScript />
//             </body>
//         </Html>
//     );
// }