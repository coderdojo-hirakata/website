import '../styles/globals.css'
import 'tailwindcss/tailwind.css'
import { Analytics } from '@vercel/analytics/react';

function MyApp({ Component, pageProps }) {
  return <>
  <Component {...pageProps} />
  <Analytics />
  </>
}

export default MyApp
