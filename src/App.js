import "./style.css"
import Navbar from "./components/Navbar"
import Inputbox  from "./components/Input"
import Product from "./components/Product"
import About from "./components/About"
import Footer from "./components/Footer"




function App(){
    return(
    <>
    <Navbar></Navbar>
<Inputbox></Inputbox>
    <Product></Product>
    <About></About>
<Footer></Footer>
</>
)
}
export default App