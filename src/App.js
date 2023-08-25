import Navbar from "./components/Navbar/Navbar";
import Layout from "./components/Layout/Layout";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import SectionProducts from "./components/SectionProducts/SectionProducts";
import Categories from "./components/Categories/Categories";
import Products from "./components/Products/Products";
import Review from "./components/ReviewSection/Review";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
    <Navbar/>
    <Layout>
      <Hero/>
      <About/>
      <SectionProducts/>
      <Categories/>
      <Products/>
      <Review/>
      <Contact/>
    </Layout>
    <Footer/>
    </>
  );
}

export default App;
