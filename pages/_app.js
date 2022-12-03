import '../styles/globals.css'
import Navbar from '../components/NavBar'
import Footer from '../components/Footer'
import Blogs from '../components/Blogs'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar/>
      <Blogs/>
      <Footer/>
    </>
  )
}

export default MyApp
