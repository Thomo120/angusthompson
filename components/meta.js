import Head from 'next/head'
import { theme } from '@/lib/theme'
import { useRouter } from 'next/router'

export default function Meta() {
  const router = useRouter()
  // get current full page url from router
  let url = router.asPath

  // if url is /, url will be null
  if (url === '/') {
    url = ''
  }

  return (
    <Head>
      <meta httpEquiv="Content-Type" content="text/html; charset=UTF-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
      {/*<link rel="shortcut icon" href="/images/favicon.png" />
      <link rel="apple-touch-icon" href="/images/apple-touch-icon.png" />
      <link rel="apple-touch-icon" sizes="72x72" href="/images/apple-touch-icon-72x72.png" />
  <link rel="apple-touch-icon" sizes="114x114" href="/images/apple-touch-icon-114x114.png" />*/}
      <link rel="canonical" href={`${theme.siteDetails.url + url}`} />
      <meta property="og:url" content={`${theme.siteDetails.url + url}`} />
      <meta property="og:site_name" content={`${theme.siteDetails.title}`} />
      <style>
      {styles}
      </style>
      {theme.siteDetails.analCode && (
        <>
          <script async src={`https://www.googletagmanager.com/gtag/js?id=${theme.siteDetails.analCode}`} />
          <script dangerouslySetInnerHTML={{ __html: gtag(theme.siteDetails.analCode) }} />
        </>
      )}
    </Head>
  )
}

const styles = `
:root {
  --primary: ${theme.colors.primary};
  --secondary: ${theme.colors.secondary};
  --body-color: ${theme.colors.text};
  --body-bg: ${theme.colors.primary};
  --body-font: ${theme.typography.fontFamily};
  --body-font-weight: ${theme.typography.fontWeight};
  --body-font-size: ${theme.typography.fontSize};
  --body-line-height: ${theme.typography.lineHeight};
}
@font-face {
  font-family: 'Kattelyn';
  src: url('/fonts/Kattelyn.woff2') format('woff2'), /* Modern Browsers */
       url('/fonts/Kattelyn.otf') format('opentype'); /* Safari, Android, iOS */
  font-style: normal;
  font-weight: normal;
  text-rendering: optimizeLegibility;
  font-display: swap;
}
`

function gtag(id) {
  return `
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', '${id}');
  `
}