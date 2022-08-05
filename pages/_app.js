import '../styles/globals.scss'
import Head from "next/head"

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Kai Pereira</title>
        <meta name="description" content="Hi! I'm Kai, a passionate fullstack developer and UI/UX Designer based in Victoria, BC! I love solving hard problems and transfering them into beautiful and functional solutions!" />
        <meta name="keyword" content="FullStack Developer, UI, UX, Design, Developer, FullStack, Backend, Victoria, BC, Blogger, HTML, CSS, JavaScript, Nextjs, React, MongoDB, Mongoose, Express, Node" />
        <meta name="author" content="Kai Pereira" />
        <link rel="icon" href="/logo.png" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.2/css/all.min.css" integrity="sha512-1sCRPdkRXhBV2PBLUdRb4tMg1w2YPf37qatUFeS7zlBy7jJI8Lf4VHwWfZZfpXtYSLy85pkm9GaYVYMfw5BC1A==" crossorigin="anonymous" referrerpolicy="no-referrer" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
