import Banner from "../Banner/Banner"
import NavBar from "../NavBar/Navbar"
import Products from "../Products/Products"
import "../Products/Products.css";

 const Home=()=>{
    return(
        <div>
             <NavBar />
            <Banner />
            <div className='product-card-container'>
            <Products />
            </div>
        </div>
    )
 }

 export default Home