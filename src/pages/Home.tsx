import { Layout } from '@/components/Layout';
import { Hero } from '@/components/Hero';
import { Services } from '@/components/Services';
import { About } from '@/components/About';
import { Blog } from '@/components/Blog';
import { Contact } from '@/components/Contact';

const Home = () => {
  return (
    <Layout>
      <Hero />
      <Services />
      <About />
      <Blog />
      <Contact />
    </Layout>
  );
};

export default Home;
