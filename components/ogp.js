import Head from 'next/head';
import {useRouter} from "next/router";

export default function Ogp({title, description, imageUrl, imageWidth, imageHeight}) {
    const router = useRouter()
    const baseUrl = 'https://coderdojo-hirakata.org'
    title = title ? title : 'CoderDojo Hirakata'
    description = description ? description : '子ども向けプログラミングクラブ、CoderDojo HirakataのWebサイトです'
    imageUrl = imageUrl ? imageUrl : '/hero.png'
    imageWidth = imageWidth ? imageWidth : 690
    imageHeight = imageHeight ? imageHeight : 533
    return (
            <Head>
                <script async src="https://www.googletagmanager.com/gtag/js?id=UA-77704267-2"></script>
                <script dangerouslySetInnerHTML={{
                    __html: `
                            window.dataLayer = window.dataLayer || [];
                            function gtag(){dataLayer.push(arguments);}
                            gtag('js', new Date());

                            gtag('config', 'UA-77704267-2');
                            `
                }} />

                <title>{title}</title>
                <meta property="og:url" content={baseUrl + router.pathname}/>
                <meta property="og:title" content={title}/>
                <meta property="og:site_name" content={'CoderDojo Hirakata'}/>
                <meta property="og:description" content={description}/>
                <meta property="og:type" content="website"/>
                <meta property="og:image" content={baseUrl + imageUrl}/>
                <meta property="og:image:width" content={String(imageWidth)}/>
                <meta property="og:image:height" content={String(imageHeight)}/>
                <link rel="canonical" href={baseUrl + router.pathname} />
            </Head>
    )
}
