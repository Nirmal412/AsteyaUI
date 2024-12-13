import AboutUs from "../components/AboutUs.js";
import Footer from "../components/Footer.js";
import HeroSection from "../components/HeroSection.js"
import LuxuryProduct from "../components/LuxuryProduct.js";
import Navbar from "../components/Navbar.js"
import ShoppingExp from "../components/ShoppingExp.js";
import WhyChooseUs from "../components/WhyChooseUs.js";
import './LandingPage.css';

function LandingPage() {
    return (
        <div className="main-landing-page">
        <div class="green-header">
            <Navbar/>
            <HeroSection/>
        </div>
        <div>
            <WhyChooseUs/>
            <ShoppingExp/>
            <LuxuryProduct/>
            <AboutUs/>
            <Footer/>
        </div>

        </div>
    )
}

export default LandingPage
