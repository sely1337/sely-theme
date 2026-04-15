import Layout from '../layouts/Layout';
import Hero from '../components/Hero';
import ProductsPromo from '../components/ProductsPromo';
import Features from '../components/Features';
import Testimonials from '../components/Testimonials';
import FAQ from '../components/FAQ';

const Home = () => {
  return (
    <Layout>
      <Hero />
      <ProductsPromo />
      <Features />
      <Testimonials />
      <FAQ />
    </Layout>
  );
};

export default Home;
