import '../styles/globals.css'
import 'tailwindcss/tailwind.css'

import type { AppProps } from 'app-tarefas'

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
