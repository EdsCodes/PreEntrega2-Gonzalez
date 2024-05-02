import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar"
import ItemListContainer from "./components/ItemListContainer"
import Footer from "./components/Footer"
import ItemDetailContainer from "./components/ItemDetailContainer"

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path={"/"} element={<ItemListContainer />} />
        <Route path={"/categoria/:id"} element={<ItemListContainer />} />
        <Route path={"/item/:id"} element={<ItemDetailContainer />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App



