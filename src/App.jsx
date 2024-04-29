import NavBar from "./components/NavBar.jsx"
import ItemListContainer from "./components/ItemListContainer.jsx"
import Carousel from "./components/Carousel.jsx"
import Footer from "./components/Footer.jsx"

function App() {
  return (
    <>
      <NavBar />
      <ItemListContainer Titulo={"Las mejores ofertas las encuentras aqui"} />
      <Carousel />
      <Footer />
    </>
  )
}

export default App
