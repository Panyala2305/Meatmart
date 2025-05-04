import Header from "../components/Header"
import MobileCartBar from "../components/MobileCartBar";
import MobProductSlider from "../components/MobProductSlider";
import Products from "../components/Products";


const Home = () =>{
    return (
        <div className="w-full">
            <Header/>
            <Products/>
            <MobProductSlider/>
            <MobileCartBar/> 
        </div>
    )
}

export default Home;