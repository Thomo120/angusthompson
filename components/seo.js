import Head from 'next/head'

export default function SEO({ title, description, image }) {
    image = image || '/images/featured-image.jpg'
    return (
        <Head>
        <title>{title}</title>
        <meta property="og:title" content={title} />
        <meta property="twitter:title" content={title} />
        <meta name="description" content={description} />
        <meta property="og:description" content={description} />
        <meta property="twitter:description" content={description} />
        {image && (
            <>
                <meta property="og:image" content={image} />
                <meta property="twitter:card" content={image} />
                <meta property="twitter:image" content={image} />
            </>
        )}
        </Head>
    )
}
