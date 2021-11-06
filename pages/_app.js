import profile from './profile'

function MyApp({ Component, pageProps }) {
  return (
    <profile>
      <Component {...pageProps} />
    </profile>
  )
}

export default MyApp
