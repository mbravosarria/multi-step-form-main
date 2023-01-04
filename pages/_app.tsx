import '../styles/globals.css'
import type { AppProps } from 'next/app'
import localFont from '@next/font/local'

const myFont = localFont({
  src: [
    {
      path: '../public/fonts/Ubuntu-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/fonts/Ubuntu-Medium.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/fonts/Ubuntu-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
  ],
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={myFont.className}>
      <Component {...pageProps} />
    </main>
  )
}
