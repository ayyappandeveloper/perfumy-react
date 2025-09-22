import one from "../assets/one.jpg"
import two from "../assets/two.jpg"
import three from "../assets/three.jpg"

function Product(){
  return(
     <div class="container">
        <div class="product">
            <img src={one} alt="one"></img>
            <p>Misty forest breeze, earthy woods, fresh pine, subtle smoky warmth.</p>
        </div>
        <div class="product">
            <img src={two} alt="two"></img>
            <p>Misty forest breeze, earthy woods, fresh pine, subtle smoky warmth.</p>
        </div>
        <div class="product">
            <img src={three} alt="three"></img>
            <p>Misty forest breeze, earthy woods, fresh pine, subtle smoky warmth.</p>
        </div>
    </div>
  )
}
export default Product