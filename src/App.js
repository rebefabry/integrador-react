import Navbar from "./components/Navbar/Navbar";
import Layout from "./components/Layout/Layout";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";

function App() {
  return (
    <>
    <Navbar/>
    <Layout>
      <Hero/>
      <About/>
    </Layout>
    </>
  );
}

export default App;
