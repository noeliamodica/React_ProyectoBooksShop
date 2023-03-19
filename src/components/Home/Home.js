import Banner from "../Banner/Banner"
import NavBar from "../NavBar/Navbar"
import Products from "../Products/Products"


 const Home=()=>{
    return(
        <div>
             <NavBar />
            <Banner />
            <div className='product-card-container'></div>
            <Products />
        </div>
    )
 }

 export default Home